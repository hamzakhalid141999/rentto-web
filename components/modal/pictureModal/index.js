import React, { useState, useEffect } from "react";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import classes from "./pictureModal.module.css";

function PictureModal({ setOpen, open, onCloseModal, pic, isImportedPicture }) {
  const closeIcon = (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g data-name="Layer 2">
        <g data-name="close">
          <rect
            width="24"
            height="24"
            transform="rotate(180 12 12)"
            opacity="0"
          />
          <path
            fill="white"
            d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"
          />
        </g>
      </g>
    </svg>
  );

  return (
    <Modal
      // closeIcon={closeIcon}
      classNames={{
        overlay: classes.customOverlay,
        modal: classes.filterModal,
      }}
      open={open}
      onClose={onCloseModal}
      center
    >
      <div className={classes.main_container}>
        {pic ? (
          <img
            src={isImportedPicture ? pic.src : URL?.createObjectURL(pic)}
            className={classes.img}
          />
        ) : (
          <></>
        )}
      </div>
    </Modal>
  );
}

export default PictureModal;
