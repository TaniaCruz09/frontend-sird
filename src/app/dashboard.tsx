// components/Dashboard.tsx
import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-semibold mb-6 text-center">Panel de Control</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <a href="/calificaciones" className="bg-white shadow-md p-6 rounded-lg hover:bg-gray-50">
          <h3 className="text-lg font-medium text-center">Ver Calificaciones</h3>
        </a>
        <a href="/materias" className="bg-white shadow-md p-6 rounded-lg hover:bg-gray-50">
          <h3 className="text-lg font-medium text-center">Ver Materias</h3>
        </a>
        <a href="/evaluaciones" className="bg-white shadow-md p-6 rounded-lg hover:bg-gray-50">
          <h3 className="text-lg font-medium text-center">Ver Evaluaciones</h3>
        </a>
        <a href="/reportes" className="bg-white shadow-md p-6 rounded-lg hover:bg-gray-50">
          <h3 className="text-lg font-medium text-center">Ver Reportes</h3>
        </a>
      </div>
    </section>
  );
};

export default Dashboard;
