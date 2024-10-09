// components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-green-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Sistema de Calificaciones</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="/perfil" className="hover:text-gray-300">Perfil</a>
          </li>
          <li>
            <a href="/logout" className="hover:text-gray-300">Cerrar sesión</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
