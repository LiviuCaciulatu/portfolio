"use client";

import React from "react";
import style from "./style.module.scss";

const Logo = () => {
  return (
    <div className={style.logoContainer}>
        <span className={style.firstName}>Liviu</span><span className={style.lastName}>Caciulatu</span>
    </div>
  );
};

export default Logo;