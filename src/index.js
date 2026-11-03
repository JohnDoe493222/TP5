import React, { useState } from 'react';

function ProyectoBlob() {
  const [blobData, setBlobData] = useState(null);

  const crearBlob = () => {
    const texto = "Este es un texto de prueba generado para el Trabajo Practico 7.";
    const nuevoBlob = new Blob([texto], { type: 'text/plain' });
    setBlobData(nuevoBlob);
    alert("Blob de texto creado exitosamente en memoria.");
  };

  const descargarBlob = () => {
    if (!blobData) {
      alert("Primero tenés que crear el Blob.");
      return;
    }
    const url = URL.createObjectURL(blobData);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'tp7_blob.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const usarSlice = () => {
    if (!blobData) {
      alert("Primero tenés que crear el Blob.");
      return;
    }
    const slicedBlob = blobData.slice(0, 15, 'text/plain');
    const reader = new FileReader();
    reader.onload = function() {
      alert("Resultado del slice() (primeros 15 bytes): " + reader.result);
    };
    reader.readAsText(slicedBlob);
  };

  return (
    <div className="blob-container">
      <h2>Ejemplo de uso de Blobs</h2>
      <div className="button-group">
        <button onClick={crearBlob}>Crear Blob de texto</button>
        <button onClick={descargarBlob}>Descargar Blob</button>
        <button onClick={usarSlice}>Usar slice()</button>
      </div>
    </div>
  );
}

export default ProyectoBlob;