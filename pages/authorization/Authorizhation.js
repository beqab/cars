import React, { Component } from "react";
import { Link } from "react-dom";
class Authorization extends Component {
  render() {
    return (
      <div id="authorizathion">
        <div className="authorization_box">
          <div className="auth_title">
            <h3>ავტორიზაცია</h3>
          </div>

          <form id="auth_form">
            <div className="auth_inputs">
              <div className="input_box">
                <label htmlFor="email">მეილი</label>
                <input
                  id="email"
                  type="mail"
                  placeholder="YourEmail@gmail.com"
                />
              </div>
              <div className="input_box">
                <label htmlFor="password">პაროლი</label>
                <input
                  id="password"
                  type="password"
                  placeholder="* * * * * * *"
                />
              </div>

              <div id="login_box">
                <button id="login_button">შესვლა</button>
              </div>
            </div>
            <div className="social_auth">
              <a href="" className="google_auth_social">
                <img src="/imgs/google.png" alt="" />
                <span>by Google</span>
              </a>

              <a href="" className="facebook_auth_social">
                <img src="/imgs/facebook.svg" alt="" />
                <span>by Facebook</span>
              </a>
            </div>

            <div className="auth_footer">
              <a href="">დარეგისტრირდი</a>
              <a href="">დაგავიწყდათ პაროლი?</a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Authorization;
