import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import LoadingMessage from "../components/LoadingMessage";
import ErrorMessage from "../components/ErrorMessage";
import ClickableImage from "../components/ClickableImage";
import ArticleNavigation from "../components/ArticleNavigation";
import ArticleRenderer from "../components/ArticleRenderer";
import { formatYear } from "../utils/formatters";
import { getEventById, getPeriodById, getEventsByPeriodId } from "../api/periodApi";

function EventDetailPage() {
  const { id } = useParams();

  const [event, setEvent] = useState(null);
  const [siblings, setSiblings] = useState([]);
  const [period, setPeriod] = useState(null);
  const [markdownContent, setMarkdownContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError("");
    setPeriod(null);
    setEvent(null);
    setSiblings([]);
    window.scrollTo(0, 0);

    async function fetchEventDetails() {
      try {
        const response = await getEventById(id);
        if (!active) return;
        const [periodData, siblingsData] = await Promise.all([
          getPeriodById(response.event.periodId),
          getEventsByPeriodId(response.event.periodId),
        ]);
        if (!active) return;
        setEvent(response.event);
        setMarkdownContent(response.markdownContent);
        setPeriod(periodData);
        setSiblings([...siblingsData].sort((a, b) => a.year - b.year));
      } catch (err) {
        if (active) setError(err.message);
      } finally {
        if (active) setLoading(false);
      }
    }

    fetchEventDetails();
    return () => { active = false; };
  }, [id]);

  return (
    <Layout
      title="Roman Event Detail"
      subtitle="Discover an important event in Roman history."
      backgroundImage="/images/backgrounds/map_117ad_background.png"
    >
      <Link to="/periods" className="button-link secondary-button">
        Back to Periods
      </Link>

      {period && (
        <Link to={`/period/${period.id}`} className="button-link secondary-button">
          Back to {period.name}
        </Link>
      )}

      {loading && <LoadingMessage message="Loading event details..." />}
      {error && <ErrorMessage message={error} />}

      {!loading && !error && event && String(event.id) === id && (
        <>
        <article className="article-card">
          <header className="article-header">
            <h1>{event.title}</h1>

            <div className="article-meta">
              <span>{formatYear(event.year)}</span>
              <span>{event.location}</span>
              {period && <span>{period.name}</span>}
            </div>

            {event.imageUrl && (
              <ClickableImage
                src={event.imageUrl}
                alt={event.title}
                imageClassName="article-hero-image"
              />
            )}
          </header>

          <ArticleRenderer content={markdownContent} currentPath={`/event/${id}`} />
        </article>
        <ArticleNavigation
          items={siblings}
          currentId={id}
          basePath="/event"
          labelKey="title"
        />
        </>
      )}
    </Layout>
  );
}

export default EventDetailPage;
