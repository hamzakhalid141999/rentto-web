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
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
// import logo_big from "../../public/assets/login_screen_assets/logo.png";

import logo_big from "../../public/assets/homescreen/rentto_logo.svg";

import video_tutorials from "../../public/assets/login_screen_assets/video_tutorials.png";
import helpline from "../../public/assets/login_screen_assets/helpline.png";
import list_property from "../../public/assets/login_screen_assets/list_property.png";
import { DarkModeSwitch } from "react-toggle-dark-mode";

import {Auth} from "aws-amplify";
import { useAuth } from "../../contextApi";
import { getUser, listUsers } from "../../graphql/queries";
import { createUser, deleteUser } from "../../graphql/mutations";

// import { useAuth } from "../../contextApi";

function SignUp() {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(1);
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const [firstName, setFirstName] = useState("Muhammad");
  const [lastName, setLastName] = useState("Nauman");

  const [email, setEmail] = useState("bijile9210@lubde.com");
  const [password, setPassword] = useState("Rentto@123");
  const [confirmPass, setConfirmPass] = useState("Rentto@123");

  const [phoneNo, setPhoneNo] = useState("923315882990");
  const [otp, setOtp] = useState();
  const handleChange = (otp) => setOtp(otp);
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

  const handleGoBack = async () => {
    if (activeStep === 1) {
    } else {
      setActiveStep(activeStep - 1);
    }
  };

  const handleGotoScreen = async (screenNo) => {
    setActiveStep(screenNo);
  };

  async function resendConfirmationCode() {
    try {
        await Auth.resendSignUp(email);
        console.log('code resent successfully');
    } catch (err) {
        console.log('error resending code: ', err);
    }
  }

  const handleResendOtp = async () => {
    loadingToast("Sending OTP");
    await delay(1000);
    resendConfirmationCode();
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
    } else if (password !== confirmPass) {
      error("Passwords don't match")
      return false;
    }

    setLoading(true);
    await delay(1000);
    setLoading(false);
    setActiveStep(3);
  };

  async function confirmSignUp() {
    try {
      await Auth.confirmSignUp(email, otp);

      const local_user = await Auth.signIn(email, password);

        console.log('Post OTP User:', local_user);

        signIn(local_user);
        router.push("/");
      /*
              // upload user to graphQL
        // get Auth user
        const authUser = await Auth.currentAuthenticatedUser({
          bypassCache: true,
        });

        console.log('OOser', authUser)

        // query the database using Auth user id (sub)
        const userData = await API.graphql(
          graphqlOperation(getUser, { id: authUser.attributes.sub })
        );

        // query the database using Auth user id (sub)
        const listData = await API.graphql(
          graphqlOperation(listUsers)
        );

        console.log('UD', userData.data.getUser);

        if (userData.data.getUser && !userData.data.getUser._deleted) {
          console.log("User already exists in DB");
          return;
        }
        // if there is no users in db, create one
        const newUser = {
          id: authUser.attributes.sub,
          name: authUser.attributes.email,
          status: "Hey, I am using WhatsApp",
        };

        // import { API } from "aws-amplify";
        // import * as mutations from './graphql/mutations';

        // const todoDetails = {
        //   id: authUser.attributes.sub,
        // };

        // const deletedTodo = await API.graphql({ query: deleteUser, variables: {input: todoDetails}});

        await API.graphql(
          graphqlOperation(createUser, { input: newUser })
        );

        const local_user = await Auth.signIn(email, password);

        console.log('Post OTP User:', local_user);

        */
    
    } catch (error) {
        console.log('error confirming sign up', error);
    }
  }

  const handleProceedStepThree = async () => {
    if (!phoneNo) {
      error("Enter phone number");
      return;
    }

    console.log(firstName, lastName, email, phoneNo);
    var phone_number = '+'+phoneNo;
    var username = email;
    // var password = 'Rentto@123'



    if (!otpSent) {
      setLoading(true);
      await delay(1000);

      try {

        const { user } = await Auth.signUp({
            username,
            password,
            attributes: {
                email,          // optional
                phone_number,   // optional - E.164 number convention
                // other custom attributes 
            },
            autoSignIn: { // optional - enables auto sign in after user is confirmed
                enabled: true,
            }
        });


        console.log(user);



        

        handleSendOpt();
      } catch (error_) {
          error(error_.toString())
          console.log('error signing up:', error_.toString());
          setLoading(false);
          return false
      }
      
      
    } else {
      if (otp?.length === 6) {
        setLoading(true);
        await delay(1000);
        setLoading(false);

        // Load up otp for signup
        confirmSignUp();

        success("Account created successfully");
        await delay(1200);


        // router.push("/login");
        
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

  const handleSignup = async () => {
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
      await delay(1000);

      // const local_user = await Auth.signIn(email, password);
      // console.log(local_user);
      // signIn(local_user);

      // console.log(user);

      setLoading(false);
      // router.push("/");
    } catch (error_) {
      console.log("error signing in", error_);
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

              <div 
              onClick={handleProceedStepOne} 
              // onClick={handleSignup} 
              className="orange_btn">
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

                <label>Password</label>
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Enter your Email Address"
                  type="password"
                  className={classes.input_field}
                  value={password}
                />

                <label>Confirm Password</label>
                <input
                  onChange={(e) => {
                    setConfirmPass(e.target.value);
                  }}
                  placeholder="Enter your Email Address"
                  type="password"
                  className={classes.input_field}
                  value={confirmPass}
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
                      // onClick={handleSignup}
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
                        Enter the 6-digit OTP code that has been sent from SMS
                        to complete your account registration.
                      </label>
                      <OtpInput
                        value={otp}
                        onChange={handleChange}
                        numInputs={6}
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
                      Didn&#39;t recieve OTP?
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
