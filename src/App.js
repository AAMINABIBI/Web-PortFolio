import React from "react";
import Intro from "./components/Intro/Intro";
import Nav from "./components/navbar/Nav";
import Contacts from './components/Contact/Contacts'
import Footer from "./components/Footer/Footer";
import Portfolio from "./components/Portfolio/Portfolio";
import "./index.css";
import Skills from "./components/Skills/Skills";
import AboutMe from "./components/AboutMe/AboutMe";
const App = () => {
  return (
    <>
      <Intro />
      <Nav />
      <AboutMe/>
       <Skills />
      <Portfolio />
      <Contacts />
      <Footer />
    </>
  );
};

export default App;
