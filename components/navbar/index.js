import React, { useEffect, useState } from "react";
import classes from "./navbar.module.css";
import { useRouter } from "next/router";
import logo from "../../public/assets/navbar_assets/logo.png";
import heart_icon from "../../public/assets/navbar_assets/heart_icon.png";
import mail_icon from "../../public/assets/navbar_assets/mail_icon.png";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useWindowSize } from "../../utils";
import menu_icon from "../../public/assets/navbar_assets/menu_icon.png";
import SlidingPanel, { PanelType } from "react-sliding-side-panel";
import "react-sliding-side-panel/lib/index.css";
import Link from "next/link";

function Navbar() {
  const router = useRouter();
  const { width } = useWindowSize();
  const [openPanel, setOpenPanel] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const [isNavbarVisisbleFromTop, setIsNavbarVisibleFromTop] = useState(false);
  const [darkTheme, setDarkTheme] = useState(undefined);
  const [panelType, setPanelType] = useState("left");
  const [panelSize, setPanelSize] = useState(60);
  const [noBackdrop, setNoBackdrop] = useState(false);

  let listener = null;

  const [currentPage, setCurrentPage] = useState();

  useEffect(() => {
    if (router.pathname) {
      const page = router.pathname.split("/");
      setCurrentPage(page[1]);
    }
  }, [router.pathname]);

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

  const handleToggle = () => {
    setDarkTheme(!darkTheme);
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
          : currentPage === "properties" || currentPage === "chat"
          ? classes.navbar_body_opaque
          : classes.navbar_body
      }
    >
      <SlidingPanel
        type={"left"}
        isOpen={openPanel}
        backdropClicked={() => setOpenPanel(false)}
        size={panelSize}
        panelClassName="additional-class"
        panelContainerClassName=""
        noBackdrop={noBackdrop}
      >
        <div className={classes.panel_container}>
          <Link href={"/"}>
            <p style={{ color: "#266867" }} className={classes.logo}>
              rentto<span className={classes.logo_orange}>app</span>
            </p>
          </Link>

          <div className={classes.divider} />
          <div className={classes.nav_menu_content}>
            <Link href={"/list_property"}>
              <p>List a property</p>
            </Link>
            <Link href={"/properties"}>
              <p>Featured</p>
            </Link>
            <p>FAQ</p>
            <div style={{ width: "60%" }} className={classes.divider} />
            <div className={classes.get_started_btn}>
              <p>Get Started</p>
            </div>
            <Link href={"/login"}>
              <p>Login</p>
            </Link>
            <Link href={"/chat"}>
              <p>Chat</p>
            </Link>

            <DarkModeSwitch
              checked={darkTheme}
              onChange={handleToggle}
              size={30}
            />
          </div>
        </div>
      </SlidingPanel>
      <div className={classes.left_panel}>
        {width > 786 ? (
          <>
            <Link href={"/"}>
              <p style={{ color: "#266867" }} className={classes.logo}>
                rentto<span className={classes.logo_orange}>app</span>
              </p>
            </Link>
            <div className={classes.left_panel_btns}>
              {/* <Link href={"/list_property"}>
                <p>List a property</p>
              </Link>
              <Link href={"/properties"}>
                <p>Featured</p>
              </Link>
              <p>FAQ</p>
              <Link href={"/chat"}>
                <p>Chat</p>
              </Link> */}
            </div>
          </>
        ) : (
          <>
            <img
              onClick={() => setOpenPanel(true)}
              src={menu_icon.src}
              className={classes.menu_icon}
            />
            <Link href={"/"}>
              <p style={{ color: "#266867" }} className={classes.logo}>
                rentto<span className={classes.logo_orange}>app</span>
              </p>
            </Link>
          </>
        )}
      </div>
      <div className={classes.right_panel}>
        {/* <img src={heart_icon.src} className={classes.icon} />
        <img src={mail_icon.src} className={classes.icon} /> */}
        {/* <Link href={"/login"}>
          <p>Login</p>
        </Link> */}
        <div className={classes.get_started_btn}>
          <p>Coming Soon</p>
        </div>
        <DarkModeSwitch checked={darkTheme} onChange={handleToggle} size={30} />
      </div>
    </div>
  );
}

export default Navbar;
