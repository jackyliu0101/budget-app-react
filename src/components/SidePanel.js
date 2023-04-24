export const SidePanel = () => {
  return (
    <div className="sidePanel">
      <a className="site-title">MyExpenses</a>
      <ul>
        <li>
          <a href="/overview">Overview</a>
        </li>
        <li>
          <a href="/budget">Budget</a>
        </li>
        <li>
          <a href="/expenses">Expenses</a>
        </li>
      </ul>
    </div>
  )
}
