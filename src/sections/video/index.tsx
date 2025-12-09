import React from "react";
import tamdVideo from "../../assets/TAMD.mov";

const Video: React.FC = () => {
  return (
    <section className="w-full">
      <video
        src={tamdVideo}
        autoPlay
        muted
        playsInline
        controls={false}
        className="w-full"
        loop
      />
    </section>
  );
};

export default Video;
