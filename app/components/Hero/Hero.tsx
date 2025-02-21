"use client";

import React, { useState, useEffect, RefObject } from "react";
import style from "./style.module.scss";

interface Subtitle {
  text: string;
  highlight: string;
}

interface HeroProps {
  footerRef: RefObject<HTMLElement | null>;
}

const subtitles: Subtitle[] = [
  { text: "Aspiring web developer learning, building, and growing every day!", highlight: "building" },
  { text: "I'm eager to bring ideas to life through code!", highlight: "ideas" },
  { text: "Let's create something awesome together!", highlight: "together!" },
  { text: "Need a passionate web developer? Let’s talk!", highlight: "Let’s talk!" }
];

const Hero: React.FC<HeroProps> = ({ footerRef }) => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setHasStarted(true);
    }, 3000);

    return () => clearTimeout(startTimeout);
  }, []);

  useEffect(() => {
    if (!hasStarted || isFinished) return;

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        if (index < subtitles.length - 1) {
          setIndex((prevIndex) => prevIndex + 1);
          setFade(true);
        } else {
          setIsFinished(true);
          setShowCTA(true);
        }
      }, 1000);
    }, 4000);

    return () => clearInterval(interval);
  }, [hasStarted, index, isFinished]);

  const getHighlightedText = (text: string, highlight: string) => {
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={i} className={style.highlight}>{part}</span>
      ) : (
        part
      )
    );
  };

  const scrollToFooter = () => {
    if (footerRef?.current) {
      window.scrollTo({
        top: footerRef.current.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/CV-Liviu-Caciulatu.pdf";
    link.download = "CV-Liviu-Caciulatu";
    link.click();
  };

  const currentSubtitle = subtitles[index] || { text: "", highlight: "" };

  return (
    <div className={style.heroContainer}>
      <div className={style.heroTitle}>
        <div
          className={`${style.title} ${fade && index < subtitles.length - 1 ? style.fadeIn : ''} ${fade || index === subtitles.length - 1 ? '' : style.fadeOut} ${isFinished ? style.hidden : ""}`}
        >
          {getHighlightedText(currentSubtitle.text, currentSubtitle.highlight)}
        </div>
      </div>

      {showCTA && (
        <div className={style.ctaContainer}>
          <p className={style.ctaText}>Need a passionate web developer? <span className={style.talk}>Let’s talk!</span></p>
        </div>
      )}
      <div className={style.btns}>
        <button className={style.ctaButton} onClick={scrollToFooter}>Get in Touch</button>
        <button className={style.ctaButton} onClick={downloadResume}>Download Resume</button>
      </div>
    </div>
  );
};

export default Hero;
