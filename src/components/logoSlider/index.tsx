import React, { useEffect, useMemo, useRef, useState } from "react";
import agroGanaderiaLogo from "../../assets/AGRO-GANADERIA--LEVAMTE-.png";
import bonaPedraLogo from "../../assets/BONA PEDRA LOGO - ORIGINAL.png";
import inebalLogo from "../../assets/INEBAL-LOGO.png";
import tamdCosmeticsLogo from "../../assets/LOGO TAMD-COSMETICS BLANCO.png";
import gregalPropertiesLogo from "../../assets/LOGO-GREGAL-PROPERTIES.png";
import anbaLogo from "../../assets/Logo Anba Negro.png";
import mallorcaGestoraLogo from "../../assets/Logo Mallorca Gestora de Capital  Sin Fondo.png";
import manpowersLogo from "../../assets/MANPOWERS-BLANCO.png";
import mdmLogo from "../../assets/MDM-LOGO.png";

type LogoSliderProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const LogoSlider: React.FC<LogoSliderProps> = ({
  className = "",
  size = "md",
}) => {
  const logos = useMemo(
    () => [
      { src: agroGanaderiaLogo, alt: "Agro Ganadería Levante" },
      { src: bonaPedraLogo, alt: "Bona Pedra" },
      { src: inebalLogo, alt: "Inebal" },
      { src: tamdCosmeticsLogo, alt: "TAMD Cosmetics" },
      { src: gregalPropertiesLogo, alt: "Gregal Properties" },
      { src: anbaLogo, alt: "Anba" },
      { src: mallorcaGestoraLogo, alt: "Mallorca Gestora de Capital" },
      { src: manpowersLogo, alt: "Manpowers" },
      { src: mdmLogo, alt: "MDM" },
    ],
    []
  );

  const sizeClasses = {
    sm: "h-8 sm:h-9 md:h-10",
    md: "h-10 sm:h-11 md:h-12",
    lg: "h-12 sm:h-13 md:h-14",
  }[size];

  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const [repeat, setRepeat] = useState(2);

  useEffect(() => {
    const containerWidth = containerRef.current?.clientWidth || 0;
    const setWidth = measureRef.current?.scrollWidth || 0;
    if (containerWidth && setWidth) {
      const r = Math.max(1, Math.ceil(containerWidth / setWidth));
      setRepeat(Math.max(2, r));
    }
  }, []);

  const half = useMemo(() => {
    const arr: { src: string; alt: string }[] = [];
    for (let i = 0; i < repeat; i++) arr.push(...logos);
    return arr;
  }, [repeat, logos]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden ${className}`}
    >
      <div className="absolute left-0 top-0 w-16 sm:w-24 md:w-32 h-full bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 w-16 sm:w-24 md:w-32 h-full bg-gradient-to-l from-black to-transparent z-10" />
      <div className="absolute opacity-0 pointer-events-none">
        <div
          ref={measureRef}
          className="inline-flex whitespace-nowrap gap-x-10 sm:gap-x-12 md:gap-x-16"
        >
          {logos.map((logo, index) => (
            <div
              key={`measure-${index}`}
              className="flex-shrink-0 flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={`${sizeClasses} object-contain`}
              />
            </div>
          ))}
        </div>
      </div>
      <div
        className="inline-flex animate-scroll whitespace-nowrap gap-x-10 sm:gap-x-12 md:gap-x-16"
        style={{ willChange: "transform" as const }}
      >
        {half.map((logo, index) => (
          <div
            key={`half1-${index}`}
            className="flex-shrink-0 flex items-center justify-center"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className={`${sizeClasses} object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300`}
            />
          </div>
        ))}
        {half.map((logo, index) => (
          <div
            key={`half2-${index}`}
            className="flex-shrink-0 flex items-center justify-center"
            aria-hidden
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className={`${sizeClasses} object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
