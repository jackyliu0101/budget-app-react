import { HistoryListItem } from './HistoryListItem';

export const HistoryList = ({ items }) => {
  return (
    <ul className="history-list">
      {items.map(item => (<HistoryListItem key={item.id} item={item} />))}
    </ul>
  )
}
