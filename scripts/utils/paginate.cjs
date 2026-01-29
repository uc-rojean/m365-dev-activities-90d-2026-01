// scripts/utils/paginate.cjs
const DEFAULT_MAX_PAGES = Number(process.env.GRAPH_MAX_PAGES || 50);
const DEFAULT_DELAY_MS = Number(process.env.GRAPH_DELAY_MS || 100);

/**
 * Normalize Graph nextLink URLs:
 * Graph often returns @odata.nextLink as a full URL (https://graph.microsoft.com/v1.0/...)
 * Our fetchGraph expects a relative URL (e.g. /users?$skiptoken=...)
 */
function normalizeGraphUrl(url) {
  if (!url) return url;

  // Handle full Graph URLs (v1.0 or beta)
  const match = url.match(/^https:\/\/graph\.microsoft\.com\/(v1\.0|beta)(\/.*)$/i);
  if (match && match[2]) return match[2];

  // Already relative
  return url;
}

/**
 * Generic OData pagination helper for Microsoft Graph
 * Follows @odata.nextLink until exhaustion.
 */
async function paginate(
  initialUrl,
  fetchGraph,
  { maxPages = DEFAULT_MAX_PAGES, delayMs = DEFAULT_DELAY_MS, headers = {} } = {}
) {
  const results = [];
  let url = initialUrl;
  let pages = 0;

  while (url && pages < maxPages) {
    // Default ConsistencyLevel for count/advanced queries; allow override by caller
    const mergedHeaders = { ...headers };
    if (!('ConsistencyLevel' in mergedHeaders)) mergedHeaders.ConsistencyLevel = 'eventual';

    const data = await fetchGraph(url, { headers: mergedHeaders });

    if (Array.isArray(data?.value)) results.push(...data.value);

    url = normalizeGraphUrl(data?.['@odata.nextLink']);
    pages += 1;

    if (delayMs) await new Promise((r) => setTimeout(r, delayMs));
  }

  return results;
}

module.exports = { paginate };
