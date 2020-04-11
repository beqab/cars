import React, { Component } from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import axios from "axios";
import { setCurrentUser } from "../../../redux/auth/authActions";

// import { API_URL } from "../../services/api";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { setCurrentUser } from "../../redux/auth/authActions";

class FbLoginButton extends Component {
  // constructor(props) {
  //   super(props);
  //   console.log(process.env.FB_APP_ID);
  // }
  componentClicked = () => {
    console.log("componentClicked");
  };
  responseFacebook = (res) => {
    console.log(res, "resss");
    const userData = {
      accessToken: res.accessToken,
      facebookId: res.userID,
      name: res.name,
      nickname: res.nickname,
      email: res.email,
      imageUrl: res.url,
    };
    // console.log(res, userData);
    axios
      .post("http://localhost:5000/api/users/fbLogin", { userData })
      .then((res) => {
        console.log("aqedan daalogineb....", res);
        this.props.setCurrentUser({
          user: res.data.user,
          token: res.data.token,
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    // console.log(process.env.FB_APP_ID);
    return (
      <FacebookLogin
        appId={581660732471800}
        // autoLoad={true}
        fields="name,email,picture"
        callback={this.responseFacebook}
        render={(renderProps) => (
          // <a
          //   onClick={renderProps.onClick}
          //   className="btn__background facebook"
          //   href="#"
          // >
          //   <i className="fab fa-facebook-f  fa-icon" />
          //   <span>შესვლა</span>
          // </a>

          <a
            onClick={(e) => {
              e.preventDefault();
              renderProps.onClick();
            }}
            className="facebook_auth_social"
          >
            <img src="/imgs/facebook.svg" alt="" />
            <span>by Facebook</span>
          </a>
        )}
      />
    );
  }
}

export default connect(null, { setCurrentUser })(FbLoginButton);
