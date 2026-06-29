import React from "react";
import ThemeToggler from "../Helper/ThemeToggler";
import Nav from "./Navbar/Nav";
import ResponsiveNav from "./Navbar/ResponsiveNav";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Skills from "./Skills/Skills";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Skills />
    </div>
  );
};

export default Home;
