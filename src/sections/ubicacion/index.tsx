import React, { useCallback } from "react";
import CustomButton from "../../components/customButton";
import bgImage from "../../assets/office.jpg";

const mapsLink =
  "https://www.google.com/maps/search/?api=1&query=Carrer+Ferrers+6%2C+07500+Manacor%2C+Illes+Balears";
const embedSrc =
  "https://www.google.com/maps?q=Carrer%20Ferrers%206,%2007500%20Manacor,%20Illes%20Balears&output=embed";

const Ubicacion: React.FC = () => {
  const address = "Carrer Ferrers 6, 07500 Manacor, Illes Balears";
  const handleCopy = useCallback(() => {
    navigator.clipboard?.writeText(address);
  }, []);

  return (
    <section
      id="ubicacion"
      className="relative overflow-hidden min-h-[80vh] flex items-center"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/40" />
      <div className="relative max-w-7xl mx-auto px-4 py-32 md:py-40 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 ring-1 ring-white/20">
              <span className="text-lg">📍</span>
              <span className="text-sm tracking-wide">
                Manacor, Illes Balears
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Dónde estamos
            </h2>
            <p className="text-xl text-white/80 mb-8">{address}</p>
            <div className="flex flex-wrap gap-4">
              <a href={mapsLink} target="_blank" rel="noopener noreferrer">
                <CustomButton type="principal" size="md">
                  Abrir en Google Maps
                </CustomButton>
              </a>
              <CustomButton type="secondary" size="md" onClick={handleCopy}>
                Copiar dirección
              </CustomButton>
            </div>
          </div>
          <div className="group w-full">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/20 bg-white/5 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
              <iframe
                src={embedSrc}
                className="w-full h-[500px] md:h-[650px] border-0 relative z-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Mapa de la ubicación"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ubicacion;
