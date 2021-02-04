import React, { Component } from "react";
import { connect } from "react-redux";
import AddStatement from "./addStatement";
import classnames from "classnames";
import cars from "./carsApi.json";
import axios from "axios";
import Router from "next/router";
import Cookies from "js-cookie";
import Loader from "../UI/loader";

import {
  Doors,
  Engin,
  Pessengers,
  OilType,
  Location,
  Category,
  Producer,
  CarModel,
} from "../selects";

class ProfileFluid extends Component {
  state = {
    loadStatement: false,
    images: [],
    defaultImgIndex: 0,
    producer: null,
    category: null,
    location: null,
    carAge: null,
    engin: null,
    carModel: null,
    doors: null,
    text: "",
    price: "",
    carDropDownErors: [],
    categoryError: null,
    producerError: null,
    carModelError: null,
    locationError: null,
    textError: null,
    priceError: null,
    loader: false,
    oilType: null,
    // checkboxes
    navigation: false,
    hidravlika: false,
    luqi: false,
    signailzation: false,
    centralLock: false,
    bortComp: false,
    conditioner: false,
    antiMocureb: false,
    parcingConttrol: false,
    backVision: false,
    // rentTypeChecboxes
    finalPurchase: false,
    rentDaily: true,
    insured: false,
    withDriver: false,

    // userInfo
    userName: null,
    phone: null,
    email: null,
    address: "",

    statementId: null,
  };
  fileInput = React.createRef();

