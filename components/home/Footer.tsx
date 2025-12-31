import React from 'react';

const footerSections = [
  {
    title: "Sobre Nós",
    links: [
      { label: "Nossa História", href: "#" },
      { label: "Loja Física", href: "#" },
      { label: "Trabalhe Conosco", href: "#" }
    ]
  },
  {
    title: "Ajuda",
    links: [
      { label: "Trocas e Devoluções", href: "#" },
      { label: "Envio e Prazos", href: "#" },
      { label: "Pagamentos", href: "#" }
    ]
  },
  {
    title: "Contato",
    links: [
      { label: "pedepano@exemplo.com", href: "mailto:pedepano@exemplo.com" },
      { label: "(11) 9999-9999", href: "tel:1199999999" }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-red-900/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-red-600 font-bold text-lg mb-4 uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Pede Pano. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
