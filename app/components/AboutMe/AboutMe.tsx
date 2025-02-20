"use client";

import React from "react";
import style from "./style.module.scss";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        <Image
          src="/assets/jpeg/profile2.jpg"
          alt="Profile Picture"
          width={300}
          height={300}
          className={style.profileImage}
          priority
        />
        <div className={style.text}>
          <div className={style.title}>About Me</div>
          <div className={style.description}>
            {`I'm an aspiring web developer with a passion for creating and problem-solving. 
            For the past two years, I've been honing my skills through courses and hands-on projects, 
            and I’m currently working at CleanCode on various web development tasks. Before diving into coding, 
            I spent 11 years in the hospitality industry—first as a bartender, then as an office manager for a club and restaurant. 
            That experience shaped my adaptability, teamwork, and problem-solving mindset. Now, I bring that same energy and optimism into web development, 
            always eager to learn and build something great!`
              .split(" ")
              .map((word, index) => (
                <span key={index} className={style.word}>
                  {word}{" "}
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
