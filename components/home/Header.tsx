import React, { useState } from 'react';
import { Menu, X, Search, Heart, User, Bell, Mail, Settings, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'HOME', href: '#' },
  { label: 'BLOG', href: '#' },
  { label: 'QUEM SOMOS', href: '#' },
  { label: 'FAQ', href: '#' },
  { label: 'CONTATO', href: '#' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="bg-black/90 backdrop-blur-md sticky top-0 z-50 border-b border-[#DC0000]/20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-3 border-b border-zinc-800/50">
          {/* Logo */}
          <Link to={createPageUrl('Home')} className="flex items-center gap-3 group">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6954c2c85e9930a8d5e807ad/b9faa1150_hgfdfcv.png" 
              alt="Pedepano" 
              className="h-12 w-auto transition-transform group-hover:scale-110"
            />
            <span 
              className="logo-text text-[#DC0000] neon-glow"
            >
              PEDEPANO
            </span>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:block flex-1 max-w-xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar conteúdo..."
                className="w-full bg-zinc-900/50 border border-zinc-700 hover:border-[#DC0000]/50 focus:border-[#DC0000] rounded-full py-2.5 px-5 pr-12 text-white placeholder-zinc-500 focus:outline-none transition-all"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-[#DC0000] transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Action Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-2">
            <button 
              className="p-2.5 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-[#DC0000] transition-all relative group"
              title="Notificações"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#DC0000] rounded-full neon-border"></span>
            </button>
            
            <button 
              className="p-2.5 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-[#DC0000] transition-all"
              title="Favoritos"
            >
              <Heart className="w-5 h-5" />
            </button>
            
            <button 
              className="p-2.5 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-[#DC0000] transition-all"
              title="Mensagens"
            >
              <Mail className="w-5 h-5" />
            </button>

            <button 
              className="p-2.5 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-[#DC0000] transition-all"
              title="Loja"
            >
              <ShoppingBag className="w-5 h-5" />
            </button>
            
            <div className="h-6 w-px bg-zinc-700 mx-2"></div>
            
            <button 
              className="p-2.5 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-[#DC0000] transition-all"
              title="Perfil"
            >
              <User className="w-5 h-5" />
            </button>

            <Button 
              className="ml-2 px-6 py-2 bg-[#DC0000] hover:bg-[#FF0000] text-white font-bold rounded-full transition-all neon-border"
            >
              ENTRAR
            </Button>
          </div>

          {/* Mobile Buttons */}
          <div className="flex md:hidden items-center gap-2">
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-zinc-400 hover:text-[#DC0000] transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            <button 
              className="p-2 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {searchOpen && (
          <div className="lg:hidden py-3 border-b border-zinc-800/50">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar conteúdo..."
                className="w-full bg-zinc-900/50 border border-zinc-700 focus:border-[#DC0000] rounded-full py-2 px-4 pr-10 text-white placeholder-zinc-500 text-sm focus:outline-none"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400">
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Navigation Menu - Desktop */}
        <nav className="hidden md:flex items-center justify-center gap-1 py-3">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="px-4 py-2 text-sm font-bold tracking-wider text-zinc-400 hover:text-[#DC0000] hover:bg-zinc-900/50 rounded-lg transition-all"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              {item.label}
            </a>
          ))}
          <div className="ml-4 px-4 py-2 bg-gradient-to-r from-[#DC0000]/20 to-transparent rounded-lg">
            <a
              href="#"
              className="text-sm font-bold tracking-wider text-[#DC0000] neon-glow"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              🔥 DESTAQUES
            </a>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-zinc-900/50 border-t border-zinc-800/50">
            <nav className="py-2">
              {navItems.map((item, index) => (
                <a 
                  key={index}
                  href={item.href} 
                  className="block px-4 py-3 text-sm font-bold tracking-wide text-zinc-300 hover:text-[#DC0000] hover:bg-zinc-800/50 transition-all"
                  style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="border-t border-zinc-800/50 py-3 px-4 flex flex-col gap-2">
              <Button className="w-full bg-[#DC0000] hover:bg-[#FF0000] text-white font-bold rounded-full neon-border">
                ENTRAR
              </Button>
              <div className="flex justify-around pt-2">
                <button className="p-2 text-zinc-400 hover:text-[#DC0000]">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="p-2 text-zinc-400 hover:text-[#DC0000]">
                  <Bell className="w-5 h-5" />
                </button>
                <button className="p-2 text-zinc-400 hover:text-[#DC0000]">
                  <Mail className="w-5 h-5" />
                </button>
                <button className="p-2 text-zinc-400 hover:text-[#DC0000]">
                  <ShoppingBag className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
