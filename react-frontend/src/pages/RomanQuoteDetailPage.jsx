import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import ArticleRenderer from "../components/ArticleRenderer";
import LoadingMessage from "../components/LoadingMessage";
import ErrorMessage from "../components/ErrorMessage";
import { getRomanQuoteBySlug } from "../api/romanQuotesApi";

export default function RomanQuoteDetailPage() {
  const { slug } = useParams();
  const [state, setState] = useState({ slug: null, data: null, error: "" });
  const loading = state.slug !== slug;
  const { data, error } = state;

  useEffect(() => {
    const controller = new AbortController();
    window.scrollTo(0, 0);
    getRomanQuoteBySlug(slug, controller.signal)
      .then(data => { if (!controller.signal.aborted) setState({ slug, data, error: "" }); })
      .catch(err => { if (!controller.signal.aborted) setState({ slug, data: null, error: err.message }); });
    return () => controller.abort();
  }, [slug]);

  return (
    <Layout title="Roman Proverb and Quote Detail"
      subtitle="Discover the meaning and history behind a Latin expression."
      backgroundImage="/images/backgrounds/map_117ad_background.png">
      <Link to="/" className="button-link secondary-button">Back to Home</Link>
      <Link to="/roman-quotes" className="button-link secondary-button">Back to Roman Proverbs and Quotes</Link>
      {loading && <LoadingMessage message="Loading expression details..." />}
      {!loading && error && <ErrorMessage message={error} />}
      {!loading && !error && data && <>
        <article className="article-card">
          <header className="article-header">
            <h1 lang="la">{data.quote.latin}</h1>
            <div className="article-meta"><span>{data.quote.kind}</span></div>
          </header>
          <ArticleRenderer content={data.markdownContent} currentPath={`/roman-quotes/${slug}`} />
        </article>
        <nav className="quote-pagination" aria-label="Explore more expressions">
          {data.previous && <Link className="button-link secondary-button" to={`/roman-quotes/${data.previous.slug}`}>← Previous: {data.previous.latin}</Link>}
          {data.next && <Link className="button-link secondary-button" to={`/roman-quotes/${data.next.slug}`}>Next: {data.next.latin} →</Link>}
        </nav>
      </>}
    </Layout>
  );
}
