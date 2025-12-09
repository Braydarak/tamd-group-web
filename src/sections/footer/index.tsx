import React from "react";
import tamdGroupLogoWhite from "../../assets/TAMD-GROUP-LOGO-BLANCO.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          <div className="flex items-center gap-4">
            <img
              src={tamdGroupLogoWhite}
              alt="TAMD Group"
              className="h-10 w-auto"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Legal</h3>
            <ul className="text-sm text-white/80 space-y-2">
              <li>Aviso legal</li>
              <li>Política de privacidad</li>
              <li>Política de cookies</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Contacto</h3>
            <p className="text-sm text-white/80">
              Carrer Ferrers 6, 07500 Manacor, Illes Balears
            </p>
            <p className="text-sm text-white/80">info@tamdgroup.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
