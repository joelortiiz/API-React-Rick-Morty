import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "./Menu";

const Layout = () => {
  return (
    <div>
      <header>
        <Menu />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
