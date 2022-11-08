import React from "react";
import PropertyBanner from "../../../components/ScreenComponents/propertyScreen/PropertyBanner";
import PropertyInfo from "../../../components/ScreenComponents/propertyScreen/PropertyInfo";
import classes from "./property.module.css";

function Property() {
  return (
    <div className={classes.property_section}>
      <PropertyBanner />
      <PropertyInfo />
    </div>
  );
}

export default Property;
