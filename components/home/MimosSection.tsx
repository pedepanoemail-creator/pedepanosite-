import React from 'react';

export default function MimosSection() {
  return (
    <section className="py-20 px-6 bg-zinc-950">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white uppercase tracking-wide" style={{ fontFamily: 'Bebas Neue, cursive' }}>
          Quando a cabeça pesa,<br/>
          <span className="text-[#DC0000] neon-glow">
            a gente escreve.
          </span>
        </h2>
        <p className="text-zinc-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          Textos curtos para respirar, entender e seguir em frente.<br/>
          <span className="text-zinc-500">Sem julgamento. Sem coach. Sem mentira bonita.</span>
        </p>
      </div>
    </section>
  );
}
