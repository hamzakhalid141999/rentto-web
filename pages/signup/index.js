import React, { useState, useEffect } from "react";
import classes from "./signup.module.css";
import upper_triangle from "../../public/assets/login_screen_assets/upper_triangle.png";
import lower_triangle from "../../public/assets/login_screen_assets/lower_triangle.png";
import logo from "../../public/assets/navbar_assets/logo.png";
import google_login_icon from "../../public/assets/login_screen_assets/google_login_icon.png";
import Link from "next/link";
import { ClipLoader } from "react-spinners";
import toast, { Toaster } from "react-hot-toast";
import back_arrow from "../../public/assets/login_screen_assets/back_arrow.svg";
import Router, { useRouter } from "next/router";
import OtpInput from "react-otp-input";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import logo_big from "../../public/assets/login_screen_assets/logo.png";

import video_tutorials from "../../public/assets/login_screen_assets/video_tutorials.png";
import helpline from "../../public/assets/login_screen_assets/helpline.png";
import list_property from "../../public/assets/login_screen_assets/list_property.png";

function SignUp() {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(1);
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [otp, setOtp] = useState();
  const handleChange = (otp) => setOtp(otp);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
  }, []);

  const handleGoBack = async () => {
    if (activeStep === 1) {
    } else {
      setActiveStep(activeStep - 1);
    }
  };

  const handleGotoScreen = async (screenNo) => {
    setActiveStep(screenNo);
  };

  const handleResendOtp = async () => {
    loadingToast("Sending OTP");
    await delay(1000);
    success("OTP Sent");
  };

  const handleSendOpt = async () => {
    setOtpSent(true);
    success("OTP Sent to: " + phoneNo);
  };

  const handleProceedStepOne = async () => {
    if (!firstName) {
      error("Enter first name");
      return;
    } else if (!lastName) {
      error("Enter last name");
      return;
    }
    setLoading(true);
    await delay(1000);
    setLoading(false);
    setActiveStep(2);
  };
  const handleProceedStepTwo = async () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (!email) {
      error("Enter Email");
      return;
    } else if (reg.test(email) === false) {
      error("Enter a valid email address");
      return false;
    }
    setLoading(true);
    await delay(1000);
    setLoading(false);
    setActiveStep(3);
  };
  const handleProceedStepThree = async () => {
    if (!phoneNo) {
      error("Enter phone number");
      return;
    }
    if (!otpSent) {
      setLoading(true);
      await delay(1000);
      setLoading(false);
      handleSendOpt();
    } else {
      if (otp?.length === 4) {
        setLoading(true);
        await delay(1000);
        setLoading(false);
        success("Account created successfully");
        await delay(1200);
        router.push("/login");
        setOtpSent(false);
      } else {
        error("Enter valid OTP");
      }
    }
  };

  const success = (msg) => {
    toast.success(msg, {
      style: {
        background: "white",
        color: "#ff9000",
        border: "1px solid #ff9000",
      },
      position: "bottom-right",
    });
  };

  const loadingToast = (msg) => {
    toast.loading(msg, {
      style: {
        background: "white",
        color: "#ff9000",
        border: "1px solid #ff9000",
      },
      duration: 900,
      position: "bottom-right",
    });
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
        <img
          onClick={handleGoBack}
          src={back_arrow.src}
          className={classes.back_arrow}
        />
        <Link href={"/"}>
          <img src={logo_big.src} className={classes.logo} />
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

          <div className={classes.stepper_container}>
            <div
              style={{ marginLeft: "0px" }}
              onClick={() => {
                handleGotoScreen(1);
              }}
              className={
                activeStep > 1
                  ? classes.step_done
                  : activeStep === 1 && classes.step_active
              }
            >
              <p>1</p>
            </div>
            <div className={classes.dashed_line} />
            <div
              onClick={() => {
                if (activeStep > 2) {
                  handleGotoScreen(2);
                }
              }}
              className={
                activeStep > 2
                  ? classes.step_done
                  : activeStep === 2
                  ? classes.step_active
                  : activeStep < 2 && classes.step_inactive
              }
            >
              <p>2</p>
            </div>
            <div className={classes.dashed_line} />

            <div
              onClick={() => {
                if (activeStep > 3) {
                  handleGotoScreen(3);
                }
              }}
              className={
                activeStep > 3
                  ? classes.step_done
                  : activeStep === 3
                  ? classes.step_active
                  : activeStep < 3 && classes.step_inactive
              }
            >
              <p>3</p>
            </div>
          </div>

          {activeStep === 1 ? (
            <>
              <div className={classes.input_field_contaier}>
                <label>First Name</label>
                <input
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  placeholder="Enter your First Name"
                  type="text"
                  className={classes.input_field}
                  value={firstName}
                />
              </div>
              <div className={classes.input_field_contaier}>
                <label>Last Name</label>
                <input
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  placeholder="Enter your Last Name"
                  type="text"
                  className={classes.input_field}
                  value={lastName}
                />
              </div>

              <div onClick={handleProceedStepOne} className="orange_btn">
                <p>PROCEED</p>
                <ClipLoader color={"white"} loading={loading} size={17} />
              </div>
            </>
          ) : activeStep === 2 ? (
            <>
              <div className={classes.input_field_contaier}>
                <label>Email Address</label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Enter your Email Address"
                  type="email"
                  className={classes.input_field}
                  value={email}
                />
              </div>

              <div onClick={handleProceedStepTwo} className="orange_btn">
                <p>PROCEED</p>
                <ClipLoader color={"white"} loading={loading} size={17} />
              </div>
            </>
          ) : (
            activeStep === 3 && (
              <>
                {!otpSent ? (
                  <>
                    <div className={classes.input_field_contaier}>
                      <label>Phone Number</label>
                      <input
                        onChange={(e) => {
                          const reg = /^-?\d*\.?\d*$/;
                          if (reg.test(e.target.value)) {
                            setPhoneNo(e.target.value);
                          }
                        }}
                        placeholder="Enter your Phone Number"
                        type="text"
                        className={classes.input_field}
                        value={phoneNo}
                      />
                    </div>

                    <div
                      onClick={handleProceedStepThree}
                      className="orange_btn"
                    >
                      <p>PROCEED</p>
                      <ClipLoader color={"white"} loading={loading} size={17} />
                    </div>
                  </>
                ) : (
                  <>
                    <div className={classes.input_field_contaier}>
                      <h2>{phoneNo ? phoneNo : "0331 1344123"}</h2>
                      <label style={{ marginBottom: "25px" }}>
                        Enter the 5-digit ITP code that has been sent from SMS
                        to complete your account registration.
                      </label>
                      <OtpInput
                        value={otp}
                        onChange={handleChange}
                        numInputs={4}
                        separator={<span></span>}
                        // containerStyle={classes.otp_input_single}
                        inputStyle={classes.otp_input_single}
                        focusStyle={classes.opt_input_focused}
                      />
                    </div>

                    <div
                      onClick={handleProceedStepThree}
                      className="orange_btn"
                    >
                      <p>SUBMIT OTP</p>
                      <ClipLoader color={"white"} loading={loading} size={17} />
                    </div>

                    <label style={{ marginTop: "60px" }}>
                      Didn't recieve OTP?
                    </label>
                    <p
                      onClick={handleResendOtp}
                      className={classes.signup_text}
                    >
                      RESEND OTP
                    </p>
                  </>
                )}
              </>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default SignUp;
