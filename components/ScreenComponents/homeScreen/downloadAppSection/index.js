import React, { useState, useEffect, useRef } from "react";
import classes from "./downloadAppSection.module.css";
import triangle from "../../../../public/assets/homescreen/triangle.png";
import rentto_logo from "../../../../public/assets/homescreen/rentto_logo.png";
import phone from "../../../../public/assets/homescreen/phone.png";
import AOS from "aos";
import "aos/dist/aos.css";

function DownloadAppSection() {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
    AOS.refresh();
  }, []);

  return (
    <div className={classes.properties_section}>
      <img src={triangle.src} className={classes.triangle} />
      <img src={triangle.src} className={classes.triangle_up} />

      <div className={classes.properties_content}>
        <img src={rentto_logo.src} className={classes.logo} />
        <h2 data-aos="fade-up">Coming soon to your mobile devices</h2>
        <p>Will be available on the Apple App Store and Google Playstore.</p>
        <div className={classes.get_app_btn}>
          <p className={classes.btn_label}>Sign up for alerts</p>
        </div>
      </div>

      <img src={phone.src} className={classes.phone_img} />
    </div>
  );
}

export default DownloadAppSection;
