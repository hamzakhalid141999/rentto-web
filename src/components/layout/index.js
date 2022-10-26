import React from "react";
import classes from "./layout.module.css";
import Head from "next/head";
import Navbar from "../navbar";
import Footer from "../footer";

function Layout({ children }) {
  return (
    <div className={classes.container}>
      <Navbar />
      <div className={classes.main}>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
