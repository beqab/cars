import App from "next/app";
import { Provider } from "react-redux";
import React from "react";
import withReduxStore from "../redux/with-redux-store";
import { getCookesFromReq } from "../helpers/utils";
import Cookies from "js-cookie";
import axios from "axios";
import { hotjar } from "react-hotjar";
hotjar.initialize(2175859, 6);
// axios.defaults.baseURL = "http://localhost:5000/api/";
axios.defaults.baseURL = "https://gcarnode.herokuapp.com/api/";
// : "http://localhost:5000/api/";
axios.defaults.baseURL = "http://localhost:5000/api/";

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

    // (function (h, o, t, j, a, r) {
    //   h.hj =
    //     h.hj ||
    //     function () {
    //       (h.hj.q = h.hj.q || []).push(arguments);
    //     };
    //   h._hjSettings = { hjid: 2175859, hjsv: 6 };
    //   a = o.getElementsByTagName("head")[0];
    //   r = o.createElement("script");
    //   r.async = 1;
    //   r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    //   a.appendChild(r);
    // })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
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
