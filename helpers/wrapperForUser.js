import React, { Component } from "react";
import axios from "axios";

import { connect } from "react-redux";
import { getUserName } from "../redux/auth/authActions";

class wrapperForUser extends Component {
  componentDidMount() {
    if (this.props.state.auth.token) {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${this.props.state.auth.token}`;

      axios
        .get("users/getUser")
        .then((res) => {
          console.log(res);
          this.props.detUser(res.data.user);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  render() {
    return this.props.children;
  }
}

const MapStateToProps = (state) => ({
  state: state,
});
const mapDispatchToProps = (dispatch) => ({
  detUser: (user) => dispatch(getUserName(user)),
});

export default connect(MapStateToProps, mapDispatchToProps)(wrapperForUser);
