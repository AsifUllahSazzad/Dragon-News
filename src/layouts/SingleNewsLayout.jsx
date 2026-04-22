import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import NewsDetails from "../components/pages/NewsDetails";
import RightSide from "../components/layout-components/RightSide";
import FindUs from "../components/FindUs";
import QZone from "../components/QZone";
import { Outlet } from "react-router-dom";

const SingleNewsLayout = () => {
    
  return (
    <div className="container mx-auto space-y-5">
      <header>
        <Header></Header>
      </header>

      <main className="grid md:grid-cols-12 gap-5">
        <section className="col-span-9">
          <Outlet></Outlet>
        </section>

        <aside className="col-span-3 space-y-5">
          <RightSide></RightSide>
          <FindUs></FindUs>
          <QZone></QZone>
        </aside>
      </main>
    </div>
  );
};

export default SingleNewsLayout;
