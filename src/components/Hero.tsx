import hero from "../assets/hero.jpg";

const Hero = () => {
  return (
    <div className="w-full max-h-[90vh] overflow-hidden">
      <img src={hero} className="w-full object-cover" alt="Hero" />
    </div>
  );
};

export default Hero;
