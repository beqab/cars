import React, { Component } from "react";
import axios from "axios";
import classnames from "classnames";

class ResetPassword extends Component {
  state = {
    password: "",
    passwordConfirm: "",
    errors: [],
    validated: false,
  };

  inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  setNewPassword = async (e) => {
    console.log("passs");
    e.preventDefault();
    try {
      const res = await axios.post("users/resetpass", {
        token: this.props.token,
        newPassword: this.state.password,
      });
      console.log(res);
    } catch (err) {
      console.log(err);
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
            <div className="auth_inputs">
              <div className="input_box">
                <label htmlFor="password">პაროლი</label>
                <input
                  onChange={this.inputHandler}
                  name="password"
                  type="password"
                  placeholder="* * * * * * *"
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
                  onChange={this.inputHandler}
                  name="passwordConfirm"
                  type="password"
                  placeholder="* * * * * * *"
                  className={classnames("form-control", {
                    "is-invalid": this.state.errors.passwordConfirm,
                  })}
                />
                <span className="invalid-feedback">
                  {this.state.errors.password}
                </span>
              </div>
            </div>
            <div id="rec_box">
              <button id="recover_button">შენახვა</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ResetPassword;
