import React, { useState } from "react";
import NavMenu from "../NavMenu/NavMenu";
import style from "./style.module.scss";
import Image from "next/image";

interface NavbarProps {
  aboutRef: React.RefObject<HTMLElement | null>;
  projectsRef: React.RefObject<HTMLElement | null>;
  footerRef: React.RefObject<HTMLElement | null>;
}

const Navbar: React.FC<NavbarProps> = ({ aboutRef, projectsRef, footerRef }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    if (ref?.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 80,
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
      
        <div className={style.navBtnsContainer}>
          <button className={style.navBtns} onClick={scrollToTop}>
            Home
          </button>
          <button className={style.navBtns} onClick={() => scrollToSection(aboutRef)}>
            About Me
          </button>
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

        <div className={style.navBtnsContainer}>
          <button className={style.navBtns} onClick={() => scrollToSection(projectsRef)}>
            Projects
          </button>
          <button className={style.navBtns} onClick={() => scrollToSection(footerRef)}>
            Socials
          </button>
        </div>

        <div className={style.burgerMenu} onClick={toggleMenu}>
          <Image
            src="/assets/svg/burger.svg"
            alt="Menu"
            width={30}
            height={30}
          />
        </div>

      {isMenuOpen && (
        <NavMenu
          scrollToTop={scrollToTop}
          scrollToSection={scrollToSection}
          aboutRef={aboutRef}
          projectsRef={projectsRef}
          footerRef={footerRef}
          closeMenu={closeMenu}
        />
      )}
      </div>
    </div>
  );
};

export default Navbar;
