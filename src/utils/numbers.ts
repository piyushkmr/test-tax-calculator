export const round = (num: number, decimals: number = 2) => {
  const roundPrecision = Math.pow(10, decimals);
  return Math.round(num * roundPrecision) / roundPrecision;
}

export const formatCurrency = (num?: number, decimals: number = 0) => {
  if (num === undefined) {
    return '';
  }
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  }).format(num);
}
