import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import ImgPara from "./components/ImgPara";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <ImgPara />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
