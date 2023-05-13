import "../../scss/components/Contacto/_Contacto.scss";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaMailBulk,
  FaStoreAlt,
} from "react-icons/fa";

export const Contacto = () => {
  return (
    <section className="contacto">
      <h2 className="contacto__h2">Contacto</h2>
      <p className="contacto__p">
        Si tienes alguna duda o sugerencia, no dudes en contactarnos. Puedes
        hacerlo a través de nuestro correo electrónico, Whatsapp o redes
        sociales. También puedes acercarte a nuestras sucursales.
      </p>
      <div className="contacto__div">
        <img
          className="contacto__div--img"
          src="/img/mailcat.jpg"
          alt="arroba"
        />
        <div className="contacto__div--seccion">
          <div className="contacto__div--seccion--mail">
            <i className="contacto__div--seccion--mail-icon">
              <FaMailBulk />
            </i>
            <a href="michi-shop@michitienda.com">michi-shop@michitienda.com</a>
          </div>
          <div className="contacto__div--seccion--wtp">
            <i className="contacto__div--seccion--wtp-icon">
              <FaWhatsapp />
            </i>
            <p>797-5624</p>
          </div>
          <div className="contacto__div--seccion--face">
            <i className="contacto__div--seccion--face-icon">
              <FaFacebook />
            </i>
            <a href="https://www.facebook.com">Facebook</a>
          </div>
          <div className="contacto__div--seccion--twt">
            <i className="contacto__div--seccion--twt-icon">
              <FaTwitter />
            </i>
            <a href="https://twitter.com">Twitter</a>
          </div>
          <div className="contacto__div--seccion--insta">
            <i className="contacto__div--seccion--insta-icon">
              <FaInstagram />
            </i>
            <a href="https://www.instagram.com">Instagram</a>
          </div>
          <div className="contacto__div--seccion--suc">
            <i className="contacto__div--seccion--suc-icon">
              <FaStoreAlt />
            </i>
            <p>Avenida Siempreviva 742, Springfield</p>
          </div>
        </div>
        <img
          className="contacto__div--img"
          src="/img/contacto.jpg"
          alt="gato espalda"
        />
      </div>
    </section>
  );
};
