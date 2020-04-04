import React from "react";
import "../style/style.scss";
// import "../style/bootstrap.scss";
import BaceLayout from "../components/baceLayout/baceLayout";
import Home from "./home/Home";
import Authorization from "./authorization/Authorizhation";
const App = () => (
  <BaceLayout>
    <Authorization></Authorization>
    {/* <Home></Home> */}
  </BaceLayout>
);
//

export default App;
