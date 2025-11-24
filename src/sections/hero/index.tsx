import React from "react";
import LogoSlider from "../../components/logoSlider";
import Particles from "../../components/heroLogoParticles/particles";
import tamdGroupLogo from "../../assets/TAMD-GROUP-LOGO-BLANCO.png";

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen bg-black overflow-hidden">
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={1000}
          particleSpread={12}
          speed={0.12}
          particleBaseSize={150}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
          className="absolute inset-0"
        />
      </div>
      <div className="flex justify-around items-center">
        <img
          src={tamdGroupLogo}
          alt="TAMD GROUP LOGO"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2"
        />
      </div>
      <div className="absolute left-0 right-0 bottom-0 pb-8">
        <div className="w-full mx-auto px-4">
          <LogoSlider size="lg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
