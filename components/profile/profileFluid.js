import React, { Component } from "react";
import AddStatement from "./addStatement";

class ProfileFluid extends Component {
  render() {
    return (
      <>
        <div className="profile_main_content">
          <div className="profile_main_content_header">
            <div>
              <a href="" className="active">
                მანქანების გაქირავება
              </a>
              <a href="">მანქანით მომსახურება</a>
            </div>
          </div>

          <div className="profile_main_inputs">
            <div className="profile_input_box">
              <select>
                <option>კატეგორია</option>
                <option>კატეგორია</option>
                <option>კატეგორია</option>
                <option>კატეგორია</option>
              </select>
            </div>

            <div className="profile_input_box">
              <select>
                <option>მწარმოებელი</option>
                <option>კატეგორია</option>
                <option>კატეგორია</option>
                <option>კატეგორია</option>
              </select>
            </div>

            <div className="profile_input_box">
              <select>
                <option>მოდელი</option>
                <option>კატეგორია</option>
                <option>კატეგორია</option>
                <option>კატეგორია</option>
              </select>
            </div>

            <div className="profile_input_box">
              <select>
                <option>ადგილმდებარეობა</option>
                <option>კატეგორია</option>
                <option>კატეგორია</option>
                <option>კატეგორია</option>
              </select>
            </div>

            <div className="profile_input_box">
              <select>
                <option>ფასი</option>
                <option>კატეგორია</option>
                <option>კატეგორია</option>
                <option>კატეგორია</option>
              </select>
            </div>

            <div className="profile_input_box">
              <select>
                <option selected="true" disabled="disabled">
                  პირთა ტევადობა
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProfileFluid;
