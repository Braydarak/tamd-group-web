import React, { useMemo } from "react";
import triangleImage from "../../assets/office.jpg";
import companiesData from "../../data/companies.json";
import farmerImage from "../../assets/farmer.jpg";
import excavationImage from "../../assets/excavation.jpg";
import wiresImage from "../../assets/wires.avif";
import tamdImage from "../../assets/tamd.png";
import propertiesImage from "../../assets/properties.jpg";
import constructionImage from "../../assets/construction.png";
import investmentImage from "../../assets/investment.jpg";
import flyerMacaImage from "../../assets/flyer-maca-mobile.jpg";
import arquiImage from "../../assets/arqui.avif";
import CompanyCard from "../../components/companyCard";
import agroGanaderaLogo from "../../assets/AGRO-GANADERIA--LEVAMTE-.png";
import bonaPedraLogo from "../../assets/BONA PEDRA LOGO - ORIGINAL.png";
import inebalLogo from "../../assets/INEBAL-LOGO.png";
import tamdCosmeticsLogo from "../../assets/LOGO TAMD-COSMETICS BLANCO.png";
import gregalPropertiesLogo from "../../assets/LOGO-GREGAL-PROPERTIES.png";
import anbaLogo from "../../assets/Logo Anba Negro.png";
import mallorcaGestoraLogo from "../../assets/Logo Mallorca Gestora de Capital  Sin Fondo.png";
import manpowersLogo from "../../assets/MANPOWERS-BLANCO.png";
import mdmLogo from "../../assets/MDM-LOGO.png";

const Empresas: React.FC = () => {
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

  type CompanyJson = {
    id: string;
    name: string;
    sector: string;
    description: string;
    website?: string;
  };

  const companies = companiesData.companies as CompanyJson[];
  const invertMap: { [key: string]: boolean } = useMemo(
    () => ({
      "tamd-cosmetics": false,
      manpowers: false,
    }),
    []
  );

  const bgMap: { [key: string]: string | undefined } = useMemo(
    () => ({
      "agro-ganadera": farmerImage,
      "bona-pedra": excavationImage,
      inebal: wiresImage,
      "tamd-cosmetics": tamdImage,
      "gregal-properties": propertiesImage,
      anba: constructionImage,
      "mallorca-gestora": investmentImage,
      manpowers: flyerMacaImage,
      mdm: arquiImage,
    }),
    []
  );

  return (
    <section className="min-h-screen bg-gradient-to-br from-[var(--gradient-start)] via-[var(--color-bg)] to-[var(--gradient-end)] py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-muted)] to-transparent transform rotate-45 animate-pulse"></div>
      </div>
      <div
        className="absolute inset-y-0 right-0 w-[30%] pointer-events-none z-0 [clip-path:polygon(0%_0%,100%_0%,100%_100%)]"
        style={{
          backgroundImage: `url(${triangleImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30" />
      </div>
      <div className="max-w-7xl relative z-10 mr-[20%] sm:mr-[24%] md:mr-[28%] lg:mr-[30%] ml-[6%] sm:ml-[8%] md:ml-[10%] lg:ml-[12%]">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-[var(--color-text)] mb-6">
            Nuestras{" "}
            <span className="text-black ">
              Empresas
            </span>
          </h2>
          <p className="text-xl text-[var(--color-muted)] max-w-3xl mx-auto">
            Descubre el ecosistema empresarial de TAMD Group, donde cada empresa
            representa innovación y excelencia en su sector.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {companies.map((c) => {
            const logoSrc = logoMap[c.id];
            const backgroundImage = bgMap[c.id];
            const invertLogo = invertMap[c.id] ?? true;
            return (
              <CompanyCard
                key={c.id}
                logoSrc={logoSrc}
                website={c.website}
                backgroundImage={backgroundImage}
                invertLogo={invertLogo}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Empresas;
