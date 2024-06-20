import { Loader2 } from "lucide-react";

const Loader = () => (
  <div className="flex justify-center items-center h-screen">
    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
    Loading...
  </div>
);

export default Loader;
