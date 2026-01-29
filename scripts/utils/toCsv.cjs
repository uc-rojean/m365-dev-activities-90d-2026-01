// scripts/utils/toCsv.cjs
/**
 * Minimal CSV serializer:
 * - Flattens nested objects (one level) into "key.subkey"
 * - Unions all keys across rows to build the header
 * - Stable header order (sorted) for consistent diffs
 * - Escapes commas/quotes/newlines (\n and \r)
 */
function normalizeValue(v) {
  if (v === null || v === undefined) return '';
  if (v instanceof Date) return v.toISOString();
  if (Array.isArray(v)) return JSON.stringify(v);
  if (typeof v === 'object') return JSON.stringify(v); // fallback safety
  return v;
}

function flattenOnce(obj) {
  const out = {};
  for (const [k, v] of Object.entries(obj || {})) {
    if (v && typeof v === 'object' && !Array.isArray(v) && !(v instanceof Date)) {
      for (const [sk, sv] of Object.entries(v)) {
        out[`${k}.${sk}`] = normalizeValue(sv);
      }
    } else {
      out[k] = normalizeValue(v);
    }
  }
  return out;
}

function escapeCsv(val) {
  if (val === null || val === undefined) return '';
  const s = String(val);
  const mustQuote = /[,"\n\r]/.test(s);
  return mustQuote ? `"${s.replace(/"/g, '""')}"` : s;
}

function toCsv(rows) {
  const flat = (rows || []).map(flattenOnce);

  // Collect headers (union)
  const headerSet = new Set();
  for (const r of flat) {
    for (const k of Object.keys(r)) headerSet.add(k);
  }

  // Stable header order for consistent output
  const headers = Array.from(headerSet).sort((a, b) => a.localeCompare(b));

  const lines = [];
  lines.push(headers.join(','));

  for (const r of flat) {
    lines.push(headers.map((h) => escapeCsv(r[h])).join(','));
  }

  return lines.join('\n');
}

module.exports = { toCsv };
