import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
        <div className="navbar-container container">
            <input type="checkbox" name="" id="" />
            <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </div>
            <ul className="menu-items">
                <li><Link to='/'>Anasayfa</Link></li>
                <li><Link to='/hakkimizda'>Hakkımızda</Link></li>
                <li><Link to='/projeler'>Projeler</Link></li>
                <li><Link to='/iletisim'>İletişim</Link></li>
            </ul>
            <h1 className="logo">Yapı<span>Tasarım</span><span>Dekorasyon</span></h1>
        </div>
    </nav>
  );
}

export default Navbar;
