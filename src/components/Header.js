export const Header = ({ title, amount }) => {
  return (
    <div className="total-container">
      <h3>{title}</h3>
      <h1>{amount}</h1>
      <hr/>
    </div>
  );
}
