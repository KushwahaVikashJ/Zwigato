import Footer from "@/components/Footer";
import Header from "@/components/Header";

import React from "react";

type Props = {
  children: React.ReactNode;
  showHero?: boolean;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
