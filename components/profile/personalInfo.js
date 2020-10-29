import React, { Component } from "react";
import ChangePassword from "./changePassword";

class personalInfo extends Component {
  render() {
    return (
      <div className="personal_info_fluid">
        <div className="personal_info_container">
          <form>
            <div className="personal_top_info">
              <div>
                <label>სახელი</label>
                <input placeholder="" type="text" name="" />
              </div>
              <div>
                <label>იმეილი</label>
                <input type="email" name="" />
              </div>
              <div>
                <label>ტელ.ნომერი</label>
                <input type="text" name="" />
              </div>
              <div>
                <label>ადგილმდებარეობა</label>
                <input type="text" name="" />
              </div>
              <div className="personal_buttons">
                <button className="interupt">გაუქმება</button>
                <button className="personal_save">შენახვა</button>
              </div>
            </div>

            <ChangePassword />
          </form>
        </div>
      </div>
    );
  }
}

export default personalInfo;
