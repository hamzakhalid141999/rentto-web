import React from "react";
import classes from "./firstSection.module.css";
import first_section_bg from "../../../../public/assets/homescreen/first_section_bg.png";
import orange_blob from "../../../../public/assets/homescreen/orange_blob.png";
import orange_blob_1 from "../../../../public/assets/homescreen/orange_blob_1.png";
import green_blob from "../../../../public/assets/homescreen/green_blob.png";
import orange_triangle from "../../../../public/assets/homescreen/orange_triangle.png";
import green_triangle from "../../../../public/assets/homescreen/green_triangle.png";
import triangle from "../../../../public/assets/homescreen/triangle.png";

function FirstSection() {
  return (
    <div className={classes.first_section}>
      <img src={first_section_bg.src} className={classes.bg} />
      <img src={orange_blob.src} className={classes.orange_blob} />
      <img src={orange_blob_1.src} className={classes.orange_blob_1} />
      <img src={green_blob.src} className={classes.green_blob} />
      <img src={triangle.src} className={classes.triangle} />
      <h1>
        The <span className={classes.orange_text}>Easiest</span> way to rent a{" "}
        <span className={classes.orange_text}>Property</span>
      </h1>

      <div className={classes.search_bar_container}>
        <div className={classes.search_bar}></div>
        <div className={classes.search_btn}>
          <p>SEARCH</p>
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
