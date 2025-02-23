'use client'

import { useState } from 'react';

export default function Home() {

  const [count, setCount] = useState(0);
  const [error, setError] = useState('');

  const increment = () => {
    setCount(count + 1);
    setError('');
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setError(''); // Limpiar el mensaje de error al decrementar
    } else {
      setError('Error: El contador no puede ser menor que 0.'); // Mostrar mensaje de error
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <header>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="/page2">Hook</a></li>
        </ul>
      </nav>
    </header>

      <h1 className="text-2xl mb-4">Contador: {count}</h1>
      <div className="space-x-4">
        <button
          onClick={decrement}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Disminuir
        </button>
        <button
          onClick={increment}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Aumentar
        </button>
      </div>
      {error && <p className="text-red-500 mt-4">{error}</p>} {/* Mostrar mensaje de error */}
    </div>
  );
}