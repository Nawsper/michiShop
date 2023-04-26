import "../../scss/components/Inicio/_Inicio.scss";

export const Inicio = () => {
  return (
    <div className="presentacion">
      <img
        className="presentacion__img"
        src="/img/inicio.jpg"
        alt="silueta gato"
      />
      <div className="presentacion__container">
        <h2 className="presentacion__container--h2">La Michi Tienda</h2>
        <p className="presentacion__container--p">
          Bienvenido a Michi Shop, tu tienda online de productos para gatos.
          Aquí encontrarás todo lo que necesitas para cuidar y consentir a tu
          gato, desde alimentos y juguetes hasta ropa y accesorios de calidad.
          En Michi Shop nos preocupamos por la felicidad y la salud de tu
          mascota, por eso trabajamos con los mejores proveedores para ofrecerte
          productos de alta calidad a precios accesibles. Explora nuestro
          catálogo de productos y sorpréndete con la variedad y la calidad que
          ofrecemos. ¡Haz feliz a tu gato con Michi Shop!
        </p>
      </div>
    </div>
  );
};
