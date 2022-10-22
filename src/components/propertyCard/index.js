import React from "react";
import classes from "./propertyCard.module.css";
import mail from "../../public/assets/property_card_assets/mail_icon_card.png";
import heart from "../../public/assets/property_card_assets/heart_icon_card.png";
import phone from "../../public/assets/property_card_assets/phone_icon_card.png";
import placeholder from "../../public/assets/property_card_assets/placeholder.png";

function PropertyCard() {
  return (
    <div className={classes.card_body}>
      <div className={classes.card_image}>
        <div className={classes.add_life}>
          <div className={classes.add_life_inner}>
            <p style={{ color: "#00000066" }} className={classes.ad_life_text}>
              Ad life
            </p>

            <div className={classes.life_progress_bar}>
              <p
                style={{ color: "white" }}
                className={classes.ad_life_progress}
              >
                20/60 Days
              </p>
            </div>
          </div>
        </div>
        <img src={placeholder.src} className={classes.image} />
      </div>

      <div className={classes.description_container}>
        <div className={classes.price_row}>
          <p style={{ color: "#008080" }} className={classes.price}>
            Rs 1500,000
            <span style={{ color: "#00000040" }} className={classes.per_month}>
              {" "}
              per month
            </span>
          </p>
          <img src={heart.src} className={classes.heart} />
        </div>
        <p className={classes.bedroom_description}>4 Beds, 2 Rooms, 1 Garage</p>
        <div className={classes.address_section}>
          <p className={classes.address}>Park View, Bani Gala, Islamabad</p>
          <div className={classes.icons_row}>
            <img src={phone.src} className={classes.contact_icon} />
            <img src={mail.src} className={classes.contact_icon} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
