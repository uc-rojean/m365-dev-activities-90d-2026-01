
// scripts/utils/paginate.js
/**
 * Generic OData pagination helper for Microsoft Graph
 * - Follows @odata.nextLink until exhaustion
 * - Accepts a fetcher that returns parsed JSON { value, '@odata.nextLink': next }
 * - Adds ConsistencyLevel: eventual for queries that use $count or $filter on directory entities
 */
async function paginate(initialUrl, fetchGraph, { maxPages = 100, delayMs = 0 } = {}) {
  const results = [];
  let url = initialUrl;
  let pages = 0;

  while (url && pages < maxPages) {
    const data = await fetchGraph(url, { headers: { ConsistencyLevel: 'eventual' } });
    if (Array.isArray(data?.value)) {
      results.push(...data.value);
    }
    url = data?.['@odata.nextLink'];
    pages += 1;
    if (delayMs) await new Promise(r => setTimeout(r, delayMs));
  }

  return results;
}

module.exports = { paginate };
