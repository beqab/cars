import React, { Component } from "react";
import ProfileFluid from "./profileFluid";
import { connect } from "react-redux";
import Router from "next/router";
import Classnames from "classnames";

import { compose } from "redux";
import Link from "next/link";
import axios from "axios";
import Cookies from "js-cookie";
import MyStatements from "./myStatements";
import PersonalInfo from "./personalInfo";

class profileLayout extends Component {
  state = {
    statementSum: 0,
    pageType: null,
  };

  componentDidMount() {
    if (!this.props.isAuth) {
      Router.push("/");
    }

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

  redirectHadler = (e = null, path) => {
    if (e) e.preventDefault();
    window.history.pushState("object or string", "Page Title", path);
    this.setState({
      pageType: path.split("/").reverse()[0],
    });
  };

  changeStaenmansSum = (type) => {
    if (type === "add") {
      this.setState((prev) => ({
        statementSum: ++prev.statementSum,
      }));
    } else if (type === "delete") {
      this.setState((prev) => ({
        statementSum: --prev.statementSum,
      }));
    }
  };

  render() {
    console.log(this.props);
    let { pageType } = this.props;
    if (this.state.pageType) {
      pageType = this.state.pageType;
    }
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
                  {/* <Link href="/profile/addStatement"> */}
                  <a
                    onClick={(e) =>
                      this.redirectHadler(e, "/profile/addStatement")
                    }
                    className={Classnames({
                      active: pageType === "addStatement",
                    })}
                  >
                    <span>განცადების დამატება</span>
                    <img src="/imgs/pp.png" alt />
                  </a>
                  {/* </Link> */}
                </li>
                <li>
                  {/* <Link href="/profile/allStatement"> */}
                  <a
                    onClick={(e) =>
                      this.redirectHadler(e, "/profile/allStatement")
                    }
                    className={Classnames({
                      active: pageType === "allStatement",
                    })}
                  >
                    <span>ჩემი განცხადებები</span>
                    <span className="right_circle">
                      {this.state.statementSum}
                    </span>
                  </a>
                  {/* </Link> */}
                </li>
                {/* <li>
                  <a href="">
                    <span>ბალანსის შევსება</span>
                    <span className="right_price_circle">20 ლ</span>
                  </a>
                </li> */}
                <li>
                  {/* <Link href="/profile/info"> */}
                  <a
                    onClick={(e) => this.redirectHadler(e, "/profile/info")}
                    className={Classnames({
                      active: pageType === "info",
                    })}
                  >
                    <span>პარამეტრები</span>
                    <img src="" alt />
                  </a>
                  {/* </Link> */}
                </li>
              </ul>
            </div>
          </div>
          {pageType === "addStatement" ? (
            <ProfileFluid
              changeStaenmansSum={(type) => this.changeStaenmansSum(type)}
            />
          ) : pageType === "allStatement" ? (
            <MyStatements
              changeStaenmansSum={(type) => this.changeStaenmansSum(type)}
            />
          ) : pageType === "info" ? (
            <PersonalInfo />
          ) : (
            "ups :/"
          )}
        </div>
      </div>
    );
  }
}

export default connect((state) => ({
  isAuth: state.auth.isAuth,
}))(profileLayout);
