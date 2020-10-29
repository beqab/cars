import React, { Component } from "react";
import axios from "axios";
import classnames from "classnames";
import Link from "next/link";
import classname from "classnames";

import { passwordResetValidation } from "../../validator/validation";

class ResetPassword extends Component {
  state = {
    password: "",
    repeatPasword: "",
    errors: [],
    validated: false,
    butDisable: false,
  };

  inputHandlers = (event) => {
    console.log(event.target.name, event.target.value);
    this.setState(
      {
        [event.target.name]: event.target.value,
        errorMsgs: null,
      },
      () => {
        if (this.state.validated) {
          let { errors, isValid } = passwordResetValidation({
            password: this.state.password,
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

  setNewPassword = (e) => {
    console.log("passs");
    e.preventDefault();

    let { errors, isValid } = passwordResetValidation({
      password: this.state.password,
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
            .post("users/resetpass", {
              token: this.props.token,
              newPassword: this.state.password,
            })
            .then((res) => {
              console.log(res);
              this.setState({
                butDisable: false,
                success: res.data,
              });
            })
            .catch((err) => {
              this.setState({
                butDisable: false,
                success: err.response.data,
              });
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
            <h3>პაროლის აღდგენა</h3>
          </div>

          <form onSubmit={this.setNewPassword}>
            {this.state.success ? (
              <div style={{ color: "#fff" }}>{this.state.success}</div>
            ) : (
              <>
                <div className="auth_inputs">
                  <div className="input_box">
                    <label htmlFor="password">პაროლი</label>
                    <input
                      onChange={this.inputHandlers}
                      name="password"
                      type="password"
                      placeholder="პაროლი"
                      className={classnames("form-control", {
                        "is-invalid": this.state.errors.password,
                      })}
                    />
                    <span className="invalid-feedback">
                      {this.state.errors.password}
                    </span>
                  </div>
                  <div className="input_box mt-3">
                    <label htmlFor="password">გაიმეორეთ პაროლი</label>
                    <input
                      onChange={this.inputHandlers}
                      name="repeatPasword"
                      type="password"
                      placeholder="გაიმეორეთ პაროლი"
                      className={classnames("form-control", {
                        "is-invalid": this.state.errors.repeatPasword,
                      })}
                    />
                    <span className="invalid-feedback">
                      {this.state.errors.repeatPasword}
                    </span>
                  </div>
                </div>
                <div
                  className={classname("loader_box", {
                    hide: !this.state.butDisable,
                  })}
                >
                  <div className="loader" id="loader-1"></div>
                </div>
                <div id="rec_box">
                  <button id="recover_button">შენახვა</button>
                </div>
              </>
            )}
            123{" "}
            <div className="auth_footer inline">
              <Link href="/login">
                <a>ავტორიზაცია</a>
              </Link>
              <Link href="/registration">
                <a>რეგისტრაცია</a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ResetPassword;
