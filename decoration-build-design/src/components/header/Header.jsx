import "./Header.css";

function Header(prop) {
  return (
    <h1 className="header">{prop.text}</h1>
  );
}

export default Header;