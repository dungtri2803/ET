import type { NextPage } from "next";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/Header/Header";
import Ourteam from "../components/OurTeam/Ourteam";
import Ourservice from "../components/Ourservice/Ourservice";
import Career from "../components/Career/Career";
import Ourproject from "../components/Ourproject/Ourproject";
import About from "../components/About/About";
import Testimonial from "../components/Testimonial/Testimonial";
import Brand from "../components/Brand/Brand";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Loading from "../components/Loading/Loading";
import OurprojectMobile from "../components/Ourproject/OurprojectMobile";
import myGif from "../public/images/Final.gif";

const Home: NextPage = () => {
  const [LoadingPage, setLoadingPage] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoadingPage(false);
    }, 5000);
  }, []);
  return (
    <div>
      {LoadingPage ? (
        <Loading />
      ) : (
        <div>
          <Head>
            <title>{`ET`}</title>
          </Head>
          <Header />
          <Ourteam />
          <Ourservice />
          <Career />
          <Ourproject />
          <OurprojectMobile />
          <About />
          <Testimonial />
          <Brand />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Home;
