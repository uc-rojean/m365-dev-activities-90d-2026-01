
// scripts/utils/toCsv.js
/**
 * Minimal CSV serializer:
 * - Flattens nested objects (one level) into "key.subkey"
 * - Unions all keys across rows to build the header
 * - Escapes commas/quotes/newlines
 */
function flattenOnce(obj) {
  const out = {};
  for (const [k, v] of Object.entries(obj || {})) {
    if (v && typeof v === 'object' && !Array.isArray(v)) {
      for (const [sk, sv] of Object.entries(v)) {
        out[`${k}.${sk}`] = sv;
      }
    } else {
      out[k] = Array.isArray(v) ? JSON.stringify(v) : v;
    }
  }
  return out;
}

function toCsv(rows) {
  const flat = rows.map(flattenOnce);
  const headerSet = new Set();
  flat.forEach(r => Object.keys(r).forEach(k => headerSet.add(k)));
  const headers = Array.from(headerSet);

  const esc = (val) => {
    if (val === null || val === undefined) return '';
    const s = String(val);
    const mustQuote = /[,"\n]/.test(s);
    return mustQuote ? `"${s.replace(/"/g, '""')}"` : s;
  };

  const lines = [];
  lines.push(headers.join(','));
  for (const r of flat) {
    lines.push(headers.map(h => esc(r[h])).join(','));
  }
  return lines.join('\n');
}

module.exports = { toCsv };
