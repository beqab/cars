import React, { Component } from "react";
import Head from "next/head";

export class BaceLayout extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
            rel="stylesheet"
            crossOrigin="anonymous"
            integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
          ></link>
        </Head>

        {this.props.children}
      </>
    );
  }
}

export default BaceLayout;
