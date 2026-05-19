import React from "react";

import { Outlet } from "react-router-dom";

import Footer from "../components/Footer";
import NavbarSection from "@/components/NavbarSection";

const Layout = () => {
  return (
    <>
      {/* <Navbar /> */}
      <NavbarSection />

      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
