import Head from "next/head";
import Image from "next/image";
import FirstSection from "../components/ScreenComponents/homeScreen/firstSection";
import FeaturesSection from "../components/ScreenComponents/homeScreen/featuresSection";
import styles from "../styles/Home.module.css";
import RenttoPropertySection from "../components/ScreenComponents/homeScreen/renttoPropertiesSection";
import ClientSection from "../components/ScreenComponents/homeScreen/clientSection";
import SubscriptionSection from "../components/ScreenComponents/homeScreen/subscriptionSection";
import DownloadAppSection from "../components/ScreenComponents/homeScreen/downloadAppSection";
import FAQ from "../components/ScreenComponents/homeScreen/faqSection";


import React, { useState, useEffect } from "react";
import { useAuth } from "../contextApi";

export default function Home() {

  // const { user, signIn, removeUser } = useAuth();

  // async function signIn() {
    
  
  //   if (!user) {
  //     try {
  //       // const user = await Auth.signIn(username, password);
  
  //       // console.log(user);
  
  //       // store.dispatch(signInSet(user));
  
  //       console.log('get state');
  //       // console.log(store.getState());
  
  //       return user;
  //     } catch (error) {
  //       console.log('error signing in', error);
  
  //       return null;
  //     }
  //   }
  
  //   // return saved_user;
  // }

  // useEffect(() => {
  //   signIn();
  // }, []);


  return (
    <div className={styles.container}>
      <FirstSection />
      <FeaturesSection />
      {/* <ClientSection /> */}
      <SubscriptionSection />
      <DownloadAppSection />
      <FAQ />
    </div>
  );
}
