import React, { Component } from "react";
import ProfileFluid from "./profileFluid";
import Router from "next/router";
import Classnames from "classnames";

import { useRouter } from "next/router";
import { compose } from "redux";
import Link from "next/link";
import axios from "axios";
import Cookies from "js-cookie";

class profileLayout extends Component {
  state = {
    statementSum: 0,
  };
  componentDidMount() {
    let token = Cookies.get("token");
    axios
      .get("statement/sum", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        this.setState({
          statementSum: res.data,
        });
      });
  }

  render() {
    console.log(this.props);
    const { pageType } = this.props;
    return (
      <div>
        <div className="profile_fluid">
          <div className="profile_left_tabs_wrappper">
            <div className="profile_username_info">
              <span onClick={this.getSum}>მომხმარებელი:</span>
              <span className="profile_username">თორნიკე ჟიჟიაშვილი</span>
            </div>

            <div className="profile_left_tabs">
              <ul>
                <li>
                  <Link href="/profile/addStatement">
                    <a
                      className={Classnames({
                        active: pageType === "addStatement",
                      })}
                    >
                      <span>განცადების დამატება</span>
                      <img src="/imgs/pp.png" alt />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/profile/allStatement">
                    <a
                      className={Classnames({
                        active: pageType === "allStatement",
                      })}
                    >
                      <span>ჩემი განცხადებები</span>
                      <span className="right_circle">
                        {this.state.statementSum}
                      </span>
                    </a>
                  </Link>
                </li>
                <li>
                  <a href="">
                    <span>ბალანსის შევსება</span>
                    <span className="right_price_circle">20 ლ</span>
                  </a>
                </li>
                <li>
                  <Link href="/profile/editProfile">
                    <a
                      className={Classnames({
                        active: pageType === "editProfile",
                      })}
                    >
                      <span>პარამეტრები</span>
                      <img src="" alt />
                    </a>
                  </Link>
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
