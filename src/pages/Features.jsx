import FeaturesHero from "../components/FeaturesHero/FeaturesHero";
import BenefitsOf from "../../src/components/BenefitsOF/BenefitsOf";
import FeaturesGrid from "../components/FeaturesGrid/FeaturesGrid";
import FAQ from "../components/FAQComponent/FAQComponent";

export const Features = () => {
  return (
    <div>
      <FeaturesHero />
      <BenefitsOf featuresPage={true} />
      <FeaturesGrid />
      <FAQ />
    </div>
  );
};
