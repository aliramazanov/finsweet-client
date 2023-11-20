import OurDesigns from "../components/OurDesigns/OurDesigns";
import OurMission from "../components/OurMission/OurMission";
import OurTeam from "../components/OurTeam/OurTeam";
import BenefitsOf from "../../src/components/BenefitsOF/BenefitsOf";
import Footer from "../components/Footer/Footer";
export const About = () => {
  return (
    <div>
      <OurDesigns />
      <OurMission />
      <BenefitsOf aboutUs={true} />
      <OurTeam />
      <Footer />
    </div>
  );
};
