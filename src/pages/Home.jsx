import Features from "../components/Features/Features";
import Feedback from "../components/Feedback/Feedback";
import Hero from "../components/Hero/Hero";
import HowWeWork from "../components/HowWeWork/HowWeWork";
import OurProjects from "../components/OurProjects/OurProjects";

export const Home = () => {
  return (
    <div>
      <Hero />
      <HowWeWork />
      <OurProjects />
      <Features />
      <Feedback />
    </div>
  );
};
