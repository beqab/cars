import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-dom";
import JVTdecode from "jwt-decode";
class Authorization extends Component {
  state = {
    email: "",
    password: "",
  };

  inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  hangleLogIn = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/auth", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((res) => {
        let test = JVTdecode(res.data.token);
        console.log(test);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div id="authorizathion">
        <div className="authorization_box">
          <div className="auth_title">
            <h3>ავტორიზაცია</h3>
          </div>

          <form onSubmit={this.hangleLogIn} id="auth_form">
            <div className="auth_inputs">
              <div className="input_box">
                <label htmlFor="email">მეილი</label>
                <input
                  onChange={this.inputHandler}
                  name="email"
                  type="mail"
                  placeholder="YourEmail@gmail.com"
                />
              </div>
              <div className="input_box">
                <label htmlFor="password">პაროლი</label>
                <input
                  onChange={this.inputHandler}
                  name="password"
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
