import React from "react";
import classes from "./downloadAppSection.module.css";
import triangle from "../../../../public/assets/homescreen/triangle.png";
import rentto_logo from "../../../../public/assets/homescreen/rentto_logo.png";
import phone from "../../../../public/assets/homescreen/phone.png";

function DownloadAppSection() {
  return (
    <div className={classes.properties_section}>
      <img src={triangle.src} className={classes.triangle} />
      <img src={triangle.src} className={classes.triangle_up} />

      <div className={classes.properties_content}>
        <img src={rentto_logo.src} className={classes.logo} />
        <h2>Try Rentto For Free</h2>
        <p>Rentto Lorem ipsum Dolor Set Est Lorem Ipsum</p>
        <div className={classes.get_app_btn}>
          <p>Get Rentto App</p>
        </div>
      </div>

      <img src={phone.src} className={classes.phone_img} />
    </div>
  );
}

export default DownloadAppSection;
