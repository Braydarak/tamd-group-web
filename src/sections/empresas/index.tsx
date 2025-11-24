import React, { useState, useEffect } from 'react';
import companiesData from '../../data/companies.json';

// Importar logos
import agroGanaderiaLogo from '../../assets/AGRO-GANADERIA--LEVAMTE-.png';
import bonaPedraLogo from '../../assets/BONA PEDRA LOGO - ORIGINAL.png';
import inebalLogo from '../../assets/INEBAL-LOGO.png';
import tamdCosmeticsLogo from '../../assets/LOGO TAMD-COSMETICS BLANCO.png';
import gregalPropertiesLogo from '../../assets/LOGO-GREGAL-PROPERTIES.png';
import anbaLogo from '../../assets/Logo Anba Negro.png';
import mallorcaGestoraLogo from '../../assets/Logo Mallorca Gestora de Capital  Sin Fondo.png';
import manpowersLogo from '../../assets/MANPOWERS-BLANCO.png';
import mdmLogo from '../../assets/MDM-LOGO.png';

const Empresas: React.FC = () => {
  const [selectedCompany, setSelectedCompany] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [manuallySelected, setManuallySelected] = useState(false);

  // Mapeo de logos
  const logoMap: { [key: string]: string } = {
    'agro-ganaderia': agroGanaderiaLogo,
    'bona-pedra': bonaPedraLogo,
    'inebal': inebalLogo,
    'tamd-cosmetics': tamdCosmeticsLogo,
    'gregal-properties': gregalPropertiesLogo,
    'anba': anbaLogo,
    'mallorca-gestora': mallorcaGestoraLogo,
    'manpowers': manpowersLogo,
    'mdm': mdmLogo
  };

  const companies = companiesData.companies;

  // Auto-rotate companies (only if not manually selected)
  useEffect(() => {
    if (!manuallySelected) {
      const interval = setInterval(() => {
        setIsAnimating(true);
        setTimeout(() => {
          setSelectedCompany((prev) => (prev + 1) % companies.length);
          setIsAnimating(false);
        }, 300);
      }, 8000);

      return () => clearInterval(interval);
    }
  }, [companies.length, manuallySelected]);

  // Function to manually select company
  const selectCompany = (index: number) => {
    setIsAnimating(true);
    setManuallySelected(true);
    setTimeout(() => {
      setSelectedCompany(index);
      setIsAnimating(false);
    }, 300);
  };

  // Función para volver al modo automático
  const resetToAutoMode = () => {
    setManuallySelected(false);
  };



  const currentCompany = companies[selectedCompany];

  return (
    <section
      className="min-h-screen bg-gradient-to-br from-[var(--gradient-start)] via-[var(--color-bg)] to-[var(--gradient-end)] py-20 px-4 relative overflow-hidden"
      style={{ ['--brand-primary' as string]: currentCompany.color } as React.CSSProperties}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-muted)] to-transparent transform rotate-45 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-[var(--color-text)] mb-6">
            Nuestras <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-primary)] to-[var(--gradient-end)]">Empresas</span>
          </h2>
          <p className="text-xl text-[var(--color-muted)] max-w-3xl mx-auto">
            Descubre el ecosistema empresarial de TAMD Group, donde cada empresa representa innovación y excelencia en su sector.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Empresa destacada */}
          <div className="relative group">
            <div 
              className={`bg-[var(--surface-2)] rounded-3xl shadow-2xl p-8 md:p-12 transition-all duration-700 transform hover:scale-105 ${
                isAnimating ? 'opacity-0 scale-95 rotate-1' : 'opacity-100 scale-100 rotate-0'
              } hover:shadow-3xl`}

            >

              {/* Logo destacado con efectos */}
               <div className="text-center mb-8">
                 <div className="relative inline-block">
                   <img
                     src={logoMap[currentCompany.id]}
                     alt={currentCompany.name}
                     className={`h-24 w-auto mx-auto relative z-10 logo-mask transition-all duration-500 ${
                       isAnimating ? 'scale-75 opacity-50' : 'scale-100 opacity-100'
                     } hover:scale-110 filter drop-shadow-lg`}
                   />
                 </div>
               </div>

              {/* Company Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[var(--color-bg)] to-transparent opacity-80">
                <h3 className="text-2xl font-bold text-[var(--color-text)] mb-2">{currentCompany.name}</h3>
                <p className="text-[var(--color-muted)] text-sm">{currentCompany.sector} • Fundada en {currentCompany.founded}</p>
              </div>
            </div>


          </div>

          {/* Company Details */}
          <div className={`space-y-6 transition-all duration-700 ${isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
            <div className="mb-6">
              <span 
                className="inline-block px-6 py-3 rounded-full text-sm font-bold text-[var(--color-text)] bg-[var(--brand-primary)] mb-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {currentCompany.sector}
              </span>
              <h3 className="text-3xl font-bold text-[var(--color-text)] mb-4 hover:text-[var(--color-muted)] transition-colors duration-300">{currentCompany.name}</h3>
              <p className="text-[var(--color-muted)] text-lg leading-relaxed">{currentCompany.description}</p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-[var(--color-text)] mb-3">Historia</h4>
              <p className="text-[var(--color-muted)] leading-relaxed">{currentCompany.history}</p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-3">Servicios</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {currentCompany.services.map((service, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-2 p-2 rounded-lg bg-[var(--surface-1)] backdrop-blur-sm"
                  >
                    <div className="w-2 h-2 rounded-full bg-[var(--brand-primary)]"></div>
                    <span className="text-[var(--color-muted)] text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <button 
                className="px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg bg-[var(--brand-primary)] text-[var(--color-text)]"
              >
                Conocer Más
              </button>
            </div>
          </div>
        </div>

        {/* Company Grid */}
        <div className="mt-20">
          <div className="flex items-center justify-center mb-12">
            <h3 className="text-3xl font-bold text-[var(--color-text)] text-center">Todas Nuestras Empresas</h3>
            {manuallySelected && (
              <button
                onClick={resetToAutoMode}
                className="ml-6 px-4 py-2 rounded-lg text-sm transition-colors duration-300 border bg-[var(--surface-2)] text-[var(--brand-primary)] border-[var(--brand-primary)] hover:bg-[var(--surface-3)]"
              >
                🔄 Modo Automático
              </button>
            )}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {companies.map((company, index) => (
              <button
                key={company.id}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => selectCompany(index)}
                className={`group relative p-6 rounded-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer ${
                  index === selectedCompany 
                    ? 'ring-4 ring-[var(--brand-primary)] bg-gradient-to-br from-[var(--brand-primary)] to-[var(--gradient-end)] scale-110 shadow-2xl' 
                    : hoveredCard === index
                    ? 'bg-[var(--surface-2)] scale-105 rotate-1 shadow-xl'
                    : 'bg-[var(--surface-1)] hover:bg-[var(--surface-2)]'
                }`}
                style={{
                  borderColor: index === selectedCompany ? 'var(--brand-primary)' : (hoveredCard === index ? company.color : 'transparent'),
                  borderWidth: index === selectedCompany ? '3px' : (hoveredCard === index ? '2px' : '0px'),
                  borderStyle: 'solid'
                } as React.CSSProperties}
              >
                {/* Indicador de selección */}
                {index === selectedCompany && (
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[var(--brand-primary)] rounded-full flex items-center justify-center animate-pulse shadow-lg">
                    <span className="text-[var(--color-text)] text-sm font-bold">✓</span>
                  </div>
                )}

                <div className="aspect-square flex items-center justify-center mb-4">
                  <img
                    src={logoMap[company.id]}
                    alt={company.name}
                    className={`h-16 w-auto object-contain transition-all duration-500 ${
                      index === selectedCompany 
                        ? 'filter-none scale-125 drop-shadow-2xl' 
                        : hoveredCard === index
                        ? 'filter-none scale-110 drop-shadow-xl'
                        : 'filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0'
                    }`}
                  />
                </div>
                <h4 className={`text-sm font-medium text-center transition-colors duration-300 ${
                  index === selectedCompany ? 'text-[var(--brand-primary)] font-bold' : 'text-[var(--color-text)]'
                }`}>{company.name}</h4>
                <p className={`text-xs text-center mt-1 transition-colors duration-300 ${
                  index === selectedCompany ? 'text-[var(--brand-primary)] opacity-75' : 'text-[var(--color-muted)]'
                }`}>{company.sector}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Empresas;
