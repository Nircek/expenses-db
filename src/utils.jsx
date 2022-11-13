export const width = (ch) => ({ style: { width: ch + 'ch' } })
export const floatify = (x) => +x == parseFloat(x) ? +x : NaN;
