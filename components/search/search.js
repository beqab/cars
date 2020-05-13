import React, { Component } from "react";
import axios from "axios";
import JVTdecode from "jwt-decode";
import { regValidation } from "../validator/validation";
import classname from "classnames";
import { connect } from "react-redux";
import { setCurrentUser } from "../../redux/auth/authActions";
import Link from "next/link";
// import Router from "next/router";
import Router, { useRouter } from "next/router";
import Cookies from "js-cookie";

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

class searchComponent extends Component {
  state = {
    producer: null,
    location: null,
    carModel: null,
    oilType: null,
  };

  componentDidMount() {
    // console.log(Router.router.query);
    let token = Cookies.get("token");
    axios.get("statement/myall", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // debugger;
  }

  changeHandler = (e) => {
    // console.log(e.target.name, e.target.value, ":chng");
    if (e.target.type === "checkbox") {
      this.setState({
        [e.target.name]: e.target.checked,
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };
  render() {
    return (
      <div class="search_results_fluid">
        <div className="search_filter">
          <div className="filters">
            <form>
              <div class="top_search">
                <input type="text" name="" placeholder="ძებნა" />
                <button>
                  <img src="/imgs/search.png" />
                </button>
              </div>

              <div className="filter_body">
                <div>
                  {/* <label>მწარმოებელი</label> */}
                  <Producer
                    changeHandlerfn={this.changeHandler}
                    defaultValue="მწარმოებელი"
                  />
                </div>

                <div>
                  {/* <label>მწარმოებელი</label> */}
                  <CarModel
                    value={this.state.carModel}
                    changeHandlerfn={this.changeHandler}
                    producer={this.state.producer}
                    defaultValue="მანქანის მოდელი"
                  />
                </div>

                <div>
                  {/* <label>მწარმოებელი</label> */}
                  <Location
                    value={this.state.location}
                    changeHandlerfn={this.changeHandler}
                    defaultValue="ქალაქი"
                  />
                </div>

                <div>
                  {/* <label>მწარმოებელი</label> */}
                  <OilType
                    value={this.state.oilType}
                    changeHandlerfn={this.changeHandler}
                    defaultValue="საწვავის ტიპი"
                  />
                </div>
              </div>

              <div class="price_filter">
                <label>ფასი</label>
                <div>
                  <input type="number" placeholder="დან" />
                  <input type="number" placeholder="მდე" />
                </div>
              </div>

              <div className="common_checkbox">
                <label class="checkbox_container">
                  მძღოლით
                  <input type="radio" name="driver" />
                  <span class="checkmark"></span>
                </label>

                <label class="checkbox_container">
                  მძღოლის გარეშე
                  <input type="radio" name="driver" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="common_checkbox">
                <label class="checkbox_container">
                  საჭე მარჯვნივ
                  <input type="radio" name="drive" />
                  <span class="checkmark"></span>
                </label>

                <label class="checkbox_container">
                  საჭე მარცხნივ
                  <input type="radio" name="drive" />
                  <span class="checkmark"></span>
                </label>
              </div>

              <div className="button">
                <button>ძებნა</button>
              </div>
            </form>
          </div>
        </div>
        <div className="search_results">
          <div className="vip_info">
            <span>(230) VIP განცხადება</span>
          </div>

          <div className="home-car_section">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-3">
                  <div className="common_car_box">
                    <div className="vip">
                      <img src="/imgs/vip.png" alt="" />
                    </div>
                    <div className="common_box_img">
                      <a href="">
                        <img
                          src="https://images.unsplash.com/photo-1505592225030-dad7a0531844?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="common_box_body">
                      <div>
                        <h2>
                          <a href="">
                            {/* {el.producer} {el.carModel} */}
                            BMW
                          </a>
                        </h2>
                        <div className="car_common_properties">
                          <div>
                            <img src="/imgs/loc.png" /> <span>A</span>
                          </div>
                          <div>
                            <img src="/imgs/loc.png" /> <span>5</span>
                          </div>
                          <div>
                            <img src="/imgs/loc.png" /> <span>მარჯვენა</span>
                          </div>
                          <div>
                            <img src="/imgs/loc.png" /> <span>დიზელი</span>
                          </div>
                        </div>
                      </div>
                      <div className="common_car_contact_info">
                        <span>თორნიკე 444 444 444</span>
                        <span>თბილისი</span>
                      </div>
                      <div className="common_car_price_fluid">
                        <div className="common_car_price">
                          <span>33 ₾</span>
                        </div>
                        <div className="common_car_days">
                          <div className="common_car_up">
                            <span>დ</span>
                            <span>1-3</span>
                            <span>4-7</span>
                            <span>>7</span>
                          </div>
                          <div className="common_car_down">
                            <span>ლ</span>
                            <span>50</span>
                            <span>50</span>
                            <span>80</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-3">
                  <div className="common_car_box">
                    <div className="vip">
                      <img src="/imgs/vip.png" alt="" />
                    </div>
                    <div className="common_box_img">
                      <a>
                        <img
                          src="https://images.unsplash.com/photo-1505592225030-dad7a0531844?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="common_box_body">
                      <div>
                        <h2>
                          <a href="">
                            {/* {el.producer} {el.carModel} */}
                            BMW
                          </a>
                        </h2>
                        <div className="car_common_properties">
                          <div>
                            <img src="/imgs/loc.png" /> <span>A</span>
                          </div>
                          <div>
                            <img src="/imgs/loc.png" /> <span>5</span>
                          </div>
                          <div>
                            <img src="/imgs/loc.png" /> <span>მარჯვენა</span>
                          </div>
                          <div>
                            <img src="/imgs/loc.png" /> <span>დიზელი</span>
                          </div>
                          <div>
                            <img src="/imgs/loc.png" /> <span>დიზელი</span>
                          </div>
                          <div>
                            <img src="/imgs/loc.png" /> <span>დიზელი</span>
                          </div>
                        </div>
                      </div>
                      <div className="common_car_contact_info">
                        <span>თორნიკე 444 444 444</span>
                        <span>თბილისი</span>
                      </div>
                      <div className="common_car_price_fluid">
                        <div className="common_car_price">
                          <span>33</span>
                        </div>
                        <div className="common_car_days">
                          <div className="common_car_up">
                            <span>დ</span>
                            <span>1-3</span>
                            <span>4-7</span>
                            <span>>7</span>
                          </div>
                          <div className="common_car_down">
                            <span>ლ</span>
                            <span>50</span>
                            <span>50</span>
                            <span>80</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default searchComponent;
