import App from "next/app";
import { Provider } from "react-redux";
import React from "react";
import withReduxStore from "../redux/with-redux-store";
import { getCookesFromReq } from "../helpers/utils";
import MessengerCustomerChat from "react-messenger-customer-chat";
import WrapperForUser from "../helpers/wrapperForUser";
import Cookies from "js-cookie";
import axios from "axios";
import { hotjar } from "react-hotjar";

axios.defaults.baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000/api/"
    : "https://gcarnode.herokuapp.com/api/";
// axios.defaults.baseURL = "https://gcarnode.herokuapp.com/api/";
// : "http://localhost:5     RL = "http://localhost:5000/api/";

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
    hotjar.initialize(2175859, 6);

    // console.log(process.env.NODE_ENV, "process.env.NODE_ENV ");
    // debugger;
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
      <div>
        <MessengerCustomerChat
          pageId="105939904792665"
          appId="247405556767961"
        />
        <Provider store={reduxStore}>
          <WrapperForUser>
            <Component {...pageProps} />
          </WrapperForUser>
        </Provider>
      </div>
    );
  }
}

export default withReduxStore(MyApp);
