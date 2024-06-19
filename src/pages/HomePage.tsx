import GoogleAddressSearch from "@/components/GoogleAddressSearch";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [selectedAddress, setSelectedAddress] = useState<string | "">("");
  const handleSearchSubmit = () => {
    if (!selectedAddress) return;
    navigate({
      pathname: `/search/${selectedAddress}`,
    });
  };

  return (
    <div className="relative">
      <Hero />
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full px-4 sm:px-6 md:px-14 flex flex-col space-y-4 md:space-y-10 text-left">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight">
          Order delivery near you
        </h1>
        <div className="flex flex-col md:flex-row gap-3">
          <GoogleAddressSearch setSelectedAddress={setSelectedAddress} />
          <Button
            className="w-auto h-auto font-medium text-base"
            onClick={handleSearchSubmit}
          >
            Search here
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
