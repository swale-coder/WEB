import React from "react";
import "./App.css";
import Header from "./Component/Header/Header";
import Hero from "./Component/Hero/Hero";
import Service from "./Component/Service/Service";
import Testimonial from "./Component/Testimonial/Testimonial";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Service />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