  componentDidMount() {
    console.log(Router.router.query.id, "rrrrrrrr");
    if (Router.router.query.id) {
      let token = Cookies.get("token");
      this.setState({
        statementId: Router.router.query.id,
      });
      axios
        .get("statement/", {
          params: { statementId: Router.router.query.id },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res);

          // debugger;
          this.setState({
            ...res.data,
            images: res.data.images.map((el, index) => {
              return { uploadedImg: el, thumbnail: el };
            }),
            //   images: res.data.images.map((el, index) => {
            //     var link = "https://app.gcar.ge/";
            //     return { original: link + el, thumbnail: link + el };
            //   }),
          });
        });
    }
  }

  fileSelectedHandler = (event) => {
    if (event.target.files && event.target.files[0]) {
      let imgUp = event.target.files[0];
      this.setState((prev) => {
        return {
          images: [
            ...prev.images,
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
    this.setState((prev) => ({
      images: [
        prev.images[i],
        ...prev.images.filter((el, index) => (index !== i ? el : null)),
      ],
    }));
  };

  getImgs = () => {
    let imgs = [];

    for (let index = 0; index < 6; index++) {
      if (index < this.state.images.length) {
        imgs.push(
          <div
            onClick={() => this.setEsDefault(index)}
            key={index}
            className={classnames("uploded", {
              active: index === this.state.defaultImgIndex,
            })}
          >
            <span className="add_img_info">მთავარ სურათად დაყენება</span>
            <img src={this.state.images[index].uploadedImg} />
          </div>
        );
      } else {
        imgs.push(<div key={index} className="uploded"></div>);
      }
    }

    return imgs;
  };

  changeHandler = (e) => {
    // console.log(e.target.name, e.target.value, ":chng");

    if (e.target.type === "checkbox") {
      // debugger;
      this.setState({
        [e.target.name]: e.target.checked,
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
        [e.target.name + "Error"]: null,
      });
    }
  };

  getYear = () => {
    let options = [];
    for (let index = 2020; index >= 1900; index--) {
      options.push(
        <option key={index} selected={this.state.carAge == index} value={index}>
          {index}
        </option>
      );
    }
    return options;
  };

  saveStatement = () => {
    this.setState({
      loadStatement: true,
    });
    let image = new FormData();

    if (this.state.images.length) {
      this.state.images.map((el, i) => {
        image.append("image", el.selectedFile);
        // image.append("image"+i, this.state.images[0].selectedFile );
      });
    }
    this.state.category && image.append("category", this.state.category);
    this.state.location && image.append("location", this.state.location);
    this.state.producer && image.append("producer", this.state.producer);
    this.state.carAge && image.append("carAge", this.state.carAge);
    this.state.engin && image.append("engin", this.state.engin);
    this.state.carModel && image.append("carModel", this.state.carModel);
    this.state.doors && image.append("doors", this.state.doors);
    this.state.oilType && image.append("oilType", this.state.oilType);
    this.state.text && image.append("text", this.state.text);
    this.state.price && image.append("price", this.state.price);
    // checkboxes

    this.state.navigation && image.append("navigation", this.state.navigation);
    this.state.hidravlika && image.append("hidravlika", this.state.hidravlika);
    this.state.luqi && image.append("luqi", this.state.luqi);
    this.state.signailzation &&
      image.append("signailzation", this.state.signailzation);
    this.state.centralLock &&
      image.append("centralLock", this.state.centralLock);
    this.state.bortComp && image.append("bortComp", this.state.bortComp);
    this.state.conditioner &&
      image.append("conditioner", this.state.conditioner);
    this.state.antiMocureb &&
      image.append("antiMocureb", this.state.antiMocureb);
    this.state.parcingConttrol &&
      image.append("parcingConttrol", this.state.parcingConttrol);
    this.state.backVision && image.append("backVision", this.state.backVision);

    // rentTypeChecboxes
    this.state.finalPurchase &&
      image.append("finalPurchase", this.state.finalPurchase);
    this.state.rentDaily && image.append("rentDaily", this.state.rentDaily);
    this.state.insured && image.append("insured", this.state.insured);
    this.state.withDriver && image.append("withDriver", this.state.withDriver);

    // statement Id
    if (this.state.statementId) {
      image.append("statementId", this.state.statementId);
    }

    // user
    image.append(
      "userName",
      typeof this.state.userName === "string"
        ? this.state.userName
        : this.props.user && this.props.user.name
    );
    image.append(
      "phone",
      typeof this.state.phone === "string"
        ? this.state.phone
        : this.props.user && this.props.user.phone
        ? this.props.user.phone
        : ""
    );

    // debugger;
    image.append(
      "email",
      typeof this.state.email === "string"
        ? this.state.email
        : this.props.user && this.props.user.email
    );
    console.log(this.state.email);
    // debugger;
    image.append("address", this.state.address);

    axios
      .post("statement", image)
      .then((res) => {
        this.props.changeStaenmansSum("add");
        this.setState({
          loader: true,
        });

        this.setState({
          loadStatement: false,
        });

        setTimeout(() => {
          this.setState({
            loader: false,
          });
          debugger;
          Router.push("/profile/allStatement");
        }, 2000);
      })
      .catch((error) => {
        this.setState({
          loadStatement: false,
        });
        console.log(error.response);
        if (error.response) {
          console.log(error.response);
          var errorData = error.response.data.errors;
          this.setState(
            {
              categoryError: null,
              producerError: null,
              carModelError: null,
              locationError: null,
              textError: null,
              priceError: null,
            },
            () => {
              errorData.map((el, index) => {
                if (el.param == "category") {
                  this.setState({
                    categoryError: el.msg,
                  });
                } else if (el.param == "producer") {
                  this.setState({
                    producerError: el.msg,
                  });
                } else if (el.param == "carModel") {
                  this.setState({
                    carModelError: el.msg,
                  });
                } else if (el.param == "phone") {
                  this.setState({
                    phoneError: el.msg,
                  });
                } else if (el.param == "location") {
                  this.setState({
                    locationError: el.msg,
                  });
                } else if (el.param == "text") {
                  this.setState({
                    textError: el.msg,
                  });
                } else if (el.param == "price") {
                  this.setState({
                    priceError: el.msg,
                  });
                }
              });
            }
          );
        }
      });
  };

  render() {
    return (
      <>
        <div className="profile_main_content">
          <div
            className={classnames("profile_add_box", {
              add_anime: this.state.loader,
            })}
          >
            <span>
              {!this.state.statementId
                ? "განცხადება წარმატებით დაემატა..."
                : "განცხადება ჩასწორებულია"}
            </span>
          </div>
          <div className="profile_main_content_header">
            <div>
              <a href="" className="active">
                მანქანების გაქირავება
              </a>
              {/* <a href="">მანქანით მომსახურება</a> */}
            </div>
          </div>

          {this.state.statementId && (
            <h2 className="text-center m-4 redact_title">
              განცხადების რედაქტირება
            </h2>
          )}

          <div className="profile_main_inputs">
            <div className="profile_input_box">
              <div>
                <label className="select_with_img iconCategory">
                  კატეგორია
                </label>
                <Category
                  value={this.state.category}
                  changeHandlerfn={this.changeHandler}
                />
              </div>
              {this.state.categoryError ? (
                <span className="error_msg">{this.state.categoryError}</span>
              ) : null}
            </div>
            <div className="profile_input_box">
              <div>
                <label>გამოშვების წელი</label>
                <select
                  name="carAge"
                  value={this.state.carAge}
                  onChange={this.changeHandler}
                >
                  <option>აირჩიე</option>
                  {this.getYear()}
                </select>
              </div>
            </div>
            <div className="profile_input_box">
              <div>
                <label className="select_with_img iconManufactorer">
                  მწარმოებელი
                </label>
                <Producer
                  value={this.state.producer}
                  changeHandlerfn={this.changeHandler}
                />
              </div>
              {this.state.producerError ? (
                <span className="error_msg">{this.state.producerError}</span>
              ) : null}
            </div>

            <div className="profile_input_box">
              <div>
                <label className="select_with_img iconLocationl">
                  ადგილმდებარეობა
                </label>
                <Location
                  value={this.state.location}
                  changeHandlerfn={this.changeHandler}
                />
              </div>
              {this.state.locationError ? (
                <span className="error_msg">{this.state.locationError}</span>
              ) : null}
            </div>
            <div className="profile_input_box">
              <div>
                <label className="select_with_img iconModel">მოდელი</label>
                <CarModel
                  value={this.state.carModel}
                  changeHandlerfn={this.changeHandler}
                  producer={this.state.producer}
                />
              </div>
              {this.state.carModelError ? (
                <span className="error_msg">{this.state.carModelError}</span>
              ) : null}
            </div>

            <div className="profile_input_box">
              <div>
                <label className="select_with_img passangers">
                  პირთა ტევადობა
                </label>
                <Pessengers
                  value={this.state.Pessengers}
                  changeHandlerfn={this.changeHandler}
                />
              </div>
            </div>

            <div className="profile_input_box">
              <div>
                <label className="select_with_img engine_select">
                  ძრავის მოცულობა
                </label>
                <Engin
                  value={this.state.engin}
                  changeHandlerfn={this.changeHandler}
                />
              </div>
            </div>

            <div className="profile_input_box">
              <div>
                <label className="select_with_img iconOil">საწვავის ტიპი</label>

                <OilType
                  value={this.state.oilType}
                  changeHandlerfn={this.changeHandler}
                />
              </div>
            </div>

            <div className="profile_input_box">
              <div>
                <label className="select_with_img iconDoors">
                  {" "}
                  კარის რაოდენობა
                </label>
                <Doors
                  value={this.state.doors}
                  changeHandlerfn={this.changeHandler}
                />
              </div>
            </div>
          </div>

          <div className="drive_col">
            <label className="checkbox_container">
              საბოლოო შესყიდვით
              <input
                checked={this.state.finalPurchase}
                name="finalPurchase"
                onChange={this.changeHandler}
                type="checkbox"
              />
              <span className="checkmark"></span>
            </label>

            <label className="checkbox_container">
              ქირავდება დღიურად
              <input
                checked={this.state.rentDaily}
                name="rentDaily"
                onChange={this.changeHandler}
                type="checkbox"
              />
              <span className="checkmark"></span>
            </label>

            <label className="checkbox_container">
              ავტომობილი დაზღვეულია
              <input
                checked={this.state.insured}
                name="insured"
                onChange={this.changeHandler}
                type="checkbox"
              />
              <span className="checkmark"></span>
            </label>

            <label className="checkbox_container">
              ქირავდება მძღოლით
              <input
                checked={this.state.withDriver}
                name="withDriver"
                onChange={this.changeHandler}
                type="checkbox"
              />
              <span className="checkmark"></span>
            </label>
          </div>

          <div className="add_information">
            <div className="add-info_title">
              <span>დამატებითი ინფორმაცია</span>
            </div>
            <div className="checkbox_wrapper">
              <div className="checkbox_fluid">
                <label className="checkbox_container">
                  ნავიგაცია
                  <input
                    onChange={this.changeHandler}
                    name="navigation"
                    checked={this.state.navigation}
                    type="checkbox"
                  />
                  <span className="checkmark"></span>
                </label>
                <label className="checkbox_container">
                  ჰიდრავლიკა
                  <input
                    name="hidravlika"
                    checked={this.state.hidravlika}
                    onChange={this.changeHandler}
                    type="checkbox"
                  />
                  <span className="checkmark"></span>
                </label>
                <label className="checkbox_container">
                  ლუქი
                  <input
                    name="luqi"
                    checked={this.state.luqi}
                    onChange={this.changeHandler}
                    type="checkbox"
                  />
                  <span className="checkmark"></span>
                </label>
                <label className="checkbox_container">
                  სიგნალიზაცია
                  <input
                    name="signailzation"
                    checked={this.state.signailzation}
                    onChange={this.changeHandler}
                    type="checkbox"
                  />
                  <span className="checkmark"></span>
                </label>

                <label className="checkbox_container">
                  ცენტრალური საკეტი
                  <input
                    name="centralLock"
                    checked={this.state.centralLock}
                    onChange={this.changeHandler}
                    type="checkbox"
                  />
                  <span className="checkmark"></span>
                </label>

                <label className="checkbox_container">
                  ბორტკომპიუტერი
                  <input
                    name="bortComp"
                    checked={this.state.bortComp}
                    onChange={this.changeHandler}
                    type="checkbox"
                  />
                  <span className="checkmark"></span>
                </label>

                <label className="checkbox_container">
                  კონდიციონერი
                  <input
                    name="conditioner"
                    checked={this.state.conditioner}
                    onChange={this.changeHandler}
                    type="checkbox"
                  />
                  <span className="checkmark"></span>
                </label>

                <label className="checkbox_container">
                  მოცურების საწინააღმდეგო
                  <input
                    name="antiMocureb"
                    checked={this.state.antiMocureb}
                    onChange={this.changeHandler}
                    type="checkbox"
                  />
                  <span className="checkmark"></span>
                </label>

                <label className="checkbox_container">
                  პარკინგკონტროლი
                  <input
                    name="parcingConttrol"
                    checked={this.state.parcingConttrol}
                    onChange={this.changeHandler}
                    type="checkbox"
                  />
                  <span className="checkmark"></span>
                </label>
                <label className="checkbox_container">
                  უკანა ხედვის კამერა
                  <input
                    name="backVision"
                    checked={this.state.backVision}
                    onChange={this.changeHandler}
                    type="checkbox"
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
              {/* <div className="checkbox_right_content">
                <div>
                  <label>ფერი</label>
                  <input type="text" />
                </div>

                <div>
                  <label>აირგაბი</label>
                  <input type="text" />
                </div>

                <div>
                  <label>ცილინდრები</label>
                  <input type="text" />
                </div>
              </div> */}
            </div>
          </div>

          <div className="price_info_fluid">
            <div className="price_box">
              <span>ფასი(1 დღის)</span>
              <label>
                <img src="/imgs/price.png" />

                <input
                  type="number"
                  onChange={this.changeHandler}
                  name="price"
                  value={this.state.price}
                  placeholder="- - -"
                />
                <span>₾</span>
              </label>
              {this.state.priceError ? (
                <span className="error_msg">{this.state.priceError}</span>
              ) : null}
            </div>

            {/* <div className="price_days_fluid">
              <span>ფასი დღეეების მიხედვით</span>
              <div className="price_days_box">
                <div className="price_days_up">
                  <div>დღე</div>
                  <div>1</div>
                  <div>1/3</div>
                  <div>1/3</div>
                  <div>1/3</div>
                </div>

                <div className="price_days_down">
                  <div>₾</div>
                  <div>
                    <input type="number" />
                  </div>
                  <div>
                    <input type="number" />
                  </div>
                  <div>
                    <input type="number" />
                  </div>
                  <div>
                    <input type="number" />
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className="contact_info_fluid">
            <span>ატვირთეთ ფოტოები</span>

            <div className="imageUploadContainer d-flex mt-5">
              <div
                className={classnames("imgUload", {
                  "disable-upload": this.state.images.length == 5,
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
                    <input
                      name="userName"
                      onChange={this.changeHandler}
                      value={
                        typeof this.state.userName === "string"
                          ? this.state.userName
                          : this.props.user && this.props.user.name
                      }
                      type="text"
                      placeholder="სახელი გვარი"
                    />
                  </div>

                  <div
                    style={{ position: "relative" }}
                    className="contact_label "
                  >
                    <label>
                      <img src="/imgs/phone.png" />
                    </label>

                    <input
                      type="number"
                      name="phone"
                      onChange={this.changeHandler}
                      value={
                        typeof this.state.phone === "string"
                          ? this.state.phone
                          : this.props.user && this.props.user.phone
                      }
                      placeholder="ტელეფონი"
                    />

                    {this.state.phoneError ? (
                      <span
                        style={{
                          position: "absolute",
                          bottom: "-14px",
                          fontSize: "10px",
                        }}
                        className="error_msg"
                      >
                        {this.state.phoneError}
                      </span>
                    ) : null}
                  </div>

                  <div className="contact_label">
                    <label>
                      <img src="/imgs/ma.png" />
                    </label>
                    <input
                      name="email"
                      onChange={this.changeHandler}
                      value={
                        typeof this.state.email === "string"
                          ? this.state.email
                          : this.props.user && this.props.user.email
                      }
                      type="email"
                      placeholder="მეილი"
                    />
                  </div>

                  <div className="contact_label">
                    <label>
                      <img src="/imgs/loc.png" />
                    </label>
                    <input
                      name="address"
                      onChange={this.changeHandler}
                      value={this.state.address}
                      type="text"
                      placeholder="ლოკაცია"
                    />
                  </div>
                </div>
              </div>
              <div className="profile_textarea">
                <span>დაამატე აღწერა</span>
                <textarea
                  name="text"
                  onChange={this.changeHandler}
                  value={this.state.text}
                  placeholder="დაამატე აღწერა"
                ></textarea>
                {this.state.textError ? (
                  <span className="error_msg">{this.state.textError}</span>
                ) : null}
              </div>
            </div>
            <div className="up_button_fluid">
              <button
                disabled={this.state.loadStatement}
                onClick={this.saveStatement}
                className="up_button add statementBtn d-flex aling-items-center"
              >
                {this.state.loadStatement
                  ? "იგზავნება..."
                  : this.state.statementId
                  ? " განცხადების რედაქტირება"
                  : "გამოქვეყნება"}
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default connect((state) => ({ user: state.auth.user }))(ProfileFluid);
