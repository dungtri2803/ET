import type { NextPage } from "next";
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
import Loading from '../components/Loading/Loading'
import OurprojectMobile from '../components/Ourproject/OurprojectMobile'


const Home: NextPage = () => {
  return (
    <div>
      <Loading />
      <Head>
        <title>{`ET`}</title>
      </Head>
      <Header />
      <Ourteam />
      <Ourservice />
      <Career />
      <Ourproject />
      <OurprojectMobile />
      <About />x `  `
      <Testimonial />
      <Brand />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
