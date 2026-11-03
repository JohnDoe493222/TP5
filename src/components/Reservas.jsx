import React, { useState } from 'react';

const HABITACIONES = [
  {
    id: 1,
    nombre: 'Habitación Simple Standard',
    precio: 25000,
    descripcion: 'Ideal para personas que viajan solas por trabajo o turismo. Cuenta con cama de 1 plaza, escritorio y baño privado.',
    capacidad: '1 persona'
  },
  {
    id: 2,
    nombre: 'Habitación Doble Matrimonial',
    precio: 42000,
    descripcion: 'Amplia habitación con cama sommier King Size, balcón con vista a la ciudad y minibar.',
    capacidad: '2 personas'
  },
  {
    id: 3,
    nombre: 'Suite Junior',
    precio: 65000,
    descripcion: 'Espacio de lujo con área de estar independiente, jacuzzi, cama King Size y televisión de 55".',
    capacidad: '2 personas'
  },
  {
    id: 4,
    nombre: 'Suite Familiar Presidencial',
    precio: 95000,
    descripcion: 'Dos ambientes integrados, dos baños completos, capacidad ampliada y servicio a la habitación preferencial.',
    capacidad: '4 personas'
  }
];

export function Reservas() {
  const [habitacionSeleccionada, setHabitacionSeleccionada] = useState(null);
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');

  const handleReserva = (e) => {
    e.preventDefault();

    if (!habitacionSeleccionada) {
      alert('Por favor, selecciona una habitación.');
      return;
    }
    if (!fechaInicio || !fechaFin) {
      alert('Por favor, selecciona un rango completo de fechas.');
      return;
    }
    if (new Date(fechaInicio) >= new Date(fechaFin)) {
      alert('La fecha de salida debe ser posterior a la fecha de ingreso.');
      return;
    }

    const hab = HABITACIONES.find(h => h.id === parseInt(habitacionSeleccionada));
    
    alert(
      `¡Reserva confirmada con éxito!\n\n` +
      `Habitación: ${hab.nombre}\n` +
      `Check-in: ${fechaInicio}\n` +
      `Check-out: ${fechaFin}\n` +
      `¡Gracias por elegir Hotel Valle del Sol!`
    );

    setFechaInicio('');
    setFechaFin('');
    setHabitacionSeleccionada(null);
  };

  return (
    <section className="reservas-container">
      <h2>Nuestras Habitaciones</h2>
      
      <div className="habitaciones-grid">
        {HABITACIONES.map((hab) => (
          <div 
            key={hab.id} 
            className={`habitacion-card ${habitacionSeleccionada === String(hab.id) ? 'seleccionada' : ''}`}
          >
            <h3>{hab.nombre}</h3>
            <p className="capacidad">Capacidad: {hab.capacidad}</p>
            <p className="descripcion">{hab.descripcion}</p>
            <p className="precio">${hab.precio.toLocaleString('es-AR')} / noche</p>
            <button 
              className="btn-seleccionar"
              onClick={() => setHabitacionSeleccionada(String(hab.id))}
            >
              {habitacionSeleccionada === String(hab.id) ? 'Seleccionada' : 'Seleccionar'}
            </button>
          </div>
        ))}
      </div>

      <div className="formulario-reserva">
        <h3>Confirmar Período de Reserva</h3>
        <form onSubmit={handleReserva}>
          <div className="form-group">
            <label>Habitación seleccionada:</label>
            <select 
              value={habitacionSeleccionada || ''} 
              onChange={(e) => setHabitacionSeleccionada(e.target.value)}
              required
            >
              <option value="" disabled>-- Seleccioná una habitación --</option>
              {HABITACIONES.map((h) => (
                <option key={h.id} value={h.id}>
                  {h.nombre} (${h.precio.toLocaleString('es-AR')})
                </option>
              ))}
            </select>
          </div>

          <div className="form-range-fechas">
            <div className="form-group">
              <label htmlFor="fechaInicio">Fecha de Ingreso (Check-in):</label>
              <input 
                type="date" 
                id="fechaInicio"
                value={fechaInicio} 
                onChange={(e) => setFechaInicio(e.target.value)}
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="fechaFin">Fecha de Salida (Check-out):</label>
              <input 
                type="date" 
                id="fechaFin"
                value={fechaFin} 
                onChange={(e) => setFechaFin(e.target.value)}
                required 
              />
            </div>
          </div>

          <button type="submit" className="btn-confirmar">Confirmar Reserva</button>
        </form>
      </div>
    </section>
  );
}