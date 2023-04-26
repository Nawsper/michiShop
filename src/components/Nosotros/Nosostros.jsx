import "../../scss/components/Nosotros/_Nosotros.scss";

export const Nosotros = () => {
  return (
    <div className="presentNos">
      <img
        className="presentNos__img"
        src="/img/nosotros.jpg"
        alt="siluetas gatos"
      />
      <div className="presentNos__container">
        <h2 className="presentNos__container--h2">MichiStaff</h2>
        <p className="presentNos__container--p">
          En Michi Shop somos un equipo de amantes de los gatos, dedicados a
          ofrecer productos de calidad y atención al cliente excepcional.
          Sabemos lo importante que es para ti la salud y la felicidad de tu
          mascota, por eso seleccionamos cuidadosamente cada producto que
          ofrecemos en nuestra tienda online. Además, estamos comprometidos con
          la satisfacción de nuestros clientes, por eso trabajamos arduamente
          para ofrecerte un servicio excepcional, desde la selección de
          productos hasta la entrega rápida y segura en la comodidad de tu
          hogar. En Michi Shop, nos encanta consentir a nuestros gatos y
          queremos que tú también lo hagas. ¡Confía en nosotros para satisfacer
          todas las necesidades de tu felino favorito!
        </p>
      </div>
    </div>
  );
};
