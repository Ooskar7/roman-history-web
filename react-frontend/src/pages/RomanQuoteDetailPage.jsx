import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { romanQuotes } from "../data/romanQuotes";

export default function RomanQuoteDetailPage() {
  const { slug } = useParams();
  const index = romanQuotes.findIndex(quote => quote.slug === slug);
  const quote = romanQuotes[index];
  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!quote) return (
    <Layout title="Expression not found" subtitle="This expression is not in the collection.">
      <Link to="/roman-quotes" className="button-link">Browse all proverbs and quotes</Link>
    </Layout>
  );

  return (
    <Layout title={<span lang="la">{quote.latin}</span>} subtitle={quote.translation}
      backgroundImage="/images/backgrounds/map_117ad_background.png">
      <nav aria-label="Breadcrumb" className="quote-breadcrumb">
        <Link to="/">Home</Link><span aria-hidden="true"> / </span>
        <Link to="/roman-quotes">Roman Proverbs and Quotes</Link>
      </nav>
      <article className="card quote-article">
        <span className="quote-category">{quote.kind}</span>
        <section><h2>English translation</h2><p className="quote-translation">{quote.translation}</p></section>
        <section><h2>Author and attribution</h2><p>{quote.author}</p></section>
        <section><h2>Meaning</h2><p>{quote.meaning}</p></section>
        <section><h2>Cultural context</h2><p>{quote.context}</p></section>
        <section><h2>Significance and legacy</h2><p>{quote.impact}</p></section>
        <section className="quote-source-note"><h2>A note on the wording</h2><p>{quote.note}</p></section>
        <section><h2>Sources and further reading</h2><ul>{quote.sources.map(source => <li key={source.url}><a href={source.url}>{source.label}</a></li>)}</ul></section>
      </article>
      <nav className="quote-pagination" aria-label="Explore more expressions">
        {index > 0 && <Link className="button-link secondary-button" to={`/roman-quotes/${romanQuotes[index - 1].slug}`}>← Previous: {romanQuotes[index - 1].latin}</Link>}
        {index < romanQuotes.length - 1 && <Link className="button-link secondary-button" to={`/roman-quotes/${romanQuotes[index + 1].slug}`}>Next: {romanQuotes[index + 1].latin} →</Link>}
      </nav>
      <Link to="/roman-quotes" className="button-link">Back to all proverbs and quotes</Link>
    </Layout>
  );
}
