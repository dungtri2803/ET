import React from "react";
import Header from "../Header/Header";
import Ourteam from "../../components/OurTeam/Ourteam";
import Ourservice from "../../components/Ourservice/Ourservice";
import Career from "../../components/Career/Career";
import Ourproject from "../../components/Ourproject/Ourproject";
import About from "../../components/About/About";
import Testimonial from "../../components/Testimonial/Testimonial";
import Brand from "../../components/Brand/Brand";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Navbar from "../Navbar/Navbar";
function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Header />
      <Ourteam />
      <Ourservice />
      <Career />
      <Ourproject />
      <About />
      <Testimonial />
      <Brand />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
