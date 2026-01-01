"use client";
import React from 'react';
import { Heart, Brain, Smile } from 'lucide-react';

const categories = [
  { 
    icon: Heart, 
    title: 'Relacionamentos', 
    description: 'Verdades difíceis sobre amor, apego e escolhas ruins.',
    color: 'text-red-500' 
  },
  { 
    icon: Brain, 
    title: 'Inteligência Emocional', 
    description: 'Crescimento pessoal sem frases prontas e sem autoengano.',
    color: 'text-purple-500' 
  },
  { 
    icon: Smile, 
    title: 'Humor Ácido', 
    description: 'Rir do caos também é uma forma de sobreviver.',
    color: 'text-yellow-500' 
  },
];

export default function CategoryBar() {
  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {categories.map((cat, index) => (
          <div 
            key={index}
            className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-[#DC0000] transition-all group cursor-pointer"
            style={{
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 20px rgba(220, 0, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <cat.icon className={`w-12 h-12 ${cat.color} mb-4 group-hover:scale-125 transition-all drop-shadow-lg`} />
            <h3 className="text-2xl font-bold mb-2 text-white uppercase tracking-wide" style={{ fontFamily: 'Bebas Neue, cursive' }}>
              {cat.title}
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{cat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
