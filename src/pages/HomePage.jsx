import { Hero } from "@/components/sections/Hero";
import { TechStack } from "@/components/sections/TechStack";
import { Services } from "@/components/sections/Services";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Process } from "@/components/sections/Process";
import { ValueProps } from "@/components/sections/ValueProps";
import { About } from "@/components/sections/About";
import { SocialProof } from "@/components/sections/SocialProof";
import { CallToAction } from "@/components/sections/CallToAction";
import { Contact } from "@/components/sections/Contact";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <TechStack />
      <Services />
      <FeaturedProjects />
      <Process />
      <ValueProps />
      <About />
      <SocialProof />
      <CallToAction />
      <Contact />
    </>
  );
};
