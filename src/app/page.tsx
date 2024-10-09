// pages/index.tsx
import React from 'react';
import Header from './header';
import Dashboard from './dashboard';
import Footer from './foother';


const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Dashboard />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
