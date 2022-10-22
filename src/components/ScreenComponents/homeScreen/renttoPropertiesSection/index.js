import React from "react";
import classes from "./renttoPropertySection.module.css";
import triangle from "../../../../public/assets/homescreen/triangle.png";
import PropertyCard from "../../../propertyCard";

function RenttoPropertySection() {
  return (
    <div className={classes.properties_section}>
      <img src={triangle.src} className={classes.triangle} />
      <img src={triangle.src} className={classes.triangle_up} />

      <div className={classes.properties_content}>
        <h2>
          Rentto <span className={classes.orange_text}>Properties</span>
        </h2>
        <div className={classes.properties_container}>
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
        </div>
      </div>
    </div>
  );
}

export default RenttoPropertySection;
