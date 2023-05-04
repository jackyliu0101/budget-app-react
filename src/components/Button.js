export const Button = ({ type, title, onClick }) => {
  return (
    <button className={type} onClick={onClick}>{title}</button>
  )
}

Button.defaultProps = {
  type: 'default'
}
