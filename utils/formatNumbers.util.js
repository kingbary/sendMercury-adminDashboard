export function formatNumbers(value) {
  value = Number(value);
  if (value < 1000) return value;
  if (value >= 1000000) return `${Math.floor(value / 1000000)}M`;
  if (value >= 1000) return `${Math.floor(value / 1000)}K`;
}
