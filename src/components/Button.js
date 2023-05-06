export const Button = ({ variant, type, title, onClick }) => {
  return (
    <button className={variant} type={type} onClick={onClick}>{title}</button>
  )
}

Button.defaultProps = {
  variant: 'default',
  type: 'button',
}
