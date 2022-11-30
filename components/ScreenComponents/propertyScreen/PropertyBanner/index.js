import React, { useEffect, useState } from "react";
import classes from "./propertyBanner.module.css";
import left_triangle_banner from "../../../../public/assets/property_page/left_triangle_banner.png";
import heart_icon_disabled from "../../../../public/assets/property_page/heart_icon_disabled.svg";
import mail_icon from "../../../../public/assets/property_page/mail_icon.svg";
import heart_icon_active from "../../../../public/assets/property_page/heart_icon_active.svg";
import img1 from "../../../../public/assets/property_page/img1.jpeg";
import img2 from "../../../../public/assets/property_page/img2.jpg";
import img3 from "../../../../public/assets/property_page/img3.jpeg";
import img4 from "../../../../public/assets/property_page/img4.jpeg";
import PictureModal from "../../../modal/pictureModal";
import { useRouter } from "next/router";

function PropertyBanner({ listing }) {
  const [isLiked, setIsLiked] = useState(false);
  const [picture, setPicture] = useState();
  const [openPicModal, setOpenPicModal] = useState();

  const router = useRouter();

  // console.log("listing", props);

  // if (!price) {
  //   price = "";
  // }

  const onClosePicModal = async () => {
    setOpenPicModal(false);
  };
  const onOpenPicModal = async () => {
    setOpenPicModal(true);
  };
  const handleLike = async () => {
    setIsLiked(!isLiked);
  };

  return (
    <>
      <div className={classes.banner_container}>
        <PictureModal
          open={openPicModal}
          onCloseModal={onClosePicModal}
          pic={picture}
          isImportedPicture={true}
        />
        <img className={classes.left_triangle} src={left_triangle_banner.src} />

        <div className={classes.content_container}>
          <div className={classes.left_panel}>
            <div className={classes.single_row}>
              <h2>
                Rs{" "}
                {listing
                  ? listing?.Price.toString().replace(
                      /\B(?=(\d{3})+(?!\d))/g,
                      ","
                    )
                  : " "}
                Rs 150,000
                <span>per month</span>
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

            <p className={classes.rooms_info}>
              {listing ? listing.FeatureDescription : " "}
            </p>
            <p className={classes.address}>{listing ? listing?.Name : " "}</p>
          </div>
          <div className={classes.right_panel}>
            <div className={classes.btn_filled}>
              <p>Call</p>
            </div>
            <div
              onClick={() => {
                router.push("/chat");
              }}
              className={classes.btn_empty}
            >
              <p>Message</p>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.photo_grid}>
        <img
          onClick={() => {
            onOpenPicModal();
            setPicture(img1);
          }}
          className={classes.property_img}
          src={img1.src}
        />
        <img
          onClick={() => {
            onOpenPicModal();
            setPicture(img2);
          }}
          className={classes.property_img}
          src={img2.src}
        />
        <img
          onClick={() => {
            onOpenPicModal();
            setPicture(img3);
          }}
          className={classes.property_img}
          src={img3.src}
        />
        <img
          onClick={() => {
            onOpenPicModal();
            setPicture(img4);
          }}
          className={classes.property_img}
          src={img4.src}
        />
      </div>
    </>
  );
}

export default PropertyBanner;