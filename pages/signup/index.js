import React from "react";
import classes from "./signup.module.css";
import upper_triangle from "../../public/assets/login_screen_assets/upper_triangle.png";
import lower_triangle from "../../public/assets/login_screen_assets/lower_triangle.png";
import logo from "../../public/assets/navbar_assets/logo.png";
import google_login_icon from "../../public/assets/login_screen_assets/google_login_icon.png";
import Link from "next/link";

function SignUp() {
  return (
    <div className={classes.login_screen_section}>
      <div className={classes.carousel_section}>
        <img src={upper_triangle.src} className={classes.upper_triangle} />
        <img src={lower_triangle.src} className={classes.lower_triangle} />
      </div>
      <div className={classes.content_section}>
        <Link href={"/"}>
          <img src={logo.src} className={classes.logo} />
        </Link>

        <div className={classes.content_container}>
          <p className={classes.bread_crumbs}>
            Welcome {">"} <Link href={"/login"}> Sign In </Link>
            {">"}
            <span> Sign Up</span>
          </p>
          <h2 className={classes.heading}>
            <span>Create</span> An Account
          </h2>

          <div className={classes.input_field_contaier}>
            <label>First Name</label>
            <input
              placeholder="Enter your First Name"
              type="email"
              className={classes.input_field}
            />
          </div>
          <div className={classes.input_field_contaier}>
            <label>Last Name</label>
            <input
              placeholder="Enter your Last Name"
              type="email"
              className={classes.input_field}
            />
          </div>

          <div className="orange_btn">
            <p>PROCEED</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
