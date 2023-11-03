import OurDesigns from "../components/OurDesigns/OurDesigns";
import OurMission from "../components/OurMission/OurMission";
import OurTeam from "../components/OurTeam/OurTeam";
import BenefitsOf from "../components/BenefitsOf/BenefitsOf.jsx";

export const About = () => {
  return (
    <div>
      <OurDesigns />
      <OurMission />
      <BenefitsOf aboutUs={true} />
      <OurTeam />
    </div>
  );
};
