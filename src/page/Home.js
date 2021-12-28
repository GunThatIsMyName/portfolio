import React from "react";
import { About, Contact, Hero, Projects, Skills } from "../components";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default Home;
