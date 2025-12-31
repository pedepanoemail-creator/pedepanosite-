'use client';

import React from 'react';
import Link from 'next/link'; // Importação correta para Next.js

const Header = () => {
  return (
    <header className="bg-black border-b border-red-900/30 py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-red-600 hover:text-red-500 transition-colors">
          PEDEPANO<span className="text-white">.</span>
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-300 hover:text-red-500 transition-colors">Home</Link>
          <Link href="/sobre" className="text-gray-300 hover:text-red-500 transition-colors">Sobre</Link>
          <Link href="/contato" className="text-gray-300 hover:text-red-500 transition-colors">Contato</Link>
        </nav>

        <button className="bg-red-700 hover:bg-red-600 text-white px-5 py-2 rounded-full text-sm font-medium transition-all hover:shadow-[0_0_15px_rgba(185,28,28,0.5)]">
          Newsletter
        </button>
      </div>
    </header>
  );
};

export default Header;
