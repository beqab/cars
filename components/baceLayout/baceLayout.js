import React, { Component } from "react";
import Head from "next/head";
import Header from "./header/header";
import Footer from "./Footer/Footer";

const BaceLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>მანქანის გაქირავება ქირაობა დღიურად</title>
        <meta http-equiv="content-language" content="geo"></meta>
        <meta
          name="description"
          content="ატომობილის გაქირავება, ავტომობილის ქირაობა, მანაქნის გაქირავება , მანქანის ქირაობა, მანქანით მომსახურება, ქირავდება ავრომობილი , ავტომობილი დღიურად, ფასი დღიურად"
        />
        <meta
          name="keywords"
          content="მანქანა, ავტომობილი,  ავტომობილის ქირაობა,  მანაქნის გაქირავება, გაქირავება, ავტომობილის გაქირავება, მანქანის გაქირავება, მანქანით მომსახურება, manqanis qiraoba, manqanis gaqiraveba, avtomobili, maqnanit momsaxureba, fasi , ფასი, დღიურად, dgiurad "
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
          rel="stylesheet"
          crossOrigin="anonymous"
          integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
        ></link>
      </Head>
      <Header></Header>
      {children}

      <Footer></Footer>
    </>
  );
};

export default BaceLayout;
