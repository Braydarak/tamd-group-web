import React, { useState, useEffect } from "react";
import tamdGroupLogoBlanco from "../../assets/TAMD-GROUP-LOGO-BLANCO.png";
import tamdGroupLogoNegro from "../../assets/TAMD-GROUP-LOGO-NEGRO.png";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out h-24 ${
        isScrolled ? "bg-white shadow-lg backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-around h-full">
        {/* Logo a la izquierda */}
        <div className="flex-shrink-0">
          <img
            src={isScrolled ? tamdGroupLogoNegro : tamdGroupLogoBlanco}
            alt="TAMD Group"
            className="h-10 md:h-12 lg:h-14 object-contain transition-all duration-300 ease-in-out"
          />
        </div>
        <div className="flex items-center">
          {/* Menú de navegación a la derecha */}
          <nav className="hidden md:flex space-x-8 gap-10">
            <a
              href="#inicio"
              className={`font-medium transition-colors duration-300 hover:opacity-70 ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              Inicio
            </a>
            <a
              href="#empresas"
              className={`font-medium transition-colors duration-300 hover:opacity-70 ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              Nuestras Empresas
            </a>
            <a
              href="#servicios"
              className={`font-medium transition-colors duration-300 hover:opacity-70 ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              Servicios
            </a>
            <a
              href="#contacto"
              className={`font-medium transition-colors duration-300 hover:opacity-70 ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              Contacto
            </a>
          </nav>

          {/* Menú hamburguesa para móvil */}
          <button
            className={`md:hidden flex flex-col space-y-1 transition-colors duration-300 ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
          >
            <span
              className={`block w-6 h-0.5 transition-colors duration-300 ${
                isScrolled ? "bg-gray-800" : "bg-white"
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 transition-colors duration-300 ${
                isScrolled ? "bg-gray-800" : "bg-white"
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 transition-colors duration-300 ${
                isScrolled ? "bg-gray-800" : "bg-white"
              }`}
            ></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
