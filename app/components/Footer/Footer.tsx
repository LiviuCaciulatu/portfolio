"use client";

import React, { forwardRef } from "react";
import style from "./style.module.scss";
import Image from "next/image";

interface FooterProps {
  ref?: React.Ref<HTMLElement>;
}

const Footer = forwardRef<HTMLElement, FooterProps>((_, ref) => {
  return (
    <footer ref={ref} className={style.footer}>
      <div className={style.footerContent}>
        <div className={style.text}>
          <div className={style.title}>Let&apos;s Get In Touch</div>
          <div className={style.description}>
            {`I'm currently open to new job opportunities and excited to explore
              new challenges! My inbox is always open—whether you have a question,
              a project collaboration in mind, or just want to connect. Feel free
              to reach out, and I'll get back to you as soon as I can.`
              .split(" ")
              .map((word, index) => (
                <span key={index} className={style.word}>
                  {word}{" "}
                </span>
              ))}
          </div>
          <div className={style.bottomText}>Here are my socials:</div>
        </div>
        <div className={style.socials}>
          <a
            href="mailto:liviucaciulatu@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className={style.socialLink}
          >
            <Image
              src="/assets/socials/email.svg"
              alt="email"
              width={50}
              height={50}
              className={style.socialImage}
            />
          </a>
          <a href="tel:+40785593851" className={style.socialLink}>
            <Image
              src="/assets/socials/phone.svg"
              alt="phone"
              width={50}
              height={50}
              className={style.socialImage}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/liviu-caciulatu/"
            target="_blank"
            rel="noopener noreferrer"
            className={style.socialLink}
          >
            <Image
              src="/assets/socials/linkedin.svg"
              alt="linkedin"
              width={50}
              height={50}
              className={style.socialImage}
            />
          </a>
          <a
            href="https://github.com/LiviuCaciulatu"
            target="_blank"
            rel="noopener noreferrer"
            className={style.socialLink}
          >
            <Image
              src="/assets/socials/github.svg"
              alt="github"
              width={50}
              height={50}
              className={style.socialImage}
            />
          </a>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
