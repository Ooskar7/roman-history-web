import { Link } from "react-router-dom";

export default function ArticleNavigation({ items, currentId, basePath, labelKey }) {
  const index = items.findIndex(item => String(item.id) === String(currentId));
  if (index < 0 || items.length < 2) return null;

  const previous = items[index - 1];
  const next = items[index + 1];

  return (
    <nav className="article-pagination" aria-label="Explore more articles in this period">
      {previous && (
        <Link className="button-link secondary-button" to={`${basePath}/${previous.id}`}>
          ← Previous: {previous[labelKey]}
        </Link>
      )}
      {next && (
        <Link className="button-link secondary-button" to={`${basePath}/${next.id}`}>
          Next: {next[labelKey]} →
        </Link>
      )}
    </nav>
  );
}
