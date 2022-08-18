import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import About from "../components/About/About";
import Brand from "../components/Brand/Brand";
import Career from "../components/Career/Career";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Loading from "../components/Loading/Loading";
import Ourproject from "../components/Ourproject/Ourproject";
import OurprojectMobile from "../components/Ourproject/OurprojectMobile";
import Ourservice from "../components/Ourservice/Ourservice";
import Ourteam from "../components/OurTeam/Ourteam";
import Testimonial from "../components/Testimonial/Testimonial";

const Home: NextPage = () => {
  const [LoadingPage, setLoadingPage] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingPage(false);
    }, 5000);
  }, []);

  return (
    <>
      <Head>
        <title>{`ET`}</title>
      </Head>
      {/* body */}
      {LoadingPage && <Loading />}

      {!LoadingPage && (
        <>
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
        </>
      )}
      {/* <OurteamDetail /> */}
    </>
  );
};

export default Home;
