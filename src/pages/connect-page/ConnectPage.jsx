import "./ConnectPage.css";
import Header from '../../components/header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function ConnectPage() {
  return (
    <div className="connect-page">
        <Header text="Bize Ulaşın" />
        <div className="content">
            <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1529.8628392704934!2d32.835661801122505!3d39.92515476174451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f190a9cea8f%3A0xd3862ea8248d08a0!2sAn%C4%B1tkabir!5e0!3m2!1str!2str!4v1690926168839!5m2!1str!2str" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="information">
            <div className="mail"><span>Email</span>email@gmail.com</div>
            <div className="phone"><span>Telefon</span>+90 000 000 00 00</div>
            <div className="address"><span>Adres</span>[Şirket Adresi]</div>
            <div className="social-media">
                <span>Sosyal Medya</span>
                <div>
                    <a href="#"><FontAwesomeIcon icon={faTwitter} /> / twitter</a>
                    <a href="#"><FontAwesomeIcon icon={faFacebook} /> / facebook</a>
                    <a href="#"><FontAwesomeIcon icon={faInstagram} /> / instagram</a>
                </div>
        </div>
            </div>
        </div>
    </div>
  );
}

export default ConnectPage;