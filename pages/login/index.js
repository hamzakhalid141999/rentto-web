import React from "react";
import classes from "./login.module.css";
import upper_triangle from "../../public/assets/login_screen_assets/upper_triangle.png";
import lower_triangle from "../../public/assets/login_screen_assets/lower_triangle.png";
import logo from "../../public/assets/navbar_assets/logo.png";
import google_login_icon from "../../public/assets/login_screen_assets/google_login_icon.png";
import Link from "next/link";
import back_arrow from "../../public/assets/login_screen_assets/back_arrow.svg";

function Login() {
  return (
    <div className={classes.login_screen_section}>
      <div className={classes.carousel_section}>
        <img src={upper_triangle.src} className={classes.upper_triangle} />
        <img src={lower_triangle.src} className={classes.lower_triangle} />
      </div>
      <div className={classes.content_section}>
        <img
          // onClick={handleGoBack}
          src={back_arrow.src}
          className={classes.back_arrow}
        />
        <Link href={"/"}>
          <img src={logo.src} className={classes.logo} />
        </Link>

        <div className={classes.content_container}>
          <p className={classes.bread_crumbs}>
            Welcome {">"} <span>Sign In</span>
          </p>
          <h2 className={classes.heading}>
            <span>Welcome</span> Back
          </h2>

          <div className={classes.input_field_contaier}>
            <label>Email</label>
            <input
              placeholder="Enter your E-mail Address"
              type="email"
              className={classes.input_field}
            />
          </div>
          <div className={classes.input_field_contaier}>
            <label>Password</label>
            <input
              placeholder="Enter your Password"
              type="email"
              className={classes.input_field}
            />
          </div>
          <div className={classes.single_row}>
            <div className={classes.checkbox_row}>
              <input type={"checkbox"} className={classes.checkbox} />
              <p>Remember Me</p>
            </div>

            <p className={classes.forgot_password}>Forgot Password?</p>
          </div>

          <div className={classes.login_btn}>
            <p>LOGIN</p>
          </div>
          <div className={classes.login_with_google}>
            <img src={google_login_icon.src} className={classes.btn_icon} />
            <p>Login With Google</p>
          </div>
          <label style={{ marginTop: "60px" }}>Don't have an account?</label>
          <Link href={"/signup"}>
            <p className={classes.signup_text}>SIGNUP</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
