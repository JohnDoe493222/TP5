import React from 'react';

export function Header({ seccionActual, setSeccionActual }) {
  return (
    <header className="header">
      <div className="logo">
        <h1>Hotel Valle del Sol</h1>
      </div>
      <nav>
        <button 
          className={seccionActual === 'inicio' ? 'active' : ''} 
          onClick={() => setSeccionActual('inicio')}
        >
          Inicio
        </button>
        <button 
          className={seccionActual === 'acerca' ? 'active' : ''} 
          onClick={() => setSeccionActual('acerca')}
        >
          Acerca de Nosotros
        </button>
        <button 
          className={seccionActual === 'reservas' ? 'active' : ''} 
          onClick={() => setSeccionActual('reservas')}
        >
          Reservas
        </button>
      </nav>
    </header>
  );
}