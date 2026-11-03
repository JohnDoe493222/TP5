import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [archivoBlob, setArchivoBlob] = useState(null);
  const [resultado, setResultado] = useState('');

  const handleCrearBlob = () => {
    const texto = "Texto de prueba para el TP6 sobre manipulación de Blobs en React.";
    const nuevoBlob = new Blob([texto], { type: 'text/plain' });

    setArchivoBlob(nuevoBlob);
    setResultado(`Blob creado con éxito. Tamaño: ${nuevoBlob.size} bytes.`);
    alert("¡Blob creado correctamente!");
  };

  const handleDescargarBlob = () => {
    if (!archivoBlob) {
      alert("Primero debes crear el Blob.");
      return;
    }

    const url = URL.createObjectURL(archivoBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'archivo.txt';
    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setResultado("Archivo descargado en tu PC con éxito.");
  };

  const handleUsarSlice = () => {
    if (!archivoBlob) {
      alert("Primero debes crear el Blob.");
      return;
    }

    const blobRecortado = archivoBlob.slice(0, 25);
    const lector = new FileReader();

    lector.onload = function () {
      setResultado(`Resultado de slice(0, 25): "${lector.result}"`);
    };

    lector.readAsText(blobRecortado);
  };

  return (
    <div className="layout">
      <Header />

      <main className="contenido-principal">
        <h2>Ejemplo de uso de Blobs</h2>

        <div className="botones">
          <button onClick={handleCrearBlob}>Crear Blob de texto</button>
          <button onClick={handleDescargarBlob}>Descargar Blob</button>
          <button onClick={handleUsarSlice}>Usar slice()</button>
        </div>

        {resultado && (
          <div className="consola">
            <p>{resultado}</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;