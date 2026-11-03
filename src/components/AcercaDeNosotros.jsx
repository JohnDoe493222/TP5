import React from 'react';

export function AcercaDeNosotros() {
  return (
    <section className="acerca-container">
      <h2>Acerca de Nosotros</h2>
      <p className="descripcion">
        Con más de 15 años de trayectoria en el sector hotelero, Hotel Valle del Sol 
        nació con la misión de brindar un servicio de hotelería de alto nivel, combinando 
        la calidez humana con la máxima comodidad.
      </p>

      <div className="valores-grid">
        <div className="valor-item">
          <h3>Misión</h3>
          <p>Proporcionar una estadía inolvidable a nuestros huéspedes mediante instalaciones de excelencia y un servicio hospitalario único.</p>
        </div>
        <div className="valor-item">
          <h3>Visión</h3>
          <p>Ser reconocidos como el hotel de referencia en la región por nuestra calidad en atención, innovación tecnológica y compromiso medioambiental.</p>
        </div>
      </div>
    </section>
  );
}