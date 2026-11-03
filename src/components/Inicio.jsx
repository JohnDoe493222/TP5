import React from 'react';

export function Inicio({ setSeccionActual }) {
  return (
    <section className="inicio-container">
      <div className="hero">
        <h2>Bienvenido a Hotel Valle del Sol</h2>
        <p>Disfrutá de la mejor experiencia de descanso, confort y atención personalizada.</p>
        <button className="btn-primary" onClick={() => setSeccionActual('reservas')}>
          Reservar Ahora
        </button>
      </div>
      
      <div className="destacados">
        <div className="card-info">
          <h3>Ubicación Privilegiada</h3>
          <p>En el corazón de la ciudad, cerca de los principales puntos turísticos.</p>
        </div>
        <div className="card-info">
          <h3>Servicios Premium</h3>
          <p>Wi-Fi de alta velocidad, desayuno buffet y atención las 24 horas.</p>
        </div>
        <div className="card-info">
          <h3>Confort Garantizado</h3>
          <p>Habitaciones totalmente equipadas para un descanso óptimo.</p>
        </div>
      </div>
    </section>
  );
}