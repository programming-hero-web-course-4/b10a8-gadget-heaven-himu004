import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";

const Root = () => {
    const location = useLocation();
  return (
    <div className="bg-gray-100">
      <div className={`${location.pathname === '/' ? 'bg-[#9538E2]' : 'bg-white'} mx-5 mt-5 rounded-t-xl`}>
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
