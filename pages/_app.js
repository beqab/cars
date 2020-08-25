import App from "next/app";
import { Provider } from "react-redux";
import React from "react";
import withReduxStore from "../redux/with-redux-store";
import { getCookesFromReq } from "../helpers/utils";
import Cookies from "js-cookie";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api/";
// axios.defaults.baseURL = "https://app.gcar.ge/api/";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    if (!process.browser) {
      const currentTime = Date.now() / 1000;
      const expiresAt = getCookesFromReq(ctx.req, "expiresAt");
      if (expiresAt > currentTime) {
        let user = getCookesFromReq(ctx.req, "user");
        const token = getCookesFromReq(ctx.req, "token");
        if (user && token) {
          user = JSON.parse(user);
          ctx.reduxStore.dispatch({
            type: "LOGIN_USER",
            payload: { user, token },
          });
        }
      }
    }

    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  async componentDidMount() {
    let token = Cookies.get("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
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
