import AboutMe from "./AboutMe";
import Brand from "./Brand";
import ContactMe from "./ContactMe";
import Hero from "./Hero";
import Projects from "./Projects";
import { Review } from "./Review";
import WhatIDo from "./WhatIDo";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Brand />
      <WhatIDo />
      <Projects />
      <Review />
      <ContactMe />
    </>
  );
};

export default Home;
