import React, { Component } from "react";
import ProfileFluid from "./profileFluid";
import Router from "next/router";
import Classnames from "classnames";

import { useRouter } from "next/router";
import { compose } from "redux";

class profileLayout extends Component {
  render() {
    console.log(this.props);
    const { pageType } = this.props;
    return (
      <div>
        <div className="profile_fluid">
          <div className="profile_left_tabs_wrappper">
            <div className="profile_username_info">
              <span>მომხმარებელი:</span>
              <span className="profile_username">თორნიკე ჟიჟიაშვილი</span>
            </div>

            <div className="profile_left_tabs">
              <ul>
                <li>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.replace("/profile/addStatement");
                      console.log("click");
                    }}
                    className={Classnames({
                      active: pageType === "addStatement",
                    })}
                  >
                    <span>განცადების დამატება</span>
                    <img src="/imgs/pp.png" alt />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.replace("/profile/allStatement");
                      console.log("click");
                    }}
                    className={Classnames({
                      active: pageType === "allStatement",
                    })}
                  >
                    <span>ჩემი განცხადებები</span>
                    <span className="right_circle">22</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span>ბალანსის შევსება</span>
                    <span className="right_price_circle">20 ლ</span>
                  </a>
                </li>
                <li>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.replace("/profile/editProfile");
                      console.log("click");
                    }}
                    className={Classnames({
                      active: pageType === "editProfile",
                    })}
                    href=""
                  >
                    <span>პარამეტრები</span>
                    <img src="" alt />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {pageType === "addStatement" ? (
            <ProfileFluid />
          ) : pageType === "allStatement" ? (
            "yvela gancaxdeba"
          ) : pageType === "editProfile" ? (
            "profilis redaqtierba"
          ) : (
            "sxva page"
          )}
        </div>
      </div>
    );
  }
}

export default profileLayout;
