import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [blobCreado, setBlobCreado] = useState(null);
  const [contenidoSlice, setContenidoSlice] = useState('');

  const textoEjemplo = "Hola! Este es un archivo de texto creado usando el concepto de Blobs en React para Lenguaje IV.";

  // 1. Crear Blob de texto
  const crearBlob = () => {
    const nuevoBlob = new Blob([textoEjemplo], { type: 'text/plain;charset=utf-8' });
    setBlobCreado(nuevoBlob);
    alert('¡Blob de texto creado exitosamente en memoria!');
  };

  // 2. Descargar Blob como archivo .txt
  const descargarBlob = () => {
    if (!blobCreado) {
      alert('Primero debes crear el Blob.');
      return;
    }
    const url = URL.createObjectURL(blobCreado);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ejemplo-blob.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // 3. Utilizar Slice sobre el Blob
  const aplicarSlice = async () => {
    if (!blobCreado) {
      alert('Primero debes crear el Blob.');
      return;
    }
    // Corta los primeros 25 caracteres del Blob
    const blobTrozo = blobCreado.slice(0, 25, 'text/plain;charset=utf-8');
    const textoRecortado = await blobTrozo.text();
    setContenidoSlice(textoRecortado);
  };

  return (
    <div className="container">
      <h1>Ejemplo de uso de Blobs</h1>
      <div className="button-group">
        <button className="btn" onClick={crearBlob}>Crear Blob de texto</button>
        <button className="btn" onClick={descargarBlob}>Descargar Blob</button>
        <button className="btn" onClick={aplicarSlice}>Usar Slice</button>
      </div>

      {contenidoSlice && (
        <div className="resultado-slice">
          <h3>Resultado del Slice (0 a 25 caracteres):</h3>
          <p>"{contenidoSlice}"</p>
        </div>
      )}
    </div>
  );
}