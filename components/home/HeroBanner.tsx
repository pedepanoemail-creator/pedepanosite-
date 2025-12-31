"use client";
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: 'Amor não acaba.',
    subtitle: 'Ele apodrece em silêncio.',
    description: 'Pedepano e a Bruxa Tesusa dizem o que você sente — com sarcasmo elegante, humor ácido e zero romantização da dor.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6954c2c85e9930a8d5e807ad/0d09028fc_lkjhgfcvbn.jpg',
  },
  {
    id: 2,
    title: 'O silêncio diz tudo',
    subtitle: 'que ninguém teve coragem.',
    description: 'Reflexões brutas sobre relacionamentos, escolhas e a verdade que dói — mas liberta.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6954c2c85e9930a8d5e807ad/0d09028fc_lkjhgfcvbn.jpg',
  },
  {
    id: 3,
    title: 'Quando a cabeça pesa,',
    subtitle: 'a gente escreve.',
    description: 'Textos curtos para respirar, entender e seguir em frente. Sem julgamento. Sem coach. Sem mentira bonita.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6954c2c85e9930a8d5e807ad/0d09028fc_lkjhgfcvbn.jpg',
  },
];

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${slide.image})`,
            }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black"></div>
          </div>

          {/* Content */}
          <div className="relative z-20 h-full flex items-center justify-center px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-white mb-2 drop-shadow-2xl uppercase">
                {slide.title}
                <br/>
                <span 
                  className="text-[#DC0000] neon-glow"
                >
                  {slide.subtitle}
                </span>
              </h1>

              <p className="mt-6 text-lg md:text-xl text-zinc-200 max-w-2xl mx-auto drop-shadow-lg">
                {slide.description}
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Button 
                  className="px-10 py-5 bg-[#DC0000] hover:bg-[#FF0000] text-white font-bold rounded-full transition-all transform hover:scale-110 uppercase tracking-wider text-lg neon-border"
                  style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                  🔥 Ler agora
                </Button>
                <Button 
                  variant="outline" 
                  className="px-10 py-5 border-2 border-[#DC0000] text-[#DC0000] hover:bg-[#DC0000] hover:text-white font-bold rounded-full transition-all transform hover:scale-110 uppercase tracking-wider text-lg"
                  style={{
                    boxShadow: '0 0 15px rgba(220, 0, 0, 0.3)',
                    fontFamily: 'Oswald, sans-serif'
                  }}
                >
                  Quem somos
                </Button>
                <Button 
                  variant="ghost"
                  className="px-10 py-5 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold rounded-full transition-all transform hover:scale-110 uppercase tracking-wider text-lg border border-white/30"
                  style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                  📚 Explorar
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/50 hover:bg-[#DC0000] backdrop-blur-sm flex items-center justify-center text-white transition-all group"
        style={{
          boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
        }}
      >
        <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/50 hover:bg-[#DC0000] backdrop-blur-sm flex items-center justify-center text-white transition-all group"
        style={{
          boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
        }}
      >
        <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all ${
              index === currentSlide
                ? 'w-12 h-3 bg-[#DC0000]'
                : 'w-3 h-3 bg-white/50 hover:bg-white/80'
            } rounded-full`}
            style={
              index === currentSlide
                ? { boxShadow: '0 0 15px rgba(220, 0, 0, 0.8)' }
                : {}
            }
          />
        ))}
      </div>
    </section>
  );
}
