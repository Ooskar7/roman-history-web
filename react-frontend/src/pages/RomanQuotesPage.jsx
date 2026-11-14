import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { romanQuotes } from "../data/romanQuotes";

export default function RomanQuotesPage() {
  const [query, setQuery] = useState("");
  const search = query.trim().toLocaleLowerCase();
  const matches = romanQuotes.filter(quote =>
    [quote.latin, quote.translation, quote.author, quote.kind, quote.note]
      .join(" ").toLocaleLowerCase().includes(search)
  );

  return (
    <Layout title="Roman Proverbs and Quotes"
      subtitle="Explore the words, ideas, and stories that outlived ancient Rome."
      backgroundImage="/images/backgrounds/map_117ad_background.png">
      <Link to="/" className="button-link secondary-button">Back to Home</Link>
      <section className="card quotes-introduction">
        <h2>Latin words, lasting ideas</h2>
        <p>Discover famous Roman quotations, proverbs, and expressions, alongside later Latin mottos inspired by the classical world. Open an entry for its English translation, meaning, author, cultural context, and historical legacy.</p>
        <p>Some familiar sayings are adaptations or have uncertain origins. Each entry explains what the sources actually support.</p>
      </section>
      <div className="search-box">
        <label htmlFor="quote-search" className="search-label">Find a quote, translation, or author</label>
        <input id="quote-search" type="search" className="search-input" value={query}
          onChange={event => setQuery(event.target.value)} placeholder="Try Caesar, love, or carpe diem…" />
      </div>
      <p className="results-info" role="status">{matches.length} of {romanQuotes.length} expressions</p>
      <div className="quotes-grid">
        {matches.map(quote => (
          <article className="card quote-card" key={quote.slug}>
            <span className="quote-category">{quote.kind}</span>
            <h2><Link to={`/roman-quotes/${quote.slug}`} lang="la">{quote.latin}</Link></h2>
            <p className="quote-translation">{quote.translation}</p>
            <p className="quote-author">{quote.author}</p>
            <Link className="button-link" to={`/roman-quotes/${quote.slug}`} aria-label={`Explore ${quote.latin}`}>Explore this expression</Link>
          </article>
        ))}
      </div>
      {matches.length === 0 && <div className="card"><h2>No expressions found</h2><p>Try another Latin phrase, English word, or author.</p><button type="button" className="button-link quote-reset" onClick={() => setQuery("")}>Show all expressions</button></div>}
    </Layout>
  );
}
