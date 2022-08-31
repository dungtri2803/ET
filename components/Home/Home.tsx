import React from "react";
import Header from "../Header/Header";
import HeaderMb from "../Header/Header.mobile";
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
import Ourvision from "../Ourvision/Ourvision"
function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Header />
      <Ourteam />
      <Ourvision />
      <Ourservice />
      <Career />
      <Brand />
      <Ourproject />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
