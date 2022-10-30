import React from "react";
import classes from "./subscriptionSection.module.css";
import corner_green_blob_2 from "../../../../public/assets/homescreen/corner_green_blob_2.png";
import InputField from "../../../inputField";

function SubscriptionSection() {
  return (
    <div className={classes.subscription_section}>
      <img src={corner_green_blob_2.src} className={classes.green_blob} />
      <div className={classes.content_section}>
        <div className={classes.left_panel}>
          <p>GET CONNECTED</p>
          <h2>Get Into The World Of Hassle Free Renting</h2>
        </div>
        <div className={classes.right_panel}>
          <div className={classes.single_row}>
            <InputField label={"Email"} />
            <div className={classes.get_started_btn}>
              <p>Get Started</p>
            </div>
          </div>
          <p>
            Already a member? <span className={classes.span}>Sign In</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SubscriptionSection;
