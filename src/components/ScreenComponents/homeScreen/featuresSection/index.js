import React from "react";
import classes from "./featuresSection.module.css";

import hidden_fee_bg from "../../../../public/assets/homescreen/hidden_fee_bg.png";
import hidden_fee from "../../../../public/assets/homescreen/hidden_fee.png";

import bypass_agents_img from "../../../../public/assets/homescreen/bypass_agents_img.png";
import bypass_agents_bg from "../../../../public/assets/homescreen/bypass_agents_bg.png";

import genuine_img from "../../../../public/assets/homescreen/genuine_img.png";
import genuine_bg from "../../../../public/assets/homescreen/genuine_bg.png";

import assistance_img from "../../../../public/assets/homescreen/assistance_img.png";
import assistance_bg from "../../../../public/assets/homescreen/assistance_bg.png";

import featured_img from "../../../../public/assets/homescreen/featured_img.png";
import featured_bg from "../../../../public/assets/homescreen/featured_bg.png";

import RenttoPropertySection from "../renttoPropertiesSection";
import list_property_img_bg from "../../../../public/assets/homescreen/list_property_img_bg.png";
import list_property_img from "../../../../public/assets/homescreen/list_property_img.png";
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
              <div className={classes.card_imgs_container}>
                <img src={hidden_fee_bg.src} className={classes.card_img_bg} />
                <img src={hidden_fee.src} className={classes.card_img} />
              </div>
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
              <div className={classes.card_imgs_container}>
                <img
                  src={bypass_agents_bg.src}
                  className={classes.card_img_bg}
                />
                <img src={bypass_agents_img.src} className={classes.card_img} />
              </div>
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
              <div className={classes.card_imgs_container}>
                <img src={genuine_bg.src} className={classes.card_img_bg} />
                <img src={genuine_img.src} className={classes.card_img} />
              </div>
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
              <div className={classes.card_imgs_container}>
                <img src={assistance_bg.src} className={classes.card_img_bg} />
                <img src={assistance_img.src} className={classes.card_img} />
              </div>
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
              <div className={classes.card_imgs_container}>
                <img src={featured_bg.src} className={classes.card_img_bg} />
                <img src={featured_img.src} className={classes.card_img} />
              </div>
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
