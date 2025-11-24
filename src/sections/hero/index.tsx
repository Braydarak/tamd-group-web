import React from 'react';
import tamdGroupLogo from '../../assets/TAMD-GROUP-LOGO-BLANCO.png';
import agroGanaderiaLogo from '../../assets/AGRO-GANADERIA--LEVAMTE-.png';
import bonaPedraLogo from '../../assets/BONA PEDRA LOGO - ORIGINAL.png';
import inebalLogo from '../../assets/INEBAL-LOGO.png';
import tamdCosmeticsLogo from '../../assets/LOGO TAMD-COSMETICS BLANCO.png';
import gregalPropertiesLogo from '../../assets/LOGO-GREGAL-PROPERTIES.png';
import anbaLogo from '../../assets/Logo Anba Negro.png';
import mallorcaGestoraLogo from '../../assets/Logo Mallorca Gestora de Capital  Sin Fondo.png';
import manpowersLogo from '../../assets/MANPOWERS-BLANCO.png';
import mdmLogo from '../../assets/MDM-LOGO.png';
import CustomButton from '../../components/customButton';

const Hero: React.FC = () => {
  const companyLogos = [
    { src: agroGanaderiaLogo, alt: "Agro Ganadería Levante" },
    { src: bonaPedraLogo, alt: "Bona Pedra" },
    { src: inebalLogo, alt: "Inebal" },
    { src: tamdCosmeticsLogo, alt: "TAMD Cosmetics" },
    { src: gregalPropertiesLogo, alt: "Gregal Properties" },
    { src: anbaLogo, alt: "Anba" },
    { src: mallorcaGestoraLogo, alt: "Mallorca Gestora de Capital" },
    { src: manpowersLogo, alt: "Manpowers" },
    { src: mdmLogo, alt: "MDM" }
  ];

  return (
    <section className="min-h-screen bg-black flex flex-col px-4 relative">
      {/* Logo centrado */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <img
          src={tamdGroupLogo}
          alt="TAMD Group"
          className="h-24 md:h-32 lg:h-40 object-contain mb-8 md:mb-12"
        />

      </div>

      {/* Botones en la parte inferior derecha */}
      <div className="flex justify-center items-center lg:justify-end pb-8 lg:pb-16">
                {/* Carrusel de logos */}
        <div className="relative w-full overflow-hidden">
          {/* Gradientes de difuminado */}
          <div className="absolute left-0 top-0 w-20 md:w-32 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 md:w-32 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
          
          {/* Contenedor del carrusel */}
          <div className="flex animate-scroll">
            {/* Primera serie de logos */}
            {companyLogos.map((logo, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 flex items-center justify-center mx-6 md:mx-8 lg:mx-12">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 md:h-10 lg:h-12 object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
            {/* Segunda serie de logos (para continuidad) */}
            {companyLogos.map((logo, index) => (
              <div key={`second-${index}`} className="flex-shrink-0 flex items-center justify-center mx-6 md:mx-8 lg:mx-12">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 md:h-10 lg:h-12 object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row lg:flex-col gap-4 lg:gap-6 w-1/5 z-50">
          <CustomButton type="secondary" size="lg">
            Conoce Nuestras Empresas
          </CustomButton>
          <CustomButton type="outlineSecondary" size="lg">
            Contacto
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default Hero;
