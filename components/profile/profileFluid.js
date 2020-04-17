import React, { Component } from "react";
import AddStatement from "./addStatement";

class ProfileFluid extends Component {
  render() {
    return (
      <div>
        <div className="profile_fluid">
          <div className="profile_left_tabs_wrappper">
            <div className="profile_username_info">
              <span>მომხმარებელი:</span>
              <span className="profile_username">თორნიკე ჟიჟიაშვილი</span>
            </div>

            <div className="profile_left_tabs">
              <ul>
                <li>
                  <a href="" className="active">
                    <span>განცადების დამატება</span>
                    <img src="/imgs/pp.png" alt />
                  </a>
                </li>
                <li>
                  <a href="">
                    <span>ჩემი განცხადებები</span>
                    <span className="right_circle">22</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span>ბალანსის შევსება</span>
                    <span className="right_price_circle">20 ლ</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span>პარამეტრები</span>
                    <img src="" alt />
                  </a>
                </li>
              </ul>
            </div>
          </div>

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
              <div className="profile_input_box">
                <select class="select_with_img drive_select">
                  <option selected="true" disabled="disabled">
                    მძღოლი
                  </option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <div className="profile_input_box">
                <select class="select_with_img engine_select">
                  <option selected="true" disabled="disabled">
                    ძრავის მოცულობა
                  </option>
                  <option>1.0</option>
                  <option>2.2</option>
                  <option>3.4</option>
                </select>
              </div>

              <div className="profile_input_box">
                <select class="select_with_img flue_select">
                  <option selected="true" disabled="disabled">
                    საწვავის ტიპი
                  </option>
                  <option>დიზელი</option>
                  <option>ბენზინი</option>
                  <option>3.4</option>
                </select>
              </div>

              <div className="profile_input_box">
                <select class="select_with_img door_select">
                  <option selected="true" disabled="disabled">
                    კარის რაოდენობა
                  </option>
                  <option>დიზელი</option>
                  <option>ბენზინი</option>
                  <option>3.4</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileFluid;
