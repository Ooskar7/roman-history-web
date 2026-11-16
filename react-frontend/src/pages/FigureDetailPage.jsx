import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import LoadingMessage from "../components/LoadingMessage";
import ErrorMessage from "../components/ErrorMessage";
import ClickableImage from "../components/ClickableImage";
import ArticleNavigation from "../components/ArticleNavigation";
import ArticleRenderer from "../components/ArticleRenderer";
import { formatYearRange } from "../utils/formatters";
import { getFigureById, getPeriodById, getFiguresByPeriodId } from "../api/periodApi";

function FigureDetailPage() {
  const { id } = useParams();

  const [figure, setFigure] = useState(null);
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
    setFigure(null);
    setSiblings([]);
    window.scrollTo(0, 0);

    async function fetchFigureDetails() {
      try {
        const response = await getFigureById(id);
        if (!active) return;
        const [periodData, siblingsData] = await Promise.all([
          getPeriodById(response.figure.periodId),
          getFiguresByPeriodId(response.figure.periodId),
        ]);
        if (!active) return;
        setFigure(response.figure);
        setMarkdownContent(response.markdownContent);
        setPeriod(periodData);
        setSiblings(siblingsData);
      } catch (err) {
        if (active) setError(err.message);
      } finally {
        if (active) setLoading(false);
      }
    }

    fetchFigureDetails();
    return () => { active = false; };
  }, [id]);

  return (
    <Layout
      title="Roman Figure Detail"
      subtitle="Discover an important person in Roman history."
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

      {loading && <LoadingMessage message="Loading figure details..." />}
      {error && <ErrorMessage message={error} />}

      {!loading && !error && figure && String(figure.id) === id && (
        <>
        <article className="article-card">
          <header className="article-header">
            <h1>{figure.name}</h1>

            <div className="article-meta">
              <span>{formatYearRange(figure.birthYear, figure.deathYear)}</span>
              {period && <span>{period.name}</span>}
            </div>

            {figure.imageUrl && (
              <ClickableImage
                src={figure.imageUrl}
                alt={figure.name}
                imageClassName="article-hero-image"
              />
            )}
          </header>

          <ArticleRenderer content={markdownContent} currentPath={`/figure/${id}`} />
        </article>
        <ArticleNavigation
          items={siblings}
          currentId={id}
          basePath="/figure"
          labelKey="name"
        />
        </>
      )}
    </Layout>
  );
}

export default FigureDetailPage;
