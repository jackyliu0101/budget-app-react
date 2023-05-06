import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export const SidePanel = () => {
  return (
    <div className="side-panel">
      <Link to="/" className="site-title">MyExpenses</Link>
      <ul>
        <CustomLink to="/">Overview</CustomLink>
        <CustomLink to="/budget">Budget</CustomLink>
        <CustomLink to="/expenses">Expenses</CustomLink>
      </ul>
    </div>
  )
}

export const CustomLink = ({ to, children }) => {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  return (
    <li className={isActive ? "active" : ""}>
      <Link className="custom-link" to={to}>{children}</Link>
     </li>
  )
}
