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
    <div className="relative w-full h-[90vh] bg-gray-200 flex items-center justify-center">
      <img
        src={hero}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
        alt="Hero"
      />
    </div>
  );
};

export default Hero;
