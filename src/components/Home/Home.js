import React from "react";

import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div id="up">
      <NavBar></NavBar>
      <Header></Header>
      <About></About>
      <Portfolio></Portfolio>
      <Services></Services>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
