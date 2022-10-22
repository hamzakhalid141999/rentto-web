import React, { useEffect, useState } from "react";
import classes from "./navbar.module.css";
import { useRouter } from "next/router";
import logo from "../../public/assets/navbar_assets/logo.png";
import heart_icon from "../../public/assets/navbar_assets/heart_icon.png";
import mail_icon from "../../public/assets/navbar_assets/mail_icon.png";

function Navbar() {
  const router = useRouter();

  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const [isNavbarVisisbleFromTop, setIsNavbarVisibleFromTop] = useState(false);
  const [darkTheme, setDarkTheme] = useState(undefined);

  let listener = null;

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        // Set value of  darkmode to dark
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        // Set value of  darkmode to light
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [darkTheme]);

  const handleToggle = (value) => {
    setDarkTheme(value);
  };

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (document !== null) {
        let scrolled = document.scrollingElement.scrollTop;

        if (scrolled >= 10) {
          if (backgroundColor !== "opaque") {
            setBackgroundColor("opaque");
          }
        } else {
          if (backgroundColor !== "transparent") {
            setBackgroundColor("transparent");
          }
        }
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [backgroundColor]);

  return (
    <div
      className={
        isNavbarVisisbleFromTop
          ? classes.navbar_body_opaque
          : backgroundColor === "opaque"
          ? classes.navbar_body_opaque
          : classes.navbar_body
      }
    >
      <div className={classes.left_panel}>
        <p style={{ color: "#266867" }} className={classes.logo}>
          rentto
        </p>
        <div className={classes.left_panel_btns}>
          <p>List a property</p>
          <p>Featured</p>
          <p>FAQ</p>
        </div>
      </div>
      <div className={classes.right_panel}>
        <img src={heart_icon.src} className={classes.icon} />
        <img src={mail_icon.src} className={classes.icon} />
        <p onClick={() => handleToggle(true)}>Login</p>
        <div
          onClick={() => handleToggle(false)}
          className={classes.get_started_btn}
        >
          <p>Get Started</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;