import React from "react";
import style from "./style.module.scss";

interface NavMenuProps {
  scrollToTop: () => void;
  scrollToSection: (ref: React.RefObject<HTMLElement | null>) => void;
  aboutRef: React.RefObject<HTMLElement | null>;
  projectsRef: React.RefObject<HTMLElement | null>;
  footerRef: React.RefObject<HTMLElement | null>;
  closeMenu: () => void;  // New prop to close the menu
}

const NavMenu: React.FC<NavMenuProps> = ({
  scrollToTop,
  scrollToSection,
  aboutRef,
  projectsRef,
  footerRef,
  closeMenu,
}) => {
  return (
    <div className={style.navMenu}>
      <div className={style.navBtnsContainer}>
        <button className={style.navBtns} onClick={() => { scrollToTop(); closeMenu(); }}>
          Home
        </button>
        <button className={style.navBtns} onClick={() => { scrollToSection(aboutRef); closeMenu(); }}>
          About Me
        </button>
        <button className={style.navBtns} onClick={() => { scrollToSection(projectsRef); closeMenu(); }}>
          Projects
        </button>
        <button className={style.navBtns} onClick={() => { scrollToSection(footerRef); closeMenu(); }}>
          Socials
        </button>
        <button className={style.navBtns} onClick={() => closeMenu()}>
          Close
        </button>
      </div>
    </div>
  );
};

export default NavMenu;
