import GooglePlacesAutocomplete from "react-google-places-autocomplete"; //
import { MapPin } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

const GoogleAddressSearch = ({
  setSelectedAddress,
}: {
  setSelectedAddress: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="flex items-center md:w-[50%] bg-white">
      <MapPin className="h-6 w-6 text-primary ml-2" />
      <div className="flex-1 ml-2">
        <GooglePlacesAutocomplete
          apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY} // Replace with your API key
          selectProps={{
            onChange: (place) => {
              const address = place?.label.split(",")[0].trim();
              setSelectedAddress(address || "");
            },
            placeholder: "Enter delivery address",
            isClearable: true,
            styles: {
              input: (provided) => ({
                ...provided,
                width: "100%",
                padding: "0.75rem 1rem",
                fontSize: "1rem",
                border: "none",
                boxShadow: "none",
                "&:focus": {
                  outline: "none",
                },
              }),
              control: (provided) => ({
                ...provided,
                border: "none",
                boxShadow: "none",
                padding: 0,
              }),
            },
          }}
        />
      </div>
    </div>
  );
};

export default GoogleAddressSearch;
