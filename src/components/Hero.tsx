import hero from "../assets/hero.jpg";
import { useState, useEffect } from "react";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = hero;
    img.onload = () => {
      setImageLoaded(true);
    };
  }, []);

  return (
    <div className="w-full max-h-[90vh] overflow-hidden relative">
      {!imageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#FFCB2A]" />
      )}
      <img
        src={hero}
        className={`w-full object-cover transition-opacity duration-500 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
        alt="Hero"
      />
    </div>
  );
};

export default Hero;
