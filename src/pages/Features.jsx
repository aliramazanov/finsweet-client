import FeaturesHero from "../components/FeaturesHero/FeaturesHero";
import BenefitsOf from "../components/BenefitsOf/BenefitsOf";
import FeaturesGrid from "../components/FeaturesGrid/FeaturesGrid";
import FAQ from "../components/FAQ/FAQ";

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
