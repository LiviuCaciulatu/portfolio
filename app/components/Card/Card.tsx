"use client";

import React from "react";
import style from "./style.module.scss";
import Image from "next/image";

interface CardProps {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, altText, title, description }) => {
  return (
    <div className={style.card}>
      <div className={style.imageContainer}>
        <Image src={imageSrc} alt={altText} width={300} height={300} className={style.cardImage} />
      </div>
      <div className={style.textContainer}>
        <h3 className={style.cardTitle}>{title}</h3>
        <p className={style.cardDescription}>{description}</p>
      </div>
    </div>
  );
};

export default Card;
