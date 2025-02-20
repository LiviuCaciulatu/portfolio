"use client";

import React, { RefObject } from "react";
import style from "./style.module.scss";

interface NavbarProps {
  aboutRef: RefObject<HTMLElement | null>;
  projectsRef: RefObject<HTMLElement | null>;
  footerRef: RefObject<HTMLElement | null>;
}

const Navbar: React.FC<NavbarProps> = ({ aboutRef, projectsRef, footerRef }) => {
  const scrollToSection = (ref: RefObject<HTMLElement | null>) => {
    if (ref?.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 80, // Adjust to navbar height if needed
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={style.navbarContainer}>
      <div className={style.subContainer}>
        <div className={style.navBtns} onClick={scrollToTop}>
          Home
        </div>

        <div className={style.navBtns} onClick={() => scrollToSection(aboutRef)}>
          About me
        </div>

        <div className={style.logo}>
          <div className={style.title}>
            <span className={style.firstName}>Liviu</span>
            <span className={style.lastName}>Caciulatu</span>
          </div>
          <div className={style.subTitle}>
            <span className={style.subLeft}>Web Developer </span>
            <span className={style.subMiddle}>&</span>
            <span className={style.subRight}> Problem solver</span>
          </div>
        </div>

        <div className={style.navBtns} onClick={() => scrollToSection(projectsRef)}>
          Projects
        </div>

        <div className={style.navBtns} onClick={() => scrollToSection(footerRef)}>
          Socials
        </div>
      </div>
    </div>
  );
};

export default Navbar;
