import React, { Component } from "react";
import AddStatement from "./addStatement";
import classnames from "classnames";
import cars from "./carsApi.json";

class ProfileFluid extends Component {
  state = {
    imgs: [],
    defaultImgIndex: 0,
    disable: false,
    producer: null,
  };
  fileInput = React.createRef();

  fileSelectedHandler = (event) => {
    console.log(this.state.imgs.length);
    if (this.state.imgs.length == 5) {
      this.setState({
        disable: true,
      });
    }
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

  changeHandler = (e) => {
    console.log(e.target.name, e.target.value, ":chng");
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  getCars = () => {
    console.log(cars.cars, "carrrrrsss");
  };

  getCarModels = () => {
    let options = [];
    if (this.state.producer) {
      cars.forEach((element, i) => {
        if (element.name === this.state.producer) {
          debugger;
          element[`${element.name}Options`].forEach((option, index) => {
            console.log(option);
            options.push(
              <option key="i" value={option.model_name}>
                {option.model_name}
              </option>
            );
          });
        }
      });
    }

    return options;
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
            <button onClick={this.getCars}>gtttt</button>
            <div className="profile_input_box">
              <label>კატეგორია</label>
              <select name="category" onChange={this.changeHandler}>
                <option>არჩევა</option>
                <option value="სედანი">სედანი</option>
                <option value="ჯიპი">ჯიპი</option>
                <option value="კუპე">კუპე</option>
                <option value="ჰეჩბექი">ჰეჩბექი</option>
                <option value="კაბრიოლეტი">კაბრიოლეტი</option>
                <option value="უნივერსალი">უნივერსალი</option>
                <option value="პიკაპი">პიკაპი</option>
                <option value="მიკროავტობუსი">მიკროავტობუსი</option>
                <option value="ფურგონი">ფურგონი</option>
                <option value="ლიმუზინი">ლიმუზინი</option>
              </select>
            </div>

            <div className="profile_input_box">
              <label>მწარმოებელი</label>
              <select name="producer" onChange={this.changeHandler}>
                <option>აირჩიე</option>
                {cars.map((car, i) => {
                  return (
                    <option key="i" value={car.name}>
                      {car.name}
                    </option>
                  );
                })}
                {/* <option value="ACURA">ACURA</option>
                <option value="ALFA ROMEO">ALFA ROMEO</option>
                <option value="ASTON MARTIN">ASTON MARTIN</option>
                <option value="AUDI">AUDI</option>
                <option value="BENTLEY">BENTLEY</option>
                <option value="BMW">BMW</option>
                <option value="BRILLIANCE">BRILLIANCE</option>
                <option value="BUICK">BUICK</option>
                <option value="CADILLAC">CADILLAC</option>
                <option value="CHANGAN">CHANGAN</option>
                <option value="CHERY">CHERY</option>
                <option value="CHEVROLET">CHEVROLET</option>
                <option value="CITROEN">CITROEN</option>
                <option value="CPI">CPI</option>
                <option value="DAEWOO">DAEWOO</option>
                <option value="DM TELAI">DM TELAI</option>
                <option value="DODGE">DODGE</option>
                <option value="FAW">FAW</option>
                <option value="FERRARI">FERRARI</option>
                <option value="FIAT">FIAT</option>
                <option value="FISKER">FISKER</option>
                <option value="FORD">FORD</option>
                <option value="Fortschritt">Fortschritt</option>
                <option value="FOTON">FOTON</option>
                <option value="GAZ">GAZ</option>
                <option value="GMC">GMC</option>
                <option value="HAVAL">HAVAL</option>
                <option value="HONDA">HONDA</option>
                <option value="HUMMER">HUMMER</option>
                <option value="HYSTER">HYSTER</option>
                <option value="HYUNDAI">HYUNDAI</option>
                <option value="INFINITI">INFINITI</option>
                <option value="ISUZU">ISUZU</option>
                <option value="IVECO">IVECO</option>
                <option value="JAC">JAC</option>
                <option value="JAGUAR">JAGUAR</option>
                <option value="JEEP">JEEP</option>
                <option value="KARSAN">KARSAN</option>
                <option value="KIA">KIA</option>
                <option value="LAMBORGHINI">LAMBORGHINI</option>
                <option value="LAND ROVER">LAND ROVER</option>
                <option value="LEXUS">LEXUS</option>
                <option value="LIFAN">LIFAN</option>
                <option value="LINCOLN">LINCOLN</option>
                <option value="LOTUS">LOTUS</option>
                <option value="MASERATI">MASERATI</option>
                <option value="MAYBACH">MAYBACH</option>
                <option value="MAZDA">MAZDA</option>
                <option value="MERCEDES-BENZ">MERCEDES-BENZ</option>
                <option value="MERCURY">MERCURY</option>
                <option value="MG">MG</option>
                <option value="MINI">MINI</option>
                <option value="MITSUBISHI">MITSUBISHI</option>
                <option value="NAZ">NAZ</option>
                <option value="NIEWIADOW">NIEWIADOW</option>
                <option value="NISSAN">NISSAN</option>
                <option value="OPEL">OPEL</option>
                <option value="PEUGEOT">PEUGEOT</option>
                <option value="PONTIAC">PONTIAC</option>
                <option value="PORSCHE">PORSCHE</option>
                <option value="RENAULT">RENAULT</option>
                <option value="ROLLS-ROYCE">ROLLS-ROYCE</option>
                <option value="ROVER">ROVER</option>
                <option value="SAAB">SAAB</option>
                <option value="SATURN">SATURN</option>
                <option value="SCION">SCION</option>
                <option value="SEAT">SEAT</option>
                <option value="SKODA">SKODA</option>
                <option value="SSANGYONG">SSANGYONG</option>
                <option value="SUBARU">SUBARU</option>
                <option value="TATA">TATA</option>
                <option value="TESLA">TESLA</option>
                <option value="TOYOTA">TOYOTA</option>
                <option value="UAZ">UAZ</option>
                <option value="VAZ">VAZ</option>
                <option value="VOLKSWAGEN">VOLKSWAGEN</option>
                <option value="VOLVO">VOLVO</option>
                <option value="ZAZ">ZAZ</option>
                <option value="სხვა">სხვა</option> */}
              </select>
            </div>

            <div className="profile_input_box">
              <label>მოდელი</label>
              <select>
                <option>აირჩიე</option>
                {this.getCarModels()}
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
            <div className="imageUploadContainer d-flex mt-5">
              <div
                className={classnames("imgUload", {
                  "disable-upload": this.state.disable,
                })}
                onClick={() => {
                  let a = this.fileInput.current;
                  a.click();
                }}
              >
                <input
                  disabled={this.state.disable}
                  ref={this.fileInput}
                  style={{ display: "none" }}
                  type="file"
                  onChange={this.fileSelectedHandler}
                />
              </div>
              {this.getImgs()}
            </div>
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
                    <input type="number" placeholder="ტელეფონი" />
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
            <div className="up_button_fluid">
              <button className="up_button">გამოქვეყნება</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProfileFluid;
