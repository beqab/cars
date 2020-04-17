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
              <label>კატეგორია</label>
              <select>
                <option>კატეგორია</option>
                <option>კატეგორია</option>
                <option>კატეგორია</option>
                <option>კატეგორია</option>
              </select>
            </div>

            <div className="profile_input_box">
              <label>კატეგორია</label>
              <select>
                <option>მწარმოებელი</option>
                <option>კატეგორია</option>
                <option>კატეგორია</option>
                <option>კატეგორია</option>
              </select>
            </div>

            <div className="profile_input_box">
              <label>კატეგორია</label>
              <select>
                <option>მოდელი</option>
                <option>კატეგორია</option>
                <option>კატეგორია</option>
                <option>კატეგორია</option>
              </select>
            </div>

            <div className="profile_input_box">
              <label>ადგილმდებარეობა</label>
              <select>
                <option>თბილისი</option>
                <option>კატეგორია</option>
                <option>კატეგორია</option>
                <option>კატეგორია</option>
              </select>
            </div>

            <div className="profile_input_box">
              <label>კატეგორია</label>
              <select>
                <option>ფასი</option>
                <option>კატეგორია</option>
                <option>კატეგორია</option>
                <option>კატეგორია</option>
              </select>
            </div>

            <div className="profile_input_box">
              <label> პირთა ტევადობა</label>
              <select>
                <option>1</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <div className="profile_input_box">
              <label className="select_with_img drive_select">მძღოლი</label>
              <select>
                <option selected="true" disabled="disabled">
                  მძღოლი
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <div className="profile_input_box">
              <label className="select_with_img engine_select">
                ძრავის მოცულობა
              </label>
              <select>
                <option selected="true" disabled="disabled">
                  4
                </option>
                <option>1.0</option>
                <option>2.2</option>
                <option>3.4</option>
              </select>
            </div>

            <div className="profile_input_box">
              <label className="flue_select">საწვავის ტიპი</label>
              <select>
                <option>დიზელი</option>
                <option>დიზელი</option>
                <option>ბენზინი</option>
                <option>3.4</option>
              </select>
            </div>

            <div className="profile_input_box">
              <label className="door_select"> კარის რაოდენობა</label>
              <select>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>1</option>
              </select>
            </div>
          </div>

          <div className="contact_info_fluid">
            <div>
              <div className="contact_info_box">
                <div className="contact_info_title">
                  <span>საკონტაქტო ინფორმაცია</span>
                </div>
                <div className="contact_info">
                  <div className="contact_label">
                    <label>
                      <img src="/imgs/pp.png" />
                    </label>
                    <input type="text" placeholder="სახელი გვარი" />
                  </div>

                  <div className="contact_label">
                    <label>
                      <img src="/imgs/phone.png" />
                    </label>
                    <input type="text" placeholder="ტელეფონი" />
                  </div>

                  <div className="contact_label">
                    <label>
                      <img src="/imgs/ma.png" />
                    </label>
                    <input type="email" placeholder="მეილი" />
                  </div>

                  <div className="contact_label">
                    <label>
                      <img src="/imgs/loc.png" />
                    </label>
                    <input type="text" placeholder="ლოკაცია" />
                  </div>
                </div>
              </div>
              <div className="profile_textarea">
                <span>სხვა მახასიათებლები</span>
                <textarea placeholder="სხვა მახასიათებლები"></textarea>
              </div>
            </div>
            <div>
              <button></button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProfileFluid;
