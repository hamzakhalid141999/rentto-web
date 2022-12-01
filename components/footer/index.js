import React from "react";
import classes from "./footer.module.css";
import footer_orange_blob from "../../public/assets/footer_assets/footer_orange_blob.png";
import mail_icon from "../../public/assets/footer_assets/footer_mail.png";
import phone_icon from "../../public/assets/footer_assets/footer_phone.png";
import logo from "../../public/assets/navbar_assets/logo.png";

function Footer() {
  return (
    <div className={classes.footer_body}>
      <img src={footer_orange_blob.src} className={classes.orange_blob} />
      <div className={classes.content_section}>
        <div className={classes.upper_section}>
          
          <div className={classes.col}>
            {/* <img src={logo.src} className={classes.logo} />
            <div className={classes.single_row}>
              <img src={mail_icon.src} classes={classes.icon} />
              <p>help@rentto.com</p>
            </div>
            <div className={classes.single_row}>
              <img src={phone_icon.src} classes={classes.icon} />
              <p>+92 342 1234554</p>
            </div> */}
          </div>

          <div className={classes.col}>
            <h3>Link</h3>
            <p>Home</p>
            <p>About Us</p>
            <p>Contact</p>
            <p>Blogs</p>
          </div>
          <div className={classes.col}>
            <div className={classes.col}>
              <h3>Legal</h3>
              <p>Terms Of Use</p>
              <p>Privacy Policy</p>
              <p>Cookie Policy</p>
            </div>
          </div>
          <div className={classes.col}>
            <h3>Newsletter</h3>
            <p>Stay Up To Date</p>
            {/* <div className={classes.subscription_panel}>
              <input placeholder="Your email" className={classes.input_field} />
              <div className={classes.get_started_btn}>
                <p>Get Started</p>
              </div>
            </div> */}
          </div>
        </div>
        <div className={classes.divider} />
        <div className={classes.lower_section}>
          <p>Copyright 2022 PropTech inc. all rights reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
