const Footer = () => {
  return (
    <div className="bg-black py-5 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="text-white text-3xl font-bold tracking-tight">
          Zwigato
        </span>
        <span className="text-white font-bold tracking-tight flex gap-4">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
