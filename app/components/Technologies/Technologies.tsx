"use client";

import React from "react";
import Image from "next/image";
import style from "./style.module.scss";

// List of technology names matching the SVG file names
const technologies = [
  "css",
  "github",
  "html",
  "java",
  "javascript",
  "mongoDB",
  "nextjs",
  "node-js",
  "postgreSQL",
  "react-native",
  "react",
  "typescript",
];

const Technologies = () => {
  return (
    <div className={style.container}>
      <div className={style.marquee}>
        <div className={style.track}>
          {[...technologies, ...technologies, ...technologies].map((tech, index) => (
            <div key={index} className={style.techItem}>
              <Image
                src={`/assets/technologies/${tech}.svg`}
                alt={`${tech} logo`}
                width={50}
                height={50}
                className={style.techImage}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
