import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <nav class="navbar">
        <div class="navbar-container container">
            <input type="checkbox" name="" id="" />
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
            <ul class="menu-items">
                <li><a href="#">Anasayfa</a></li>
                <li><a href="#">Hakkımızda</a></li>
                <li><a href="#">Projeler</a></li>
                <li><a href="#">İletişim</a></li>
            </ul>
            <h1 class="logo">Yapı<span>Tasarım</span><span>Dekorasyon</span></h1>
        </div>
    </nav>
  );
}

export default Navbar;
