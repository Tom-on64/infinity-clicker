/**
 * Formats any number to a string.
 * @param {number} num Any number to format
 * @returns {string} A rounded value with a suffix (ie. 1 234 567 = 1.23M)
 */
export const formatNumber = (num) => {
  const isNegative = !(Math.abs(num) == num);
  const n = Math.abs(num);

  if (n < Math.pow(10, 3)) return `${isNegative ? "-" : ""}${n.toFixed(2)}`;
  else if (n < Math.pow(10, 6))
    return `${isNegative ? "-" : ""}${(n / Math.pow(10, 3)).toFixed(2)}K`;
  else if (n < Math.pow(10, 9))
    return `${isNegative ? "-" : ""}${(n / Math.pow(10, 6)).toFixed(2)}M`;
  else if (n < Math.pow(10, 12))
    return `${isNegative ? "-" : ""}${(n / Math.pow(10, 9)).toFixed(2)}B`;
  else if (n < Math.pow(10, 15))
    return `${isNegative ? "-" : ""}${(n / Math.pow(10, 12)).toFixed(2)}T`;
  else if (n < Math.pow(10, 18))
    return `${isNegative ? "-" : ""}${(n / Math.pow(10, 15)).toFixed(2)}Qa`;
  else if (n < Math.pow(10, 21))
    return `${isNegative ? "-" : ""}${(n / Math.pow(10, 18)).toFixed(2)}Qt`;
  else if (n < Math.pow(10, 24))
    return `${isNegative ? "-" : ""}${(n / Math.pow(10, 21)).toFixed(2)}Sx`;
  else if (n < Math.pow(10, 27))
    return `${isNegative ? "-" : ""}${(n / Math.pow(10, 24)).toFixed(2)}Sp`;
  else if (n < Math.pow(10, 30))
    return `${isNegative ? "-" : ""}${(n / Math.pow(10, 27)).toFixed(2)}Oc`;
  else if (n < Math.pow(10, 33))
    return `${isNegative ? "-" : ""}${(n / Math.pow(10, 30)).toFixed(2)}No`;
  else if (n < Math.pow(10, 36))
    return `${isNegative ? "-" : ""}${(n / Math.pow(10, 33)).toFixed(2)}Dc`;
  else if (!isFinite(n)) return "Infinity";
  else
    return `${isNegative ? "-" : ""}${(
      n / Math.pow(10, Math.floor(Math.log10(n)))
    ).toFixed(2)}e${Math.floor(Math.log10(n))}`;
};
