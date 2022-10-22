import React from "react";
import classes from "./featuresSection.module.css";
import no_fee_img from "../../../../public/assets/homescreen/no_fee.png";
import bypass_agents from "../../../../public/assets/homescreen/bypass_agents.png";
import genuine_ads from "../../../../public/assets/homescreen/genuine_ads.png";

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
              <p>OUR POLICY</p>
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

      <div className={classes.first_feature_section}>
        <div className={classes.content_container}>
          <div
            style={{ flexDirection: "row-reverse" }}
            className={classes.content_section}
          >
            <img src={bypass_agents.src} className={classes.no_fee_img} />
            <div className={classes.description_container}>
              <p>FLEXIBILITY</p>
              <h1>Direct communication with property owner</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.first_feature_section}>
        <div className={classes.content_container}>
          <div className={classes.content_section}>
            <img src={genuine_ads.src} className={classes.no_fee_img} />
            <div className={classes.description_container}>
              <p>QUICK AND FAST</p>
              <h1>Genuine & Authentic Ads</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <div className={classes.divider} />
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
