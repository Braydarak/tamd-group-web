import React, { useState, useEffect } from "react";
import tamdGroupLogoBlanco from "../../assets/TAMD-GROUP-LOGO-BLANCO.png";
import tamdGroupLogoNegro from "../../assets/TAMD-GROUP-LOGO-NEGRO.png";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out h-24 ${
          isMenuOpen || isScrolled
            ? "bg-white shadow-lg backdrop-blur-sm"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between md:justify-around h-full px-4">
          {/* Logo a la izquierda */}
          <div className="flex-shrink-0">
            <a href="#inicio" aria-label="Ir al inicio">
              <img
                src={
                  isMenuOpen
                    ? tamdGroupLogoNegro
                    : isScrolled
                    ? tamdGroupLogoNegro
                    : tamdGroupLogoBlanco
                }
                alt="TAMD Group"
                className="h-10 md:h-12 lg:h-14 object-contain transition-all duration-300 ease-in-out"
              />
            </a>
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
                href="#ubicacion"
                className={`font-medium transition-colors duration-300 hover:opacity-70 ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
              >
                Ubicación
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
              aria-label="Abrir menú"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((v) => !v)}
              className={`md:hidden flex flex-col justify-center space-y-1 transition-colors duration-300 ${
                isMenuOpen || isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              <span
                className={`block w-6 h-0.5 transition-all duration-300 origin-center ${
                  isMenuOpen || isScrolled ? "bg-gray-800" : "bg-white"
                } ${
                  isMenuOpen
                    ? "translate-y-1.5 rotate-45"
                    : "translate-y-0 rotate-0"
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 transition-all duration-300 origin-center ${
                  isMenuOpen || isScrolled ? "bg-gray-800" : "bg-white"
                } ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
              ></span>
              <span
                className={`block w-6 h-0.5 transition-all duration-300 origin-center ${
                  isMenuOpen || isScrolled ? "bg-gray-800" : "bg-white"
                } ${
                  isMenuOpen
                    ? "-translate-y-1.5 -rotate-45"
                    : "translate-y-0 rotate-0"
                }`}
              ></span>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`md:hidden fixed top-24 left-0 right-0 bottom-0 z-40 bg-white ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`h-full w-full transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="h-full px-6 py-8 flex flex-col gap-6">
            <a
              href="#inicio"
              onClick={() => setIsMenuOpen(false)}
              className={`text-black text-2xl font-semibold`}
            >
              Inicio
            </a>
            <a
              href="#empresas"
              onClick={() => setIsMenuOpen(false)}
              className={`text-black text-2xl font-semibold`}
            >
              Nuestras Empresas
            </a>
            <a
              href="#ubicacion"
              onClick={() => setIsMenuOpen(false)}
              className={`text-black text-2xl font-semibold`}
            >
              Ubicación
            </a>
            <a
              href="#contacto"
              onClick={() => setIsMenuOpen(false)}
              className={`text-black text-2xl font-semibold`}
            >
              Contacto
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
