import React, { useState, useEffect } from "react";
import classes from "./login.module.css";
import upper_triangle from "../../public/assets/login_screen_assets/upper_triangle.png";
import lower_triangle from "../../public/assets/login_screen_assets/lower_triangle.png";
import google_login_icon from "../../public/assets/login_screen_assets/google_login_icon.png";
import Link from "next/link";
import back_arrow from "../../public/assets/login_screen_assets/back_arrow.svg";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import logo_big from "../../public/assets/login_screen_assets/logo.png";
import toast, { Toaster } from "react-hot-toast";
import video_tutorials from "../../public/assets/login_screen_assets/video_tutorials.png";
import helpline from "../../public/assets/login_screen_assets/helpline.png";
import list_property from "../../public/assets/login_screen_assets/list_property.png";
import Router, { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";
import { DarkModeSwitch } from "react-toggle-dark-mode";

import { Auth } from 'aws-amplify';
import { useAuth } from "../../contextApi";

function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [darkTheme, setDarkTheme] = useState(undefined);
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const { user, signIn, removeUser } = useAuth();

  // useEffect(() => {
  //   document.documentElement.setAttribute("data-theme", "light");
  // }, []);

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        // Set value of  darkmode to dark
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        // Set value of  darkmode to light
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [darkTheme]);

  const handleToggle = () => {
    setDarkTheme(!darkTheme);
  };

  const error = (msg) => {
    toast.error(msg, {
      style: {
        background: "white",
        color: "red",
        border: "1px solid #ff9000",
      },
      position: "bottom-right",
    });
  };

  const handleLogin = async () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (!email) {
      error("Enter Email");
      return;
    } else if (reg.test(email) === false) {
      error("Enter a valid email address");
      return false;
    } else if (!password) {
      error("Enter password");
      return false;
    }

    
    try {
        setLoading(true);
        // await delay(1000);
      
        const local_user = await Auth.signIn(email, password);
        console.log(local_user);
        signIn(local_user);

        console.log(user);
        
        setLoading(false);
        router.push("/");

    } catch (error_) {
        console.log('error signing in', error_);
        // error(error_);

        setLoading(false);
    }
    
  };

  return (
    <div className={classes.login_screen_section}>
      <Toaster />
      <div className={classes.carousel_section}>
        <img src={upper_triangle.src} className={classes.upper_triangle} />
        <img src={lower_triangle.src} className={classes.lower_triangle} />
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={2}
          isPlaying
          renderDots
          style={{ width: "600px" }}
        >
          <Slider renderDots>
            <Slide index={0}>
              <div className={classes.single_slide}>
                <img src={logo_big.src} className={classes.logo_big} />
                <h1>Lorem Ipsum Dolor Set</h1>
                <p>Lorem Ipsum Dolor Set</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            </Slide>
            <Slide index={1}>
              <div className={classes.single_slide}>
                <h1>Rentto Assistance</h1>

                <p>Lorem Ipsum Dolor Set</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <div className={classes.imgs_container}>
                  <img src={list_property.src} className={classes.card_imgs} />
                  <img
                    src={video_tutorials.src}
                    className={classes.card_imgs}
                  />
                  <img src={helpline.src} className={classes.card_imgs} />
                </div>
              </div>
            </Slide>
          </Slider>
        </CarouselProvider>
      </div>
      <div className={classes.content_section}>
        <DarkModeSwitch
          checked={darkTheme}
          onChange={handleToggle}
          size={30}
          className={classes.darkmode_btn}
        />
        <img
          // onClick={handleGoBack}
          src={back_arrow.src}
          className={classes.back_arrow}
        />
        <Link href={"/"}>
          <img src={logo_big.src} className={classes.logo} />
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
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter your E-mail Address"
              type="email"
              className={classes.input_field}
            />
          </div>
          <div className={classes.input_field_contaier}>
            <label>Password</label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Enter your Password"
              type="password"
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

          <div onClick={handleLogin} className="orange_btn">
            <p>PROCEED</p>
            <ClipLoader color={"white"} loading={loading} size={17} />
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
