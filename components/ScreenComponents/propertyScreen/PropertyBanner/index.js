import React, { useState } from "react";
import classes from "./propertyBanner.module.css";
import left_triangle_banner from "../../../../public/assets/property_page/left_triangle_banner.png";
import heart_icon_disabled from "../../../../public/assets/property_page/heart_icon_disabled.svg";
import mail_icon from "../../../../public/assets/property_page/mail_icon.svg";
import heart_icon_active from "../../../../public/assets/property_page/heart_icon_active.svg";
import img1 from "../../../../public/assets/property_page/img1.jpeg";
import img2 from "../../../../public/assets/property_page/img2.jpg";
import img3 from "../../../../public/assets/property_page/img3.jpeg";
import img4 from "../../../../public/assets/property_page/img4.jpeg";

function PropertyBanner() {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = async () => {
    setIsLiked(!isLiked);
  };

  return (
    <>
      <div className={classes.banner_container}>
        <img className={classes.left_triangle} src={left_triangle_banner.src} />

        <div className={classes.content_container}>
          <div className={classes.left_panel}>
            <div className={classes.single_row}>
              <h2>
                Rs 150,0000<span>per month</span>
              </h2>

              <div className={classes.icons_container}>
                <img
                  onClick={handleLike}
                  src={
                    isLiked ? heart_icon_active.src : heart_icon_disabled.src
                  }
                  style={{ width: "16px" }}
                />
                <img src={mail_icon.src} style={{ width: "16px" }} />
              </div>
            </div>

            <p className={classes.rooms_info}>4 Beds, 2 Rooms, 1 Garage</p>
            <p className={classes.address}>Park View, Bani Gala, Islamabad</p>
          </div>
          <div className={classes.right_panel}>
            <div className={classes.btn_filled}>
              <p>Call</p>
            </div>
            <div className={classes.btn_empty}>
              <p>Message</p>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.photo_grid}>
        <img className={classes.property_img} src={img1.src} />
        <img className={classes.property_img} src={img2.src} />
        <img className={classes.property_img} src={img3.src} />
        <img className={classes.property_img} src={img4.src} />
      </div>
    </>
  );
}

export default PropertyBanner;
