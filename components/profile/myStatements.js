import React, { Component } from "react";
import Cookies from "js-cookie";
import axios from "axios";

class myStatements extends Component {
  state = {
    myStatements: [],
  };

  componentDidMount() {
    let token = Cookies.get("token");
    axios
      .get("statement/myall", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        this.setState({
          myStatements: res.data,
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.myStatements.map((el) => {
          return <h1>my stamant</h1>;
        })}
      </div>
    );
  }
}

export default myStatements;
