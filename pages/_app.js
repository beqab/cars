import App from "next/app";
import { Provider } from "react-redux";
import React from "react";
import withReduxStore from "../redux/with-redux-store";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    //pageProps that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
    const { Component, pageProps, reduxStore } = this.props;
    console.log(reduxStore, "reduxStorereduxStorereduxStore");
    return (
      <Provider store={reduxStore}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);
