import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-black flex items-center justify-between px-6 py-2 w-full">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/logo.png" 
          alt="Logo"
          className="h-10 w-10"
        />
      </div>
      
      {/* Navegação */}
      <nav className="flex space-x-4">
        {[
          "Home",
          "Verificação de Linhas",
          "Achados e Perdidos",
          "Mapa",
          "Dúvidas",
        ].map((item, index) => (
          <button
            key={index}
            className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition"
          >
            {item}
          </button>
        ))}
      </nav>
      
      {/* Botão Criar Conta */}
      <div>
        <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition">
          Crie sua conta
        </button>
      </div>
    </header>
  );
};

export default Header;