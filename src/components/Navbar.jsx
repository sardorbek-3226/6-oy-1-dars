import React from "react";
import style from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={style.nav}>
      <div className={style.logo}>
        <img src="/Frame6.svg" alt="logo" />
      </div>
      <div className={style.nav_item}>
        <div className={style.icon}>
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
        <button className={style.btn1}>Sign Up</button>
        <button className={style.btn2}>Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
