import React from "react";
import "../style/style.scss";
// import "../style/bootstrap.scss";
import BaceLayout from "../components/baceLayout/baceLayout";
import Authorization from "../components/regAuth/Auth/Authorizhation";
const Login = () => (
  <BaceLayout>
    <Authorization></Authorization>
    {/* <Home></Home> */}
  </BaceLayout>
);
//

export default Login;
