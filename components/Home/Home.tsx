import React from "react";
import ThemeToggler from "../Helper/ThemeToggler";
import Nav from "./Navbar/Nav";
import ResponsiveNav from "./Navbar/ResponsiveNav";
import Hero from "./Hero/Hero";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <ResponsiveNav />
      <Hero />
    </div>
  );
};

export default Home;
