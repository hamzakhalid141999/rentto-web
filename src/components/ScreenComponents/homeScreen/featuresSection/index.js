import React from "react";
import classes from "./featuresSection.module.css";
import no_fee_img from "../../../../public/assets/homescreen/no_fee.png";
import bypass_agents from "../../../../public/assets/homescreen/bypass_agents.png";
import genuine_ads from "../../../../public/assets/homescreen/genuine_ads.png";
import RenttoPropertySection from "../renttoPropertiesSection";
import list_property_img_bg from "../../../../public/assets/homescreen/list_property_img_bg.png";
import list_property_img from "../../../../public/assets/homescreen/list_property_img.png";
import helpline_img from "../../../../public/assets/homescreen/helpline_img.png";
import contracts_img from "../../../../public/assets/homescreen/contracts_img.png";
import bg_pattern from "../../../../public/assets/homescreen/bg_pattern.png";
import left_bg from "../../../../public/assets/homescreen/left_pattern.png";
import right_bg from "../../../../public/assets/homescreen/right_pattern.png";
import lower_right_pattern from "../../../../public/assets/homescreen/lower_right_pattern.png";

function FeaturesSection() {
  return (
    <>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.first_feature_section}>
          <img src={left_bg.src} className={classes.left_bg} />

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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris.
                </p>
                <div className={classes.divider} />
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RenttoPropertySection />
      <div className={classes.features_section}>
        <div className={classes.first_feature_section}>
          <img src={left_bg.src} className={classes.left_bg} />
          <div className={classes.content_container}>
            <h1>
              Thinking of <span className={classes.orange_text}>listing</span>{" "}
              your property?
            </h1>
            <div className={classes.content_section}>
              <div className={classes.card_imgs_container}>
                <img
                  src={list_property_img_bg.src}
                  className={classes.card_img_bg}
                />
                <img src={list_property_img.src} className={classes.card_img} />
              </div>
              <div className={classes.description_container}>
                <p>OPTION 1</p>
                <h1>List it Myself</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris.
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
              <img src={helpline_img.src} className={classes.no_fee_img} />
              <div className={classes.description_container}>
                <p>
                  OPTION 2{" "}
                  <span className={classes.orange_span}>(RECOMMENDED)</span>
                </p>
                <h1>Rentto Assistance</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.first_feature_section}>
          <img src={lower_right_pattern.src} className={classes.right_bg} />

          <div className={classes.content_container}>
            <div className={classes.content_section}>
              <img src={contracts_img.src} className={classes.no_fee_img} />
              <div className={classes.description_container}>
                <p>QUICK AND FAST</p>
                <h1>Featured Property</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris.
                </p>
                <div className={classes.divider} />
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturesSection;
