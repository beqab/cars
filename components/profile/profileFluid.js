import React, { Component } from "react";
import AddStatement from "./addStatement";
import classnames from "classnames";

class ProfileFluid extends Component {
  state = {
    imgs: [],
    defaultImgIndex: 0,
  };
  fileInput = React.createRef();

  fileSelectedHandler = (event) => {
    if (event.target.files && event.target.files[0]) {
      let imgUp = event.target.files[0];
      this.setState((prev) => {
        return {
          imgs: [
            ...prev.imgs,
            {
              selectedFile: imgUp,
              uploadedImg: [URL.createObjectURL(imgUp)],
            },
          ],
        };
      });
    }
  };

  fileUpload = (file = null) => {
    // let fd = new FormData();
    // fd.append("image", this.state.selectedFile, this.state.selectedFile.name);
  };
  setEsDefault = (i) => {
    this.setState({
      defaultImgIndex: i,
    });
  };
  getImgs = () => {
    let imgs = [];

    for (let index = 0; index < 6; index++) {
      if (index < this.state.imgs.length) {
        imgs.push(
          <div
            onClick={() => this.setEsDefault(index)}
            key={index}
            className={classnames("uploded", {
              active: index === this.state.defaultImgIndex,
            })}
          >
            <img src={this.state.imgs[index].uploadedImg} />
          </div>
        );
      } else {
        imgs.push(<div key={index} className="uploded"></div>);
      }
    }

    return imgs;
  };
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

          <div className="imageUploadContainer d-flex mt-5">
            <div
              className="imgUload"
              onClick={() => {
                let a = this.fileInput.current;
                a.click();
              }}
            >
              <input
                ref={this.fileInput}
                style={{ display: "none" }}
                type="file"
                onChange={this.fileSelectedHandler}
              />
            </div>
            {this.getImgs()}
          </div>
        </div>
      </>
    );
  }
}

export default ProfileFluid;
