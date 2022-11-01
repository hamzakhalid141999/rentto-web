import React, { useState, useEffect } from "react";
import classes from "./layout.module.css";
import Head from "next/head";
import Navbar from "../navbar";
import Footer from "../footer";
import { useRouter } from "next/router";

function Layout({ children }) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState();

  useEffect(() => {
    if (router.pathname) {
      const page = router.pathname.split("/");
      setCurrentPage(page[1]);
    }
  }, [router.pathname]);

  console.log(router);

  return (
    <div className={classes.container}>
      {currentPage === "login" || currentPage === "signup" ? (
        <div className={classes.main}>{children}</div>
      ) : (
        <>
          <Navbar />
          <div className={classes.main}>{children}</div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default Layout;
