import React from "react";
import AboutUs from "./components/AboutUs";
import Awards from "./components/Awards";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavMobile from "./components/NavMobile";
import Partners from "./components/Partners";
import ShareStory from "./components/ShareStory";
import Vision from "./components/Vision";

function App() {
  const [menu, setMenu] = React.useState(false);

  return (
    <>
      {!menu ? (
        <div className=" bg-[#1E252B] p-4 font-rubik">
          <Hero setMenu={setMenu} />
          <Featured />
          <AboutUs />
          <Vision />
          <Awards />
          <ShareStory />
          <Partners />
          <Footer />
        </div>
      ) : (
        <NavMobile setMenu={setMenu} />
      )}
    </>
  );
}

export default App;
