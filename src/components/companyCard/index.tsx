import React from "react";

type CompanyCardProps = {
  logoSrc: string;
  website?: string;
  backgroundImage?: string;
  invertLogo?: boolean;
  className?: string;
};

const CompanyCard: React.FC<CompanyCardProps> = ({
  logoSrc,
  website,
  backgroundImage,
  invertLogo = true,
  className = "",
}) => {
  const clickable = !!website;
  const cardClasses = `group relative rounded-3xl shadow-lg ring-1 ring-black/5 overflow-hidden transition-all duration-500 ${
    clickable ? "hover:shadow-xl cursor-pointer" : "opacity-80 cursor-not-allowed"
  } ${backgroundImage ? "bg-transparent" : "bg-white"} ${className}`;

  const style = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : undefined;

  return (
    <div
      className={cardClasses}
      style={style}
      onClick={() => {
        if (clickable && website) window.open(website, "_blank");
      }}
    >
      <div
        className={`h-40 md:h-48 flex items-center justify-center group-hover:items-start group-hover:pt-4 relative z-20 ${
          backgroundImage ? "" : "bg-gray-50"
        }`}
      >
        <img
          src={logoSrc}
          alt="logo"
          className={`h-20 md:h-24 w-auto object-contain drop-shadow-xl transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-90 ${
            invertLogo ? "filter brightness-0 invert" : ""
          }`}
        />
      </div>
      <div className="absolute inset-0 z-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="w-full bg-black text-white text-center font-semibold uppercase tracking-wide py-3 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
          Visitar sitio web
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
