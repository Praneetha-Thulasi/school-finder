import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";
import Filter from "./components/filter/Filter";

function RootLayout() {
  const location = useLocation();

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <div style={{ flex: 1 }}>
        {location.pathname === "/schoolist" && <Filter onFilterChange={(newFilter) => console.log(newFilter)} />}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default RootLayout;
