import React from "react";
import AboutUs from "./components/AboutUs";
import Awards from "./components/Awards";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import ShareStory from "./components/ShareStory";
import Vision from "./components/Vision";

function App() {
  return (
    <div className=" bg-[#1E252B] p-4 font-rubik">
      <Hero />
      <Featured />
      <AboutUs />
      <Vision />
      <Awards />
      <ShareStory />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
