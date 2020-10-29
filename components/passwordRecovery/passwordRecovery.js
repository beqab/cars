import React, { Component } from "react";
import axios from "axios";
import Link from "next/link";
import classname from "classnames";

class Recovery extends Component {
  state = {
    email: "",
    password: "",
    errors: [],
    validated: false,
    butDisable: false,
    serverError: null,
    success: false,
  };

  inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  seandEmail = async (e) => {
    e.preventDefault();
    this.setState({
      butDisable: true,
    });
    try {
      const res = await axios.post("users/recoverpass", {
        email: this.state.email,
      });

      console.log(res);
      this.setState({
        butDisable: false,
        success: true,
      });
    } catch (err) {
      this.setState({
        butDisable: false,
        serverError: err.response.data,
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

          <form onSubmit={this.seandEmail}>
            {this.state.success ? (
              <div
                style={{ color: "#fff" }}
                className="color-wight text-center"
              >
                პაროლის აღდგენის ბმული გამოიგზავნე თქვენს მეილზე{" "}
                <b>გთხოვთ შეამოწმოთ თქვენი ელ-ფოსტა </b>
              </div>
            ) : (
              <>
                <div className="auth_inputs">
                  <div className="input_box">
                    <label htmlFor="email">მეილი</label>
                    <input
                      name="email"
                      type="mail"
                      className={classname("form-control", {
                        "is-invalid": this.state.serverError,
                      })}
                      onChange={this.inputHandler}
                      placeholder="YourEmail@gmail.com"
                    />
                    <span className="invalid-feedback">
                      {this.state.serverError}
                    </span>
                  </div>
                </div>
                <div id="rec_box">
                  <div
                    className={classname("loader_box", {
                      hide: !this.state.butDisable,
                    })}
                  >
                    <div className="loader" id="loader-1"></div>
                  </div>
                  <button id="recover_button">გაგზავნა</button>
                </div>
              </>
            )}
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

export default Recovery;
