import React from "react";
import classes from "./propertyInfo.module.css";
import kitchen from "../../../../public/assets/property_page/kitchen.svg";
import solar from "../../../../public/assets/property_page/solar.svg";
import drawing from "../../../../public/assets/property_page/drawing.svg";
import electricity from "../../../../public/assets/property_page/electricity.svg";
import gas from "../../../../public/assets/property_page/gas.svg";
import dining from "../../../../public/assets/property_page/dining.svg";
import PropertyCard from "../../../propertyCard";

function PropertyInfo() {
  return (
    <div className={classes.property_info_section}>
      <div className={classes.content_section}>
        <div className={classes.left_panel}>
          <div className={classes.tags_container}>
            <div className={classes.tag}>
              <p>Full House</p>
            </div>
            <div className={classes.tag}>
              <p>Microwave</p>
            </div>
            <div className={classes.tag}>
              <p>Upper Portion</p>
            </div>
            <div className={classes.tag}>
              <p>Basement</p>
            </div>
            <div className={classes.tag}>
              <p>Two Portion</p>
            </div>
            <div className={classes.tag}>
              <p>Apartments</p>
            </div>
            <div className={classes.tag}>
              <p>Farmhouse</p>
            </div>
            <div className={classes.tag}>
              <p>Elevators</p>
            </div>
            <div className={classes.tag}>
              <p>Gymnasium / Yoga Area</p>
            </div>
          </div>

          <div className={classes.description_container}>
            <h2>Description</h2>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <div className={classes.facilities_container}>
              <div className={classes.single_facility}>
                <img src={kitchen.src} style={{ width: "12px" }} />
                <p>Kitchen</p>
              </div>

              <div className={classes.single_facility}>
                <img src={dining.src} style={{ width: "12px" }} />
                <p>Dining Room</p>
              </div>

              <div className={classes.single_facility}>
                <img src={gas.src} style={{ width: "12px" }} />
                <p>Gas</p>
              </div>

              <div className={classes.single_facility}>
                <img src={electricity.src} style={{ width: "12px" }} />
                <p>Elecricity</p>
              </div>

              <div className={classes.single_facility}>
                <img src={drawing.src} style={{ width: "12px" }} />
                <p>Drawing Room</p>
              </div>

              <div className={classes.single_facility}>
                <img src={solar.src} style={{ width: "12px" }} />
                <p>Solar Panel</p>
              </div>
            </div>
          </div>

          <div className={classes.location_container}>
            <h2>Location</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <iframe
              width="100%"
              height="350"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>

          <div className={classes.amenities_container}>
            <h2>Amneties</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className={classes.tags_container}>
              <div className={classes.tag}>
                <p>Full House</p>
              </div>
              <div className={classes.tag}>
                <p>Microwave</p>
              </div>
              <div className={classes.tag}>
                <p>Upper Portion</p>
              </div>
              <div className={classes.tag}>
                <p>Basement</p>
              </div>
              <div className={classes.tag}>
                <p>Two Portion</p>
              </div>
              <div className={classes.tag}>
                <p>Apartments</p>
              </div>
              <div className={classes.tag}>
                <p>Farmhouse</p>
              </div>
              <div className={classes.tag}>
                <p>Elevators</p>
              </div>
              <div className={classes.tag}>
                <p>Two Portion</p>
              </div>
              <div className={classes.tag}>
                <p>Apartments</p>
              </div>
              <div className={classes.tag}>
                <p>Farmhouse</p>
              </div>
              <div className={classes.tag}>
                <p>Elevators</p>
              </div>
              <div className={classes.tag}>
                <p>Gymnasium / Yoga Area</p>
              </div>
            </div>
          </div>

          <div className={classes.nearby_places_container}>
            <h2>Near-by Places</h2>
            <p className={classes.nearby_places_description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className={classes.properties_container}>
              {/* <div className={classes.overlay_right} /> */}
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
            </div>
          </div>
        </div>
        <div className={classes.right_panel}>
          <div className={classes.contact_now_container}>
            <h2>Contact Now</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

            <div className={classes.btn_filled}>
              <p>+92 3315810101</p>
            </div>

            <div className={classes.btn_empty}>
              <p>Message</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyInfo;
