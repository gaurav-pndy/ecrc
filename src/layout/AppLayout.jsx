import React, { useEffect, useRef, useState } from "react";

import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";

function AppLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="min-h-screen wrapper ">
      <Header />
      <div className="">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default AppLayout;
