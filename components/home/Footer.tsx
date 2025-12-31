import React from 'react';

const footerSections = [
  {
    title: 'Pedepano',
    links: [
      { label: 'Reflexão, humor e crescimento emocional.', href: '#', isText: true }
    ]
  },
  {
    title: 'Links',
    links: [
      { label: 'Blog', href: '#' },
      { label: 'Quem Somos', href: '#' },
      { label: 'FAQ', href: '#' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacidade', href: '#' },
      { label: 'Termos de Uso', href: '#' },
      { label: 'Contato', href: '#' }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-sm text-zinc-400">
        {footerSections.map((section, index) => (
          <div key={index}>
            <p className="font-bold text-zinc-200 mb-2">{section.title}</p>
            <ul className="space-y-2">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  {link.isText ? (
                    <p>{link.label}</p>
                  ) : (
                    <a href={link.href} className="hover:text-[#DC0000] transition-colors">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
