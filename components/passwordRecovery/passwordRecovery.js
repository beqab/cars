import React, { Component } from "react";

class Recovery extends Component {
  state = {
    email: "",
    password: "",
    errors: [],
    validated: false,
  };

  render() {
    return (
      <div id="authorizathion">
        <div className="authorization_box">
          <div className="auth_title">
            <h3>პაროლის აღდგენა</h3>
          </div>

          <form>
            <div className="auth_inputs">
              <div className="input_box">
                <label htmlFor="email">მეილი</label>
                <input
                  name="email"
                  type="mail"
                  placeholder="YourEmail@gmail.com"
                />
                <span className="invalid-feedback"></span>
              </div>
            </div>
            <div id="rec_box">
              <button id="recover_button">გაგზავნა</button>
            </div>
            <div className="auth_footer inline">
              <a href="">ავტორიზაცია</a>
              <a href="">რეგისტრაცია</a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Recovery;
