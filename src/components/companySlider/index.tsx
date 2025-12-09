import React, { useEffect, useMemo, useRef, useState } from "react";
import companiesData from "../../data/companies.json";
import CustomButton from "../customButton";
import agroGanaderaLogo from "../../assets/AGRO-GANADERIA--LEVAMTE-.png";
import bonaPedraLogo from "../../assets/BONA PEDRA LOGO - ORIGINAL.png";
import inebalLogo from "../../assets/INEBAL-LOGO.png";
import tamdCosmeticsLogo from "../../assets/LOGO TAMD-COSMETICS BLANCO.png";
import gregalPropertiesLogo from "../../assets/LOGO-GREGAL-PROPERTIES.png";
import anbaLogo from "../../assets/Logo Anba Negro.png";
import mallorcaGestoraLogo from "../../assets/Logo Mallorca Gestora de Capital  Sin Fondo.png";
import manpowersLogo from "../../assets/MANPOWERS-BLANCO.png";
import mdmLogo from "../../assets/MDM-LOGO.png";

type CompanySliderProps = {
  className?: string;
  intervalMs?: number;
  resumeDelayMs?: number;
  ctaColor?: string;
};

type CompanyJson = {
  id: string;
  name: string;
  sector: string;
  description: string;
  history: string;
  services: string[];
  website?: string;
};

type CompanySlide = CompanyJson & { logoSrc: string };

const CompanySlider: React.FC<CompanySliderProps> = ({
  className = "",
  intervalMs = 15000,
  resumeDelayMs = 30000,
  ctaColor = "#ff3b30",
}) => {
  const logoMap: { [key: string]: string } = useMemo(
    () => ({
      "agro-ganadera": agroGanaderaLogo,
      "bona-pedra": bonaPedraLogo,
      inebal: inebalLogo,
      "tamd-cosmetics": tamdCosmeticsLogo,
      "gregal-properties": gregalPropertiesLogo,
      anba: anbaLogo,
      "mallorca-gestora": mallorcaGestoraLogo,
      manpowers: manpowersLogo,
      mdm: mdmLogo,
    }),
    []
  );

  const companies = companiesData.companies as CompanyJson[];
  const slides: CompanySlide[] = useMemo(
    () =>
      companies.map((c) => ({
        ...c,
        logoSrc: logoMap[c.id],
      })),
    [companies, logoMap]
  );

  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoRef = useRef<number | null>(null);
  const resumeRef = useRef<number | null>(null);

  const next = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIndex((i) => (i + 1) % slides.length);
      setIsAnimating(false);
    }, 300);
  };

  const prev = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIndex((i) => (i - 1 + slides.length) % slides.length);
      setIsAnimating(false);
    }, 300);
  };

  const startAuto = () => {
    if (autoRef.current) {
      window.clearInterval(autoRef.current);
      autoRef.current = null;
    }
    autoRef.current = window.setInterval(() => {
      next();
    }, intervalMs);
  };

  const pauseAndResume = () => {
    if (autoRef.current) {
      window.clearInterval(autoRef.current);
      autoRef.current = null;
    }
    if (resumeRef.current) {
      window.clearTimeout(resumeRef.current);
      resumeRef.current = null;
    }
    resumeRef.current = window.setTimeout(() => {
      startAuto();
    }, resumeDelayMs);
  };

  useEffect(() => {
    startAuto();
    return () => {
      if (autoRef.current) window.clearInterval(autoRef.current);
      if (resumeRef.current) window.clearTimeout(resumeRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [intervalMs, resumeDelayMs]);

  return (
    <section className={`w-full py-16 ${className}`}>
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="overflow-hidden">
          <div
            className="flex items-stretch"
            style={{
              transform: `translateX(-${index * 100}%)`,
              transition: "transform 700ms ease",
            }}
          >
            {slides.map((current, i) => (
              <div
                key={current.id}
                className="w-full flex-shrink-0 px-2 sm:px-4"
              >
                <div
                  className={`group bg-white rounded-3xl shadow-lg ring-1 ring-black/5 overflow-hidden transition-all duration-700 ${
                    isAnimating && i === index
                      ? "scale-[0.98] opacity-95"
                      : "scale-100 opacity-100"
                  }`}
                >
                  <div className="relative">
                    <div className="relative grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
                      <div className="flex items-center justify-center">
                        <div className="rounded-2xl bg-gray-50 p-6 md:p-8 shadow-inner ring-1 ring-black/5">
                          <img
                            src={current.logoSrc}
                            alt={current.name}
                            className="h-24 md:h-32 w-auto object-contain drop-shadow-xl group-hover:scale-105 transition-transform"
                          />
                        </div>
                      </div>
                      <div className="text-black">
                        <div className="mb-6 flex items-center gap-3">
                          <span className="inline-block px-4 py-2 rounded-full text-sm font-bold shadow-sm ring-1 ring-black/10">
                            {current.sector}
                          </span>
                        </div>
                        <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                          {current.name}
                        </h3>
                        <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                          {current.description}
                        </p>
                        <CustomButton
                          type="principal"
                          size="lg"
                          className="w-full sm:w-auto px-16 py-6 hover:brightness-110"
                          style={{
                            backgroundColor: ctaColor,
                            color: "#ffffff",
                            borderColor: ctaColor,
                          }}
                          onClick={() => {
                            if (current.website) {
                              window.open(current.website, "_blank");
                            }
                          }}
                          disabled={!current.website}
                        >
                          Ir a la web
                        </CustomButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          aria-label="Anterior"
          onClick={() => {
            prev();
            pauseAndResume();
          }}
          className="absolute -left-8 sm:-left-10 md:-left-14 top-1/2 -translate-y-1/2 bg-white text-black border border-black rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
        >
          ‹
        </button>
        <button
          aria-label="Siguiente"
          onClick={() => {
            next();
            pauseAndResume();
          }}
          className="absolute -right-8 sm:-right-10 md:-right-14 top-1/2 -translate-y-1/2 bg-white text-black border border-black rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
        >
          ›
        </button>

        <div className="mt-6 flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir a la diapositiva ${i + 1}`}
              onClick={() => {
                setIndex(i);
                pauseAndResume();
              }}
              className={`w-2.5 h-2.5 rounded-full ${
                i === index ? "bg-black" : "bg-gray-300"
              } ring-1 ring-black/10 hover:scale-110 transition-transform`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanySlider;
