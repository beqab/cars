import React, { Component } from "react";
import Link from "next/link";
import axios from "axios";
import Card from "./card";

class HomeCar extends Component {
  state = {
    statements: [],
  };
  componentDidMount() {
    axios
      .get("statement/homeStatements", {
        params: {},
      })
      .then((res) => {
        console.log(res);
        this.setState({
          statements: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="home-car_section">
        <div className="container">
          <div className="row">
            {this.state.statements.map((el, i) => {
              return (
                <div className="col-12 col-md-3">
                  <Card data={el} />
                </div>
              );
            })}
          </div>

          <div className="row">
            <div className="col-12 justify-content-center  align-items-center  text-center see_more_col">
              <Link href="/search">
                <a href="">ყველას ნახვა</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeCar;
