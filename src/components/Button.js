export const Button = ({ type, title }) => {
  return (
    <button className={type}>{title}</button>
  )
}

Button.defaultProps = {
  type: 'default'
}
