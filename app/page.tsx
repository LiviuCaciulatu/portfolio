"use client";

import React, { useRef } from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import AboutMe from "./components/AboutMe/AboutMe";
import Technologies from "./components/Technologies/Technologies";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

export default function Home() {
  const aboutRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const footerRef = useRef<HTMLElement | null>(null);

  return (
    <div>
      <Navbar aboutRef={aboutRef} projectsRef={projectsRef} footerRef={footerRef} />
      <Hero />
      <section ref={aboutRef}>
        <AboutMe />
      </section>
      <Technologies />
      <section ref={projectsRef}>
        <Projects />
      </section>
      <Footer ref={footerRef} />
    </div>
  );
}
