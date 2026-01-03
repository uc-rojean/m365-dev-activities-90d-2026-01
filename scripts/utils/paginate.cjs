
// scripts/utils/paginate.js
const DEFAULT_MAX_PAGES = Number(process.env.GRAPH_MAX_PAGES || 50);
const DEFAULT_DELAY_MS = Number(process.env.GRAPH_DELAY_MS || 100);

/**
 * Generic OData pagination helper for Microsoft Graph
 * Follows @odata.nextLink until exhaustion.
 */
async function paginate(initialUrl, fetchGraph, { maxPages = DEFAULT_MAX_PAGES, delayMs = DEFAULT_DELAY_MS } = {}) {
  const results = [];
  let url = initialUrl;
  let pages = 0;

  while (url && pages < maxPages) {
    const data = await fetchGraph(url, { headers: { ConsistencyLevel: 'eventual' } });
    if (Array.isArray(data?.value)) results.push(...data.value);
    url = data?.['@odata.nextLink'];
    pages += 1;
    if (delayMs) await new Promise(r => setTimeout(r, delayMs));
  }
  return results;
}

module.exports = { paginate };
