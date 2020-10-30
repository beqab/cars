import Axios from "axios";

import JVTdecode from "jwt-decode";
import Cookies from "js-cookie";
import { setCookie } from "../../helpers/utils";
import Router from "next/router";
import axios from "axios";

export const setCurrentUser = ({ user, token }) => {
  const decoded = JVTdecode(token);
  let strUSer = JSON.stringify(user);
  //   Cookies.set("user", strUSer);
  //   setCookie("user", JSON.stringify(user));
  setCookie("user", JSON.stringify(user));
  Cookies.set("token", token);
  Cookies.set("expiresAt", decoded.exp);
  // Check for expired token
  Router.push("/profile/addStatement");
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return {
    type: "LOGIN_USER",
    payload: { user, token },
  };
};

export const authLogout = () => {
  Cookies.remove("user");
  Cookies.remove("token");
  Cookies.remove("expiresAt");
  Router.push("/");
  return {
    type: "LOGOUT_USER",
  };
};

export const updateUser = (user) => {
  debugger;
  setCookie("user", JSON.stringify(user));
  return {
    type: "UPDATE_USER",
    payload: { user },
  };
};
