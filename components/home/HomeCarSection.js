import React, { Component } from "react";
import Link from "next/link";
import axios from "axios";
import Card from "./card";
import Loader from "../UI/loader";
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
        console.log(res.data);

        this.setState({
          statements: [...res.data],
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
            {this.state.statements && this.state.statements.length ? (
              this.state.statements.map((el, i) => {
                return (
                  <div className="col-12 col-md-3">
                    <Card data={el} />
                  </div>
                );
              })
            ) : (
              <div
                style={{ minHeight: "70vh" }}
                className="text-center w-100 d-flex justify-content-center align-items-center flex-column"
              >
                <img
                  src="https://gifprint.s3.amazonaws.com/p/gif/80037/e62c3f40a25701360b561e9875f84da0.gif"
                  alt="s"
                />
                <div>იტვირთება...</div>
              </div>
            )}
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
