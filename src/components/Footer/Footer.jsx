import "../../scss/components/Footer/_footer.scss";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__img">
        <img src="/img/footer.jpg" alt="silueta gato durmiendo" />
      </div>
      <div className="footer__div">
        <h4 className="footer__div--h4">Seguinos en nuestras Redes Sociales</h4>
        <FaInstagram className="footer__div--instagram" />
        <FaFacebook className="footer__div--facebook" />
        <FaTwitter className="footer__div--twitter" />
      </div>
      <p class="footer__p">&copy;2023 MichiShop by Nawsper</p>
    </div>
  );
};
