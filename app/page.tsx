'use client'

import React, { useRef } from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import AboutMe from "./components/AboutMe/AboutMe";

export default function Home() {
  const aboutRef = useRef<HTMLElement | null>(null);

  return (
    <div>
      <Navbar aboutRef={aboutRef} />
      <Hero />
      <section ref={aboutRef}>
        <AboutMe />
      </section>
    </div>
  );
}
