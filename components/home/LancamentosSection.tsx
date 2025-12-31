import React from 'react';
import { Button } from '@/components/ui/button';

export default function LancamentosSection() {
  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white uppercase tracking-wide" style={{ fontFamily: 'Bebas Neue, cursive' }}>
          Quer ir mais fundo?
        </h2>
        <p className="text-zinc-300 mb-8 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          Alguns conteúdos não cabem em um post.<br/>
          <span className="text-zinc-500">Ebooks e materiais exclusivos para quem quer mudança real.</span>
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button 
            className="px-10 py-5 bg-[#DC0000] hover:bg-[#FF0000] text-white font-bold rounded-full transition-all transform hover:scale-110 uppercase tracking-wider text-lg neon-border"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            📖 Explorar conteúdos
          </Button>
          <Button 
            variant="outline"
            className="px-10 py-5 border-2 border-white/30 text-white hover:bg-white/10 font-bold rounded-full transition-all transform hover:scale-110 uppercase tracking-wider text-lg"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            💬 Fale conosco
          </Button>
        </div>
      </div>
    </section>
  );
}
