const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/roman-quotes`;

async function fetchQuotes(path, signal) {
  const response = await fetch(`${BASE_URL}${path}`, { signal });
  if (!response.ok) {
    throw new Error(response.status === 404
      ? "This expression is not in the collection."
      : "Unable to load Roman proverbs and quotes. Please try again.");
  }
  return response.json();
}

export const getAllRomanQuotes = signal => fetchQuotes("", signal);
export const getRomanQuoteBySlug = (slug, signal) => fetchQuotes(`/${encodeURIComponent(slug)}`, signal);
