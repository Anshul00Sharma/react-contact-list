// importing header and footer for setting layout
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import { Outlet } from "react-router-dom";
// layout contains basic structure of the application
const Layout = () => {
  return (
    <div className="App">
      <Header title="Contact List" />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
