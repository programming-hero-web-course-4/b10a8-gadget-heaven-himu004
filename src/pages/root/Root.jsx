import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";

const Root = () => {
  return (
    <div className="bg-gray-100">
      <div className="bg-[#9538E2] mx-5 mt-5 rounded-t-xl">
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
