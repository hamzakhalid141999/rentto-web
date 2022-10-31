import React, { useState, useEffect, useRef } from "react";
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

import secure_img from "../../../../public/assets/homescreen/secure_img.png";

import RenttoPropertySection from "../renttoPropertiesSection";
import list_property_img_bg from "../../../../public/assets/homescreen/list_property_img_bg.png";
import list_property_img from "../../../../public/assets/homescreen/list_property_img.png";
import left_bg from "../../../../public/assets/homescreen/left_pattern.png";
import right_bg from "../../../../public/assets/homescreen/right_pattern.png";
import lower_right_pattern from "../../../../public/assets/homescreen/lower_right_pattern.png";

import AOS from "aos";
import "aos/dist/aos.css";

function FeaturesSection() {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className={classes.features_section}>
        <div className={classes.first_feature_section}>
          <div className={classes.content_container}>
            <h1 data-aos="fade-up">
              Discover Your Next{" "}
              <span className={classes.orange_text}>Rental Property</span>
            </h1>
            <div
              style={{ marginTop: "100px" }}
              className={classes.content_section}
            >
              <div
                data-aos="fade-right"
                className={classes.card_imgs_container}
              >
                <img src={hidden_fee_bg.src} className={classes.card_img_bg} />
                <img src={hidden_fee.src} className={classes.card_img} />
              </div>
              <div
                data-aos="fade-left"
                className={classes.description_container}
              >
                <p>SAVE MONEY</p>
                <h1>Zero Commissions</h1>
                <p>
                RenttoApp is a zero commission based platform. In the existing system  Property Agents charge hefty commissions for inadequate services. With renttoApp Property Owners and Tenants will save substantial amounts of funds. 
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
              <div data-aos="fade-left" className={classes.card_imgs_container}>
                <img
                  src={bypass_agents_bg.src}
                  className={classes.card_img_bg}
                />
                <img
                  style={{ top: "-20px" }}
                  src={bypass_agents_img.src}
                  className={classes.card_img}
                />
                <img src={secure_img.src} className={classes.card_img_2} />
              </div>
              <div
                data-aos="fade-right"
                className={classes.description_container}
              >
                <p>SAVE THE HASSLE</p>
                <h1>Direct communication with property owner</h1>
                <p>
                Through bypassing Property Agents RenttoApp enables transparency and a hasslefree expereince. By bridging the gap between Property Owners and Tenants a smooth and trouble-free process can be initiated.
                  <br/>
                  <br/>
                Other useful tools such as Rental Agreements and KYC guidlines ensure all pertinent matters relevant to renting can be addressed appropriately.

                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.first_feature_section}>
          <div className={classes.content_container}>
            <div className={classes.content_section}>
              <div
                data-aos="fade-right"
                className={classes.card_imgs_container}
              >
                <img src={genuine_bg.src} className={classes.card_img_bg} />
                <img src={genuine_img.src} className={classes.card_img} />
              </div>
              <div
                data-aos="fade-left"
                className={classes.description_container}
              >
                <p>SAVE TIME</p>
                <h1>Genuine & Authentic Ads</h1>
                <p>
                  RenttoApp ensures that all click-baits and fictitious property listings are filtered out before being uploaded on our platforms. Our Algorithams make sure that all listings on RenttoApp are genuine and authentic. Furthermore,  the quality of an Ad is determined by our algoritham and an approriate Ad life is accordingly ascertained.   
                  <br/>
                  <br/>
                  This allows renters to shortlist suitable properties before physically visiting them hence saving valuable time.
                </p>
                <div className={classes.divider} />
                <p>
                “ Modern features such as 360 visualization makes the process of shortlisting properties from a vast pool of genuine properties fast and effective. ”
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
            <h1 data-aos="fade-up">
              Thinking of <span className={classes.orange_text}>listing</span>{" "}
              your property?
            </h1>
            <div
              style={{ marginTop: "100px" }}
              className={classes.content_section}
            >
              <div
                data-aos="fade-right"
                className={classes.card_imgs_container}
              >
                <img
                  src={list_property_img_bg.src}
                  className={classes.card_img_bg}
                />
                <img src={list_property_img.src} className={classes.card_img} />
              </div>
              <div
                data-aos="fade-left"
                className={classes.description_container}
              >
                <p>OPTION 1</p>
                <h1>List it Myself</h1>
                <p>
                  RentoApp gives Property Owners the freedom to list their vacant properties free of cost. A step by step smooth process facilitates the property owners to provide accurate, correct and useful information.
                  <br/>
                  <br/>
                  Video tutorials and Rentto Helpline are available to facilitate the Ad uploading process. 
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
              <div data-aos="fade-left" className={classes.card_imgs_container}>
                <img src={assistance_bg.src} className={classes.card_img_bg} />
                <img src={assistance_img.src} className={classes.card_img} />
              </div>
              <div
                data-aos="fade-right"
                className={classes.description_container}
              >
                <p>
                  OPTION 2{" "}
                  <span className={classes.orange_span}>(RECOMMENDED)</span>
                </p>
                <h1>Rentto Assistance</h1>
                <p>
                Property Owners seeking assistance to upload their property Ads without any difficulty can always reach out to our “Assistance Team”.
                <br/>
                  <br/>
The assistace team provides an on-site service to gather relevant information relating to the property. 360 property visualizations, professional photoshoots and a verified status can not only make the Ad uploading easy but also promises maximized outreach for the property listing.
<br/>
                  <br/>
“the assistance team were very professional and helpful. The Ad listing prepared by them will be useful for me in the furture as well when I re-rent my property again.”
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.first_feature_section}>
          <img src={lower_right_pattern.src} className={classes.right_bg} />

          <div className={classes.content_container}>
            <div className={classes.content_section}>
              <div
                data-aos="fade-right"
                className={classes.card_imgs_container}
              >
                <img src={featured_bg.src} className={classes.card_img_bg} />
                <img src={featured_img.src} className={classes.card_img} />
              </div>
              <div
                data-aos="fade-left"
                className={classes.description_container}
              >
                <p>QUICK AND FAST</p>
                <h1>Featured Property</h1>
                <p>
                Large scale residential or commercial projects that seek complete rental management solutions for their  projects can avail our complete range of services on an annual and reccuring basis.  
                </p>
                <div className={classes.divider} />
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturesSection;
