export function CalculateTotalMonetaryAmount(items) {
  const amounts = items.map(item => item.amount);
  return amounts.reduce((accumulator, current) => (accumulator += current), 0).toFixed(2);
}
