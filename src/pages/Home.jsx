import React from "react";
import { Contact, Services, Hero, Projects } from "../components";

const Home = () => {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Amiri:ital@1&family=Lobster+Two&family=Cormorant+Garamond:wght@300&family=Racing+Sans+One&family=Rajdhani:wght@500&family=Roboto+Mono:wght@100&display=swap"
        rel="stylesheet"
      ></link>
      <div>
        <Hero />
        <Projects />
        <Services />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
