import React from "react";
import classes from "./featuresSection.module.css";
import no_fee_img from "../../../../public/assets/homescreen/no_fee.png";

function FeaturesSection() {
  return (
    <div className={classes.features_section}>
      <div className={classes.first_feature_section}>
        <div className={classes.content_container}>
          <h1>
            Discover Your Next{" "}
            <span className={classes.orange_text}>Rental Property</span>
          </h1>
          <div className={classes.content_section}>
            <img src={no_fee_img.src} className={classes.no_fee_img} />
            <div className={classes.description_container}>
              <h1>Zero Commissions</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
