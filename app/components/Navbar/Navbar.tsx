"use client";

import React, { RefObject } from "react";
import style from "./style.module.scss";

interface NavbarProps {
  aboutRef: RefObject<HTMLElement | null>;
}

const Navbar: React.FC<NavbarProps> = ({ aboutRef }) => {
  const scrollToSection = (ref: RefObject<HTMLElement | null>) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={style.navbarContainer}>
      <div className={style.subContainer}>
        <div className={style.navBtns} onClick={() => scrollToSection(aboutRef)}>
          About me
        </div>
        <div className={style.navBtns}>Projects</div>
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
        <div className={style.navBtns}>Skills</div>
        <div className={style.navBtns}>Socials</div>
      </div>
    </div>
  );
};

export default Navbar;
