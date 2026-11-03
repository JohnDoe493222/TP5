import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './App.css';

export default function App() {
  const [blobCreado, setBlobCreado] = useState(null);
  const [contenidoSlice, setContenidoSlice] = useState('');

  const textoEjemplo = "Trabajo Práctico N°6 - Integración de componentes Header, Footer y manejo de Blobs en React.";

  const crearBlob = () => {
    const nuevoBlob = new Blob([textoEjemplo], { type: 'text/plain;charset=utf-8' });
    setBlobCreado(nuevoBlob);
    alert('¡Blob creado!');
  };

  const descargarBlob = () => {
    if (!blobCreado) return alert('Creá un Blob primero.');
    const url = URL.createObjectURL(blobCreado);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'tp6-blob.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const aplicarSlice = async () => {
    if (!blobCreado) return alert('Creá un Blob primero.');
    const blobTrozo = blobCreado.slice(0, 20);
    setContenidoSlice(await blobTrozo.text());
  };

  return (
    <div className="layout-container">
      <Header />
      <main className="content">
        <h1>Ejemplo de uso de Blobs</h1>
        <div className="button-group">
          <button className="btn" onClick={crearBlob}>Crear Blob de texto</button>
          <button className="btn" onClick={descargarBlob}>Descargar Blob</button>
          <button className="btn" onClick={aplicarSlice}>Usar Slice</button>
        </div>

        {contenidoSlice && (
          <div className="resultado-slice">
            <p><strong>Resultado Slice:</strong> {contenidoSlice}</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}