import Banner from "../../assets/components/banner/Banner.jsx";
import Btt from "../../assets/components/btt/Btt.jsx";
import CTA1 from "../../assets/components/cta1/CTA1.jsx";
import Footer from "../../assets/components/Footer/Footer.jsx";
import Navbar from "../../assets/components/navbar/Navbar.jsx";
import Project from "../../assets/components/Projects/Project.jsx";
import Skills from "../../assets/components/skills/Skills.jsx";
import Wicd from "../../assets/components/wicd/Wicd.jsx";

export default function Landing({ nums, clickedOn }) {
  return (
    <div>
      <Navbar />
      <Banner />
      <Project />
      <Skills />
      <CTA1 />
      <Wicd />
      <Footer count={nums} clicked={clickedOn} />
      <Btt />
    </div>
  );
}
