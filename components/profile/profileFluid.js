import React, { Component } from "react";
import AddStatement from "./addStatement";
import classnames from "classnames";
import cars from "./carsApi.json";
import axios from "axios";

class ProfileFluid extends Component {
  state = {
    imgs: [],
    defaultImgIndex: 0,
    producer: null,
    category: null,
    location: null,
    carAge: null,
    engin: null,
    carModel: null,
    doors: null,
    text: null,
    price: "40 ლარი",
  };
  fileInput = React.createRef();

  fileSelectedHandler = (event) => {
    console.log(this.state.imgs.length);

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

  getCarModels = () => {
    let options = [];
    if (this.state.producer) {
      cars.forEach((element, i) => {
        if (element.name === this.state.producer) {
          element[`${element.name}Options`].forEach((option, index) => {
            console.log(option);
            options.push(
              <option
                key="i"
                selected={this.state.carModel == option.model_name}
                value={option.model_name}
              >
                {option.model_name}
              </option>
            );
          });
        }
      });
    }

    return options;
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
    let reqData = {
      category: this.state.category,
      location: this.state.location,
      producer: this.state.producer,
      carAge: this.state.carAge,
      engin: this.state.engin,
      carModel: this.state.carModel,
      doors: this.state.doors,
      text: this.state.text,
      price: this.state.price,
    };

    axios.post("statement", reqData).then((res) => {
      this.props.changeStaenmansSum("add");
      alert("added");
    });
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
              <select name="category" onChange={this.changeHandler}>
                <option>არჩევა</option>
                <option
                  selected={this.state.category === "სედანი"}
                  value="სედანი"
                >
                  სედანი
                </option>
                <option selected={this.state.category === "ჯიპი"} value="ჯიპი">
                  ჯიპი
                </option>
                <option selected={this.state.category === "კუპე"} value="კუპე">
                  კუპე
                </option>
                <option
                  selected={this.state.category === "ჰეჩბექი"}
                  value="ჰეჩბექი"
                >
                  ჰეჩბექი
                </option>
                <option
                  selected={this.state.category === "კაბრიოლეტი"}
                  value="კაბრიოლეტი"
                >
                  კაბრიოლეტი
                </option>
                <option
                  selected={this.state.category === "უნივერსალი"}
                  value="უნივერსალი"
                >
                  უნივერსალი
                </option>
                <option
                  selected={this.state.category === "პიკაპი"}
                  value="პიკაპი"
                >
                  პიკაპი
                </option>
                <option
                  selected={this.state.category === "მიკროავტობუსი"}
                  value="მიკროავტობუსი"
                >
                  მიკროავტობუსი
                </option>
                <option
                  selected={this.state.category === "ფურგონი"}
                  value="ფურგონი"
                >
                  ფურგონი
                </option>
                <option
                  selected={this.state.category === "ლიმუზინი"}
                  value="ლიმუზინი"
                >
                  ლიმუზინი
                </option>
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
              </select>
            </div>

            <div className="profile_input_box">
              <label>მოდელი</label>
              <select name="carModel" onChange={this.changeHandler}>
                <option>აირჩიე</option>
                {this.getCarModels()}
              </select>
            </div>

            <div className="profile_input_box">
              <label>ადგილმდებარეობა</label>
              <select name="location" onChange={this.changeHandler}>
                {/* <option>აირჩიე</option> */}
                <option
                  selected={this.state.location === "თბილისი"}
                  value=" თბილისი"
                >
                  თბილისი
                </option>
                <option
                  selected={this.state.location === "ქუთაისი"}
                  value=" ქუთაისი"
                >
                  ქუთაისი
                </option>
                <option
                  selected={this.state.location === "ბათუმი"}
                  value=" ბათუმი"
                >
                  ბათუმი
                </option>
                <option selected={this.state.location === "ფოთი"} value=" ფოთი">
                  ფოთი
                </option>
                <option
                  selected={this.state.location === "რუსთავი"}
                  value=" რუსთავი"
                >
                  რუსთავი
                </option>
                <option
                  selected={this.state.location === "ჩხოროწყუ"}
                  value=" ჩხოროწყუ"
                >
                  ჩხოროწყუ
                </option>
                <option
                  selected={this.state.location === "ჭიათურა"}
                  value=" ჭიათურა"
                >
                  ჭიათურა
                </option>
                <option
                  selected={this.state.location === "მარტვილი"}
                  value=" მარტვილი"
                >
                  მარტვილი
                </option>
                <option
                  selected={this.state.location === "გურჯაანი"}
                  value=" გურჯაანი"
                >
                  გურჯაანი
                </option>
                <option
                  selected={this.state.location === "საგარეჯო"}
                  value=" საგარეჯო"
                >
                  საგარეჯო
                </option>
                <option
                  selected={this.state.location === "კასპი"}
                  value=" კასპი"
                >
                  კასპი
                </option>
                <option
                  selected={this.state.location === "ბორჯომი"}
                  value=" ბორჯომი"
                >
                  ბორჯომი
                </option>
                <option
                  selected={this.state.location === "დუშეთი"}
                  value=" დუშეთი"
                >
                  დუშეთი
                </option>
                <option
                  selected={this.state.location === "ახმეტა"}
                  value=" ახმეტა"
                >
                  ახმეტა
                </option>
                <option
                  selected={this.state.location === "ზესტაფონი"}
                  value=" ზესტაფონი"
                >
                  ზესტაფონი
                </option>
                <option
                  selected={this.state.location === "ლაგოდეხი"}
                  value=" ლაგოდეხი"
                >
                  ლაგოდეხი
                </option>
                <option
                  selected={this.state.location === "ახალციხე"}
                  value=" ახალციხე"
                >
                  ახალციხე
                </option>
                <option
                  selected={this.state.location === "ქობულეთი"}
                  value=" ქობულეთი"
                >
                  ქობულეთი
                </option>
                <option
                  selected={this.state.location === "სოხუმი"}
                  value=" სოხუმი"
                >
                  სოხუმი
                </option>
                <option
                  selected={this.state.location === "ცხინვალი"}
                  value=" ცხინვალი"
                >
                  ცხინვალი
                </option>
                <option
                  selected={this.state.location === "თელავი"}
                  value=" თელავი"
                >
                  თელავი
                </option>
                <option
                  selected={this.state.location === "ზუგდიდი"}
                  value=" ზუგდიდი"
                >
                  ზუგდიდი
                </option>
                <option
                  selected={this.state.location === "ოზურგეთი"}
                  value=" ოზურგეთი"
                >
                  ოზურგეთი
                </option>
                <option
                  selected={this.state.location === "ამბროლაური"}
                  value=" ამბროლაური"
                >
                  ამბროლაური
                </option>
                <option
                  selected={this.state.location === "მცხეთა"}
                  value=" მცხეთა"
                >
                  მცხეთა
                </option>
                <option
                  selected={this.state.location === "ახალქალაქი"}
                  value=" ახალქალაქი"
                >
                  ახალქალაქი
                </option>
                <option selected={this.state.location === "გორი"} value=" გორი">
                  გორი
                </option>
                <option
                  selected={this.state.location === "ხაშური"}
                  value=" ხაშური"
                >
                  ხაშური
                </option>
                <option
                  selected={this.state.location === "სენაკი"}
                  value=" სენაკი"
                >
                  სენაკი
                </option>
                <option
                  selected={this.state.location === "სიღნაღი"}
                  value=" სიღნაღი"
                >
                  სიღნაღი
                </option>
                <option
                  selected={this.state.location === "ქარელი"}
                  value=" ქარელი"
                >
                  ქარელი
                </option>
                <option
                  selected={this.state.location === "მარნეული"}
                  value=" მარნეული"
                >
                  მარნეული
                </option>
                <option
                  selected={this.state.location === "გარდაბანი"}
                  value=" გარდაბანი"
                >
                  გარდაბანი
                </option>
                <option
                  selected={this.state.location === "სამტრედია"}
                  value=" სამტრედია"
                >
                  სამტრედია
                </option>
                <option
                  selected={this.state.location === "მესტია"}
                  value=" მესტია"
                >
                  მესტია
                </option>
                <option
                  selected={this.state.location === "საჩხერე"}
                  value=" საჩხერე"
                >
                  საჩხერე
                </option>
                <option selected={this.state.location === "ხობი"} value=" ხობი">
                  ხობი
                </option>
                <option
                  selected={this.state.location === "თიანეთი"}
                  value=" თიანეთი"
                >
                  თიანეთი
                </option>
                <option
                  selected={this.state.location === "ყვარელი"}
                  value=" ყვარელი"
                >
                  ყვარელი
                </option>
                <option
                  selected={this.state.location === "ტყიბული"}
                  value=" ტყიბული"
                >
                  ტყიბული
                </option>
                <option
                  selected={this.state.location === "დედოფლისწყარო"}
                  value=" დედოფლისწყარო"
                >
                  დედოფლისწყარო
                </option>
                <option selected={this.state.location === "ონი"} value=" ონი">
                  ონი
                </option>
                <option
                  selected={this.state.location === "ბოლნისი"}
                  value=" ბოლნისი"
                >
                  ბოლნისი
                </option>
                <option
                  selected={this.state.location === "წყალტუბო"}
                  value=" წყალტუბო"
                >
                  წყალტუბო
                </option>
                <option
                  selected={this.state.location === "თეთრიწყარო"}
                  value=" თეთრიწყარო"
                >
                  თეთრიწყარო
                </option>
                <option
                  selected={this.state.location === "თიანეთი"}
                  value=" თიანეთი"
                >
                  თიანეთი
                </option>
                <option
                  selected={this.state.location === "ჟინვალი"}
                  value=" ჟინვალი"
                >
                  ჟინვალი
                </option>
              </select>
            </div>

            <div className="profile_input_box">
              <label>გამოშვების წელი</label>
              <select name="carAge" onChange={this.changeHandler}>
                <option>აირჩიე</option>
                {this.getYear()}
              </select>
            </div>

            <div className="profile_input_box">
              <label> პირთა ტევადობა</label>
              <select>
                <option value="1"> 1</option>
                <option value="2"> 2</option>
                <option value="3"> 3</option>
                <option value="4"> 4</option>
                <option value="5"> 5</option>
                <option value="6"> 6</option>
                <option value="7"> 7</option>
                <option value="8"> 8</option>
                <option value="9"> 9</option>
                <option value=">9"> >9</option>
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
              <select name="engin" onChange={this.changeHandler}>
                <option>აირჩიე</option>
                <option value="50">0.05</option>
                <option value="100">0.1</option>
                <option value="200">0.2</option>
                <option value="300">0.3</option>
                <option value="400">0.4</option>
                <option value="500">0.5</option>
                <option value="600">0.6</option>
                <option value="700">0.7</option>
                <option value="800">0.8</option>
                <option value="900">0.9</option>
                <option value="1000">1.0</option>
                <option value="1100">1.1</option>
                <option value="1200">1.2</option>
                <option value="1300">1.3</option>
                <option value="1400">1.4</option>
                <option value="1500">1.5</option>
                <option value="1600">1.6</option>
                <option value="1700">1.7</option>
                <option value="1800">1.8</option>
                <option value="1900">1.9</option>
                <option value="2000">2.0</option>
                <option value="2100">2.1</option>
                <option value="2200">2.2</option>
                <option value="2300">2.3</option>
                <option value="2400">2.4</option>
                <option value="2500">2.5</option>
                <option value="2600">2.6</option>
                <option value="2700">2.7</option>
                <option value="2800">2.8</option>
                <option value="2900">2.9</option>
                <option value="3000">3.0</option>
                <option value="3100">3.1</option>
                <option value="3200">3.2</option>
                <option value="3300">3.3</option>
                <option value="3400">3.4</option>
                <option value="3500">3.5</option>
                <option value="3600">3.6</option>
                <option value="3700">3.7</option>
                <option value="3800">3.8</option>
                <option value="3900">3.9</option>
                <option value="4000">4.0</option>
                <option value="4100">4.1</option>
                <option value="4200">4.2</option>
                <option value="4300">4.3</option>
                <option value="4400">4.4</option>
                <option value="4500">4.5</option>
                <option value="4600">4.6</option>
                <option value="4700">4.7</option>
                <option value="4800">4.8</option>
                <option value="4900">4.9</option>
                <option value="5000">5.0</option>
                <option value="5100">5.1</option>
                <option value="5200">5.2</option>
                <option value="5300">5.3</option>
                <option value="5400">5.4</option>
                <option value="5500">5.5</option>
                <option value="5600">5.6</option>
                <option value="5700">5.7</option>
                <option value="5800">5.8</option>
                <option value="5900">5.9</option>
                <option value="6000">6.0</option>
                <option value="6100">6.1</option>
                <option value="6200">6.2</option>
                <option value="6300">6.3</option>
                <option value="6400">6.4</option>
                <option value="6500">6.5</option>
                <option value="6600">6.6</option>
                <option value="6700">6.7</option>
                <option value="6800">6.8</option>
                <option value="6900">6.9</option>
                <option value="7000">7.0</option>
                <option value="7100">7.1</option>
                <option value="7200">7.2</option>
                <option value="7300">7.3</option>
                <option value="7400">7.4</option>
                <option value="7500">7.5</option>
                <option value="7600">7.6</option>
                <option value="7700">7.7</option>
                <option value="7800">7.8</option>
                <option value="7900">7.9</option>
                <option value="8000">8.0</option>
                <option value="8100">8.1</option>
                <option value="8200">8.2</option>
                <option value="8300">8.3</option>
                <option value="8400">8.4</option>
                <option value="8500">8.5</option>
                <option value="8600">8.6</option>
                <option value="8700">8.7</option>
                <option value="8800">8.8</option>
                <option value="8900">8.9</option>
                <option value="9000">9.0</option>
                <option value="9100">9.1</option>
                <option value="9200">9.2</option>
                <option value="9300">9.3</option>
                <option value="9400">9.4</option>
                <option value="9500">9.5</option>
                <option value="9600">9.6</option>
                <option value="9700">9.7</option>
                <option value="9800">9.8</option>
                <option value="9900">9.9</option>
                <option value="10000">10.0</option>
                <option value="10100">10.1</option>
                <option value="10200">10.2</option>
                <option value="10300">10.3</option>
                <option value="10400">10.4</option>
                <option value="10500">10.5</option>
                <option value="10600">10.6</option>
                <option value="10700">10.7</option>
                <option value="10800">10.8</option>
                <option value="10900">10.9</option>
                <option value="11000">11.0</option>
                <option value="11100">11.1</option>
                <option value="11200">11.2</option>
                <option value="11300">11.3</option>
                <option value="11400">11.4</option>
                <option value="11500">11.5</option>
                <option value="11600">11.6</option>
                <option value="11700">11.7</option>
                <option value="11800">11.8</option>
                <option value="11900">11.9</option>
                <option value="12000">12.0</option>
                <option value="12100">12.1</option>
                <option value="12200">12.2</option>
                <option value="12300">12.3</option>
                <option value="12400">12.4</option>
                <option value="12500">12.5</option>
                <option value="12600">12.6</option>
                <option value="12700">12.7</option>
                <option value="12800">12.8</option>
                <option value="12900">12.9</option>
                <option value="13000">13.0</option>
              </select>
            </div>

            <div className="profile_input_box">
              <label className="flue_select">საწვავის ტიპი</label>
              <select>
                <option value="ბენზინი">ბენზინი</option>
                <option value="დიზელი">დიზელი</option>
                <option value="ელექტრო">ელექტრო</option>
                <option value="წყალბადი">წყალბადი</option>
                <option value="ჰიბრიდი">ჰიბრიდი</option>
                <option value="დატენვადი ჰიბრიდი">დატენვადი ჰიბრიდი</option>
                <option value="ბუნებრივი აირი">ბუნებრივი აირი</option>
                <option value="თხევადი გაზი">თხევადი გაზი</option>
              </select>
            </div>

            <div className="profile_input_box">
              <label className="door_select"> კარის რაოდენობა</label>
              <select name="doors">
                <option>არჩევა</option>
                <option value="2">2</option>
                <option value="4">4</option>
                <option value=">4">>4</option>
              </select>
            </div>
          </div>
          <div className="contact_info_fluid">
            <div className="imageUploadContainer d-flex mt-5">
              <div
                className={classnames("imgUload", {
                  "disable-upload": this.state.imgs.length == 5,
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
                <textarea
                  name="text"
                  onChange={this.changeHandler}
                  value={this.state.text}
                  placeholder="სხვა მახასიათებლები"
                ></textarea>
              </div>
            </div>
            <div className="up_button_fluid">
              <button onClick={this.saveStatement} className="up_button">
                გამოქვეყნება
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProfileFluid;
