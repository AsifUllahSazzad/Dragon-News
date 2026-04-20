import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import LatestNews from "../components/LatestNews";
import LeftSide from "../components/layout-components/LeftSide";
import MainContent from "../components/layout-components/MainContent";
import RightSide from "../components/layout-components/RightSide";
import FindUs from "../components/FindUs";
import QZone from "../components/QZone";

const HomeLayout = () => {
  return (
    <div className="container mx-auto space-y-5">
      <header className="space-y-5">
        <Header></Header>

        <section>
          <LatestNews></LatestNews>
        </section>
      </header>

      <nav>
        <Navbar></Navbar>
      </nav>

      <main className="grid md:grid-cols-12">
        <aside className="col-span-3">
          <LeftSide></LeftSide>
        </aside>

        <section className="col-span-6">
          <MainContent></MainContent>
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

export default HomeLayout;
