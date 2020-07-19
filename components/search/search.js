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
    endPrice: null,
    startPrice: null,
    withDriver: null,
    statements: [],

    startIndex: 0,

    statemetnsInPage: 6,
  };

  fetchStatemetns = async () => {
    let token = Cookies.get("token");
    try {
      const { data: Data } = await axios.get("statement/search", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: Router.router.query,
      });
      this.setState({
        statements: Data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    console.log(Router.router.query);
    this.fetchStatemetns();
    this.setState({
      ...Router.router.query,
    });
    // debugger;
  }

  changeHandler = (e) => {
    // console.log(e.target.name, e.target.value, ":chng");
    if (e.target.type === "checkbox") {
      this.setState(
        {
          [e.target.name]: e.target.checked,
        },
        () => {
          this.pushRoute();
        }
      );
    } else {
      this.setState(
        {
          [e.target.name]: e.target.value,
        },
        () => {
          this.pushRoute();
        }
      );
    }
  };

  pushRoute = () => {
    Router.push({
      pathname: "/search",
      query: {
        searchString: this.state.searchString,
        oilType: this.state.oilType,
        producer: this.state.producer,
        location: this.state.location,
        carModel: this.state.carModel,
        startPrice: this.state.startPrice,
        endPrice: this.state.endPrice,
        withDriver: this.state.withDriver,
        engin: this.state.engin,
        startIndex: this.state.startIndex,
      },
    });
  };

  handeleSearch = (e) => {
    e.preventDefault();

    // console.log(this.state.producer);
    // debugger;

    this.fetchStatemetns();
  };

  getStatmentsByPage = (startIndex) => {
    // let index = 0;
    if (this.state.statements.length > 0) {
      return this.state.statements
        .slice(
          (this.state.startIndex - 1) * this.state.statemetnsInPage,
          (this.state.startIndex - 1) * this.state.statemetnsInPage +
            this.state.statemetnsInPage
        )
        .map((el) => {
          // debugger;
          // index++;
          // if (index > 6) return;

          return (
            <div className="col-md-3">
              {" "}
              <Card data={el} />{" "}
            </div>
          );
        });
    }
    // this.state.statements.length > 0 &&
  };

  setPaageIndex = (i) => {
    this.setState(
      {
        startIndex: i,
      },
      () => {
        this.pushRoute();
      }
    );
  };

  getPagination = () => {
    let statementsSum = this.state.statements.length;
    console.log(Math.ceil(statementsSum / 6));
    // debugger;
    let getPagination = [];
    for (
      let index = 0;
      index < Math.ceil(statementsSum / this.state.statemetnsInPage);
      index++
    ) {
      getPagination.push(
        <span
          className={this.state.startIndex == index + 1 && "active"}
          onClick={() => this.setPaageIndex(index + 1)}
        >
          {index + 1}
        </span>
      );
    }

    return getPagination;
  };

  render() {
    return (
      <div class="search_results_fluid">
        <div className="search_filter">
          <div className="filters">
            <form>
              <div class="top_search">
                <input
                  onChange={this.changeHandler}
                  name="searchString"
                  placeholder="ძებნა"
                  value={this.state.searchString}
                />
                <button onClick={this.handeleSearch}>
                  <img src="/imgs/search.png" />
                </button>
              </div>

              <div className="filter_body">
                <div>
                  {/* <label>მწარმოებელი</label> */}
                  <Producer
                    changeHandlerfn={this.changeHandler}
                    defaultValue={"მწარმოებელი"}
                    value={this.state.producer}
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

                <div>
                  {/* <label>მწარმოებელი</label> */}
                  <Engin
                    value={this.state.engin}
                    changeHandlerfn={this.changeHandler}
                    defaultValue="ძრავის მოცულობა"
                  />
                </div>
                <div>
                  {/* <label>მწარმოებელი</label> */}
                  <Pessengers
                    value={this.state.Pessengers}
                    changeHandlerfn={this.changeHandler}
                    defaultValue="პირთა ტევადობა"
                  />
                </div>
              </div>

              <div class="price_filter">
                <label>ფასი</label>
                <div>
                  <input
                    onChange={this.changeHandler}
                    name="startPrice"
                    type="number"
                    placeholder="დან"
                    value={this.state.startPrice}
                  />
                  <input
                    onChange={this.changeHandler}
                    name="endPrice"
                    type="number"
                    placeholder="მდე"
                    value={this.state.endPrice}
                  />
                </div>
              </div>

              <div className="common_checkbox">
                <label class="checkbox_container">
                  მძღოლით
                  <input
                    onChange={this.changeHandler}
                    type="checkbox"
                    name="withDriver"
                    value={this.state.withDriver}
                  />
                  <span class="checkmark"></span>
                </label>

                {/* <label class="checkbox_container">
                  მძღოლის გარეშე
                  <input
                    onChange={this.changeHandler}
                    type="checkbox"
                    name="withDriver"
                    value={this.state.withDriver}
                  />
                  <span class="checkmark"></span>
                </label> */}
              </div>
              {/* <div className="common_checkbox">
                <label class="checkbox_container">
                  საჭე მარჯვნივ
                  <input
                    onChange={this.changeHandler}
                    type="radio"
                    name="drive"
                  />
                  <span class="checkmark"></span>
                </label>

                <label class="checkbox_container">
                  საჭე მარცხნივ
                  <input
                    onChange={this.changeHandler}
                    type="radio"
                    name="drive"
                  />
                  <span class="checkmark"></span>
                </label>
              </div> */}

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
                {/* {this.state.statements.map((el) => {
                  return (
                    <div className="col-md-3">
                      {" "}
                      <Card data={el} />{" "}
                    </div>
                  );
                })} */}
                {this.getStatmentsByPage(1)}
                //////
              </div>
              {/* <bt /> */}
              <hr />
              <div className="pagination">
                <button
                  disabled={this.state.startIndex <= 1}
                  onClick={() => {
                    this.setPaageIndex(Number(this.state.startIndex) - 1);
                  }}
                >
                  {"უკან <"}{" "}
                </button>

                {this.getPagination()}
                <button
                  disabled={
                    this.state.startIndex >=
                    Math.ceil(
                      this.state.statements.length / this.state.statemetnsInPage
                    )
                  }
                  onClick={() => {
                    this.setPaageIndex(Number(this.state.startIndex) + 1);
                  }}
                >
                  {"წინგ >"}{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default searchComponent;
