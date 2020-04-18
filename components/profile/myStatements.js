import React, { Component } from "react";
import Cookies from "js-cookie";

class myStatements extends Component {
  componentDidMount() {
    let token = Cookies.get("token");
    // axios
    //   .get("statement/sum", {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res);
    //     this.setState({
    //       statementSum: res.data,
    //     });
    //   });
  }
  render() {
    return <div>gancxadebebi:</div>;
  }
}

export default myStatements;
