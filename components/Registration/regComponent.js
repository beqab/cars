import React, { Component } from "react";
import axios from "axios";
import JVTdecode from "jwt-decode";
import { regValidation } from "../validator/validation";
import classname from "classnames";
import { connect } from "react-redux";
import { setCurrentUser } from "../../redux/auth/authActions";
import Link from "next/link";

class Registration extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    repeatPasword: "",
    errors: [],
    validated: false,
    butDisable: false,
  };

  inputHandlers = (event) => {
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      () => {
        if (this.state.validated) {
          let { errors, isValid } = regValidation({
            email: this.state.email,
            password: this.state.password,
            name: this.state.name,
            repeatPasword: this.state.repeatPasword,
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

  regSubmitHandler = (e) => {
    e.preventDefault();

    let { errors, isValid } = regValidation({
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
      repeatPasword: this.state.repeatPasword,
    });
    if (isValid) {
      this.setState(
        {
          errors: [],
          butDisable: true,
        },
        () => {
          axios
            .post("http://localhost:5000/api/users", {
              email: this.state.email,
              password: this.state.password,
              name: this.state.name,
            })
            .then((res) => {
              console.log(res);
              let test = JVTdecode(res.data.token);
              console.log(test);
              this.setState({
                errors: [],
                butDisable: false,
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
              this.setState({
                butDisable: false,
              });
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
      <div>
        <div id="authorizathion">
          <div className="reg_box">
            <div className="auth_title">
              <h3>რეგისტრაცია</h3>
            </div>

            <form id="auth_form" onSubmit={this.regSubmitHandler}>
              <div className="auth_inputs">
                <div className="input_box">
                  <label htmlFor="name">სახელი - გვარი</label>
                  <input
                    onChange={this.inputHandlers}
                    name="name"
                    type="text"
                    placeholder="სახელი"
                    className={classname("form-control", {
                      "is-invalid": this.state.errors.email,
                    })}
                  />
                  <span className="invalid-feedback">
                    {this.state.errors.name}
                  </span>
                </div>
                <div className="input_box">
                  <label htmlFor="email">მეილი</label>
                  <input
                    onChange={this.inputHandlers}
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
                    onChange={this.inputHandlers}
                    name="password"
                    type="password"
                    placeholder="* * * * * * *"
                    className={classname("form-control", {
                      "is-invalid": this.state.errors.email,
                    })}
                  />
                  <span className="invalid-feedback">
                    {this.state.errors.password}
                  </span>
                </div>
                <div className="input_box">
                  <label htmlFor="password">გაიმეორე პაროლი</label>
                  <input
                    onChange={this.inputHandlers}
                    name="repeatPasword"
                    type="password"
                    placeholder="* * * * * * *"
                    className={classname("form-control", {
                      "is-invalid": this.state.errors.email,
                    })}
                  />
                  <span className="invalid-feedback">
                    {this.state.errors.repeatPasword}
                  </span>
                </div>
                <div></div>
                <div id="login_box">
                  <button className="load" id="login_button">
                    რეგისტრაცია
                  </button>
                </div>
              </div>

              <div className="auth_footer">
                <a href="">უკვე ხართ რეგისტრირებული?</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { setCurrentUser })(Registration);
