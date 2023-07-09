export const Button = ({ variant, type, title, onClick, disabled }) => {
  return (
    <button className={variant} type={type} onClick={onClick} disabled={disabled}>{title}</button>
  )
}

Button.defaultProps = {
  variant: 'default',
  type: 'button',
  disabled: false,
};
