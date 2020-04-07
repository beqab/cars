import React, { Component } from "react";
import axios from "axios";
import JVTdecode from "jwt-decode";
import { loginValidation } from "../../validator/validation";
import classname from "classnames";
import { connect } from "react-redux";
import { setCurrentUser } from "../../../redux/auth/authActions";
class Authorization extends Component {
  state = {
    email: "",
    password: "",
    errors: [],
    validated: false,
  };

  inputHandler = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        if (this.state.validated) {
          let { errors, isValid } = loginValidation({
            email: this.state.email,
            password: this.state.password,
          });
          if (isValid) {
            this.setState({
              errors: [],
            });
          } else {
            this.setState({
              errors: errors,
            });
          }
        }
      }
    );
  };

  hangleLogIn = (e) => {
    e.preventDefault();

    let { errors, isValid } = loginValidation({
      email: this.state.email,
      password: this.state.password,
    });
    if (isValid) {
      this.setState(
        {
          errors: [],
        },
        () => {
          axios
            .post("http://localhost:5000/api/auth", {
              email: this.state.email,
              password: this.state.password,
            })
            .then((res) => {
              let test = JVTdecode(res.data.token);
              console.log(test);
              this.setState({
                errors: [],
              });
              this.props.setCurrentUser({
                user: res.data.user,
                token: res.data.token,
              });
              // this.props.setCurrentUser({
              //   user: res.data.user,
              //   token: res.data.token
              // });
            })
            .catch((err) => {
              console.log(err, "errrr");
              // if (err.response.status != 500) {
              //   this.setState({
              //     loginerrors: { email: "მეილი ან პარალლი არაწორია" },
              //   });
              // }
            });
        }
      );
    } else {
      this.setState({
        errors: errors,
        validated: true,
      });
    }
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
                  className={classname("form-control", {
                    "is-invalid": this.state.errors.email,
                  })}
                />
                <span className="invalid-feedback">
                  {this.state.errors.email}
                </span>
              </div>
              <div className="input_box">
                <label htmlFor="password">პაროლი</label>
                <input
                  onChange={this.inputHandler}
                  name="password"
                  type="password"
                  placeholder="* * * * * * *"
                  className={classname("form-control", {
                    "is-invalid": this.state.errors.password,
                  })}
                />
                <span className="invalid-feedback">
                  {this.state.errors.password}
                </span>
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

export default connect(null, { setCurrentUser })(Authorization);
