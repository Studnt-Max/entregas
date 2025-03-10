'use client'

import { useState } from 'react';

export default function Hook() {
  const [color, setColor] = useState('bg-gray-200');

  const colors = [
    { name: 'Rojo', class: 'bg-red-500' },
    { name: 'Verde', class: 'bg-green-500' },
    { name: 'Azul', class: 'bg-blue-500' },
    { name: 'Amarillo', class: 'bg-yellow-500' },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <header>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><a href="/page2">Hook</a></li>
          </ul>
        </nav>
      </header>
      <div className={`w-64 h-64 ${color} mb-8`}></div>
      <div className="flex space-x-4">
        {colors.map((c, index) => (
          <button
            key={index}
            onClick={() => setColor(c.class)}
            className={`${c.class} text-white px-4 py-2 rounded`}
          >
            {c.name}
          </button>
        ))}
      </div>
    </div>
  );
}
