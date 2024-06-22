import { Link } from "react-router-dom";
import unserviceableImage from "../assets/unserviceable.png"; // Add your image path here

const cities = [
  "Pune",
  "Bangalore",
  "Noida",
  "Mumbai",
  "Chennai",
  "Gurgaon",
  "Indore",
  "Hyderabad",
  "Kolkata",
  "Ahmedabad",
];

const NotServiceable = () => {
  return (
    <div className="flex flex-col container mx-auto flex-1 py-10">
      <div className="flex flex-col items-center justify-center">
        <img
          src={unserviceableImage}
          className="rounded-md object-cover h-40 w-40"
        />
        <h2 className="text-3xl font-bold mb-2">Location Unserviceable</h2>
        <p className="text-lg mb-4">
          We don’t have any services here till now. Try changing{" "}
          <Link to="/search" className="text-blue-500 hover:underline">
            location
          </Link>
          .
        </p>
      </div>
      <div>
        <p className="text-2xl font-bold mb-4">
          We deliver to popular cities like:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {cities.map((city, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-md p-4 hover:bg-gray-200 transition"
            >
              <div className="text-lg font-semibold">{city}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotServiceable;
