import About from "../../components/About/About";
import Brand from "../../components/Brand/Brand";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Ourproject from "../../components/Ourproject/Ourproject";
import Ourservice from "../../components/Ourservice/Ourservice";
import Ourteam from "../../components/OurTeam/Ourteam";
import Header from "../Header/Header";
import Ourvision from "../Ourvision/Ourvision";
import OurPartner from "../OurPartner/OurPartner"

function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Header />
      <Ourteam />
      <Ourvision />
      <Ourservice />
      <OurPartner />
      <Brand />
      <Ourproject />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
