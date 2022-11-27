import React, { useState, useEffect, useRef, 
  // Image
} from "react";
import classes from "./propertyCard.module.css";
import mail from "../../public/assets/property_card_assets/mail_icon_card.png";
import heart from "../../public/assets/property_card_assets/heart_icon_card.png";
import phone from "../../public/assets/property_card_assets/phone_icon_card.png";
import placeholder from "../../public/assets/property_card_assets/placeholder.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

function PropertyCard({adlife, adlifetier, address, price, placeholderimage}) {
  // console.log('pcimage', placeholderimage)
  return (
    <Link href={"/properties/1"}>
      <div className={classes.card_body}>
        <div className={classes.card_image}>
          <div className={classes.add_life}>
            <div className={classes.add_life_inner}>
              <p
                style={{ color: "#00000066" }}
                className={classes.ad_life_text}
              >
                Ad life
              </p>

              <div className={classes.life_progress_bar}>
                <p
                  style={{ color: "white" }}
                  className={classes.ad_life_progress}
                >
                  {adlife}/{adlifetier} Days
                </p>
              </div>
            </div>
          </div>
          <img 
            // src={placeholder.src}
            // src={placeholderimage} 
            // src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
      
            // className={classes.image}
           />
        </div>

        <div className={classes.description_container}>
          <div className={classes.price_row}>
            <p style={{ color: "#008080" }} className={classes.price}>
              {/* Rs {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} */}
              Rs 120,000
              <span
                style={{ color: "#00000040" }}
                className={classes.per_month}
              >
                {" "}
                per month
              </span>
            </p>
            <img src={heart.src} className={classes.heart} />
          </div>
          <p className={classes.bedroom_description}>
            Complete House | 4 Beds | 2 Rooms | 1 Garage
          </p>
          <div className={classes.address_section}>
            <p className={classes.address}>{address}</p>
            <div className={classes.icons_row}>
              <img src={phone.src} className={classes.contact_icon} />
              <img src={mail.src} className={classes.contact_icon} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PropertyCard;
