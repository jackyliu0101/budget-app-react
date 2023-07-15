export const HistoryListItem = ({ item }) => {
  return (
    <li>
      {item.name} <span>${item.amount.toFixed(2)}</span>
    </li>
  )
}
