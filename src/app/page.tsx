'use client'

import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Error: El contador no puede ser menor que 0.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
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
    </div>
  );
}