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
import Card from "../home/card";

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
    searchString: null,
    statements: [],
  };

  componentDidMount() {
    console.log(Router.router.query);
    let token = Cookies.get("token");
    axios
      .get("statement/search", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: Router.router.query,
      })
      .then((res) => {
        console.log(res.data);
        this.setState({
          statements: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
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

  handeleSearch = (e) => {
    e.preventDefault();
    Router.push({
      pathname: "/search",
      query: {
        searchString: this.state.searchString,
        oilType: this.state.oilType,
        producer: this.state.producer,
      },
    });
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
                {this.state.statements.map((el) => {
                  return (
                    <div className="col-md-3">
                      {" "}
                      <Card data={el} />{" "}
                    </div>
                  );
                })}
                //////
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default searchComponent;
