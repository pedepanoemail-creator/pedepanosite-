import React from 'react';
export default function LancamentosSection() {
  return (
    <section className="py-16 bg-black text-white px-10 md:px-20">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-red-500">Lançamentos da Semana</h2>
          <p className="text-gray-300 text-lg mb-8">
            Fique por dentro das últimas novidades da Pede Pano. Peças exclusivas que acabaram de chegar!
          </p>
          <button className="bg-transparent border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-3 rounded-full font-bold transition-all">
            Explorar Novidades
          </button>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4">
          <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400" className="rounded-lg hover:opacity-75 transition" />
          <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400" className="rounded-lg hover:opacity-75 transition" />
        </div>
      </div>
    </section>
  );
}
