import React, { useState } from 'react';
import { Header } from './components/Header';
import { Inicio } from './components/Inicio';
import { AcercaDeNosotros } from './components/AcercaDeNosotros';
import { Reservas } from './components/Reservas';
import './App.css';

export default function App() {
  const [seccionActual, setSeccionActual] = useState('inicio');

  return (
    <div className="app-container">
      <Header seccionActual={seccionActual} setSeccionActual={setSeccionActual} />
      
      <main className="main-content">
        {seccionActual === 'inicio' && <Inicio setSeccionActual={setSeccionActual} />}
        {seccionActual === 'acerca' && <AcercaDeNosotros />}
        {seccionActual === 'reservas' && <Reservas />}
      </main>

      <footer className="footer">
        <p>&copy; 2026 Hotel Valle del Sol - Lenguaje IV (UCASAL)</p>
      </footer>
    </div>
  );
}