import React, { Component } from "react";
import HomeCar from "./HomeCarSection";
import Router from "next/router";
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
class Home extends Component {
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
    oilType: null,
    Pessengers: null,
    endPrice: null,
    startPrice: null,
    text: null,
    price: "40 ლარი",
    searchString: "",
  };

  changeHandler = (e) => {
    console.log(e.target.name, e.target.value, ":chng");
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handeleSearch = (e) => {
    e.preventDefault();
    Router.push({
      pathname: "/search",
      query: {
        searchString: this.state.searchString,
        oilType: this.state.oilType,
        producer: this.state.producer,
        location: this.state.location,
        carModel: this.state.carModel,
        oilType: this.state.oilType,
        endPrice: this.state.endPrice,
        startPrice: this.state.startPrice,
        engin: this.state.engin,
      },
    });
  };

  render() {
    return (
      <>
        <main id="home_main">
          <div className="filters">
            <form action="/search">
              <div className="top_search">
                <input
                  name="searchString"
                  onChange={this.changeHandler}
                  placeholder="ძებნა"
                />
                <button onClick={(e) => this.handeleSearch(e)}>
                  <img src="/imgs/search.png" />
                </button>
              </div>
              <div className="filter_body">
                <div>
                  <label>მწარმოებელი</label>
                  <Producer changeHandlerfn={this.changeHandler} />
                </div>
                <div>
                  <label>ქალაქი</label>
                  <Location
                    value={this.state.location}
                    changeHandlerfn={this.changeHandler}
                  />
                </div>
                <div>
                  <label>მოდელი</label>
                  <CarModel
                    value={this.state.carModel}
                    changeHandlerfn={this.changeHandler}
                    producer={this.state.producer}
                  />
                </div>

                <div>
                  <label>ძრავის მოცულობა</label>
                  <Engin
                    value={this.state.engin}
                    changeHandlerfn={this.changeHandler}
                  />
                </div>

                <div className="price_filter">
                  <label>ფასი</label>
                  <div>
                    <input
                      onChange={this.changeHandler}
                      type="number"
                      name="startPrice"
                      placeholder="დან"
                    />
                    <input
                      onChange={this.changeHandler}
                      type="number"
                      name="endPrice"
                      placeholder="მდე"
                    />
                  </div>
                </div>

                <div>
                  <label>საწვავის ტიპი</label>

                  <OilType
                    value={this.state.oilType}
                    changeHandlerfn={this.changeHandler}
                  />
                </div>

                <div>
                  <label>პირთა ტევადობა</label>
                  <Pessengers
                    value={this.state.Pessengers}
                    changeHandlerfn={this.changeHandler}
                  />
                </div>
              </div>

              <div className="filter_button">
                <button onClick={(e) => this.handeleSearch(e)}>ძებნა</button>
              </div>
            </form>
          </div>

          <div className="home_main_text">
            <h2>
              <span>Rent Car In Tbilisi </span>
              <span>From Gcar.ge</span>
            </h2>
          </div>
        </main>

        <HomeCar></HomeCar>
      </>
    );
  }
}

export default Home;
