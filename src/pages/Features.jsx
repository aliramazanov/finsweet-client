import FeaturesHero from "../components/FeaturesHero/FeaturesHero";
import BenefitsOf from "../components/BenefitsOf/BenefitsOf";

export const Features = () => {
  return (
    <div>
      <FeaturesHero />
      <BenefitsOf featuresPage={true} />
    </div>
  );
};
