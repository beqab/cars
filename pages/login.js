import React from "react";

import "../style/style.scss";
import BaceLayout from "../components/baceLayout/baceLayout";
import Authorization from "../components/regAuth/Auth/Authorizhation";

const Login = () => (
  <BaceLayout>
    <Authorization></Authorization>
  </BaceLayout>
);

export default Login;
