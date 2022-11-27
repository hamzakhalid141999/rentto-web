import React, { useState, useEffect } from "react";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import classes from "./reviewProperty.module.css";
import left_triangle_banner from "../../../public/assets/property_page/left_triangle_banner.png";
import heart_icon_disabled from "../../../public/assets/property_page/heart_icon_disabled.svg";
import mail_icon from "../../../public/assets/property_page/mail_icon.svg";
import heart_icon_active from "../../../public/assets/property_page/heart_icon_active.svg";
import PropertyCard from "../../propertyCard";
import kitchen_img from "../../../public/assets/property_page/kitchen.svg";
import solar from "../../../public/assets/property_page/solar.svg";
import drawing from "../../../public/assets/property_page/drawing.svg";
import electricity from "../../../public/assets/property_page/electricity.svg";
import gas from "../../../public/assets/property_page/gas.svg";
import dining from "../../../public/assets/property_page/dining.svg";
import success_icon from "../../../public/assets/property_page/success_icon.svg";
import { ClipLoader } from "react-spinners";
import PictureModal from "../pictureModal";
import { useRouter } from "next/router";

// import "../../../public";
function ReviewProperty({
  setOpen,
  open,
  onCloseModal,
  features,
  address,
  propertyType,
  propertyTypeText,
  propertySize,
  expectedRent,
  bedrooms,
  bathrooms,
  lounge,
  kitchen,
  drawingRoom,
  parking,
  builtIn,
  propertyFinish,
  flooring,
  locality,
  view,
  servantView,
  storeRoom,
  separateDining,
  filesArr,
  city,
  filesArrBathroom,
  filesArrDining,
  furnishingFeatures,
}) {
  const label = { inputProps: { "aria-label": "Color switch demo" } };
  const [rent, setRent] = useState();
  const [isLiked, setIsLiked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isPosted, setIsPosted] = useState(false);
  const [picture, setPicture] = useState();
  const [openPicModal, setOpenPicModal] = useState();

  const router = useRouter();

  const onClosePicModal = async () => {
    setOpenPicModal(false);
  };
  const onOpenPicModal = async () => {
    setOpenPicModal(true);
  };
  const handleLike = async () => {
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    if (open && expectedRent) {
      console.log("Inside UseEffect!!!!!", expectedRent);
      setRent(expectedRent);
    }
  }, [open]);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const handlePostList = async () => {
    setLoading(true);
    await delay(2000);
    setLoading(false);
    setIsPosted(true);
    await delay(2000);
    window.location.reload();
  };

  useEffect(() => {
    // 👇️ scroll to top on page load
    if (open) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [open]);

  return (
    <Modal
      classNames={{
        overlay: classes.customOverlay,
        modal: classes.filterModal,
      }}
      open={open}
      onClose={onCloseModal}
      center
    >
      <div className={classes.listing_message_container}>
        <PictureModal
          open={openPicModal}
          onCloseModal={onClosePicModal}
          pic={picture}
        />

        <>
          <img
            src={success_icon.src}
            style={{ opacity: isPosted ? "1" : "0" }}
            className={classes.success}
          />
          <div className={classes.message_container}>
            <h2>Listing Overview</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div
            style={{ opacity: isPosted ? "0" : "1" }}
            className={classes.btn_container}
          >
            <div
              onClick={() => {
                handlePostList();
              }}
              className={classes.btn_filled}
            >
              <p>{loading ? "POSTING LISTING" : "POST LISTING"}</p>
              <ClipLoader color={"white"} loading={loading} size={17} />
            </div>
          </div>
        </>
      </div>
      <div className={classes.property_section}>
        <>
          <div className={classes.banner_container}>
            <img
              className={classes.left_triangle}
              src={left_triangle_banner.src}
            />

            <div className={classes.content_container}>
              <div className={classes.left_panel}>
                <div className={classes.single_row}>
                  <h2>
                    Rs {expectedRent}
                    <span>per month</span>
                  </h2>

                  <div className={classes.icons_container}>
                    <img
                      onClick={handleLike}
                      src={
                        isLiked
                          ? heart_icon_active.src
                          : heart_icon_disabled.src
                      }
                      style={{ width: "16px" }}
                    />
                    <img src={mail_icon.src} style={{ width: "16px" }} />
                  </div>
                </div>

                <p className={classes.rooms_info}>
                  {bedrooms} Beds, {bathrooms} Bathrooms, {parking} Garage
                </p>
                <p className={classes.address}>{address}</p>
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
            {filesArr?.map((pic, index) => (
              <img
                onClick={() => {
                  onOpenPicModal();
                  setPicture(pic);
                }}
                key={index}
                className={classes.property_img}
                src={URL.createObjectURL(pic)}
              />
            ))}
            {filesArrDining?.map((pic, index) => (
              <img
                onClick={() => {
                  onOpenPicModal();
                  setPicture(pic);
                }}
                key={index}
                className={classes.property_img}
                src={URL.createObjectURL(pic)}
              />
            ))}
            {filesArrBathroom?.map((pic, index) => (
              <img
                onClick={() => {
                  onOpenPicModal();
                  setPicture(pic);
                }}
                key={index}
                className={classes.property_img}
                src={URL.createObjectURL(pic)}
              />
            ))}
          </div>
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
                  <textarea placeholder="Type description here.." />
                  {/* <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p> */}

                  <div className={classes.facilities_container}>
                    <div className={classes.single_facility}>
                      <img src={kitchen_img.src} style={{ width: "12px" }} />
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>

                  <iframe
                    width="100%"
                    height="350"
                    frameborder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  ></iframe>
                </div>

                <div className={classes.amenities_container}>
                  <h2>Amenities</h2>
                  <p className={classes.amenities_description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>

                  <div className={classes.tags_container}>
                    {features?.map((feature, index) => (
                      <div key={index} className={classes.tag}>
                        <p>{feature}</p>
                      </div>
                    ))}
                    {furnishingFeatures?.map((feature, index) => (
                      <div key={index} className={classes.tag}>
                        <p>{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={classes.nearby_places_container}>
                  <h2>Near-by Places</h2>
                  <p className={classes.nearby_places_description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
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
        </>
      </div>
    </Modal>
  );
}

export default ReviewProperty;
