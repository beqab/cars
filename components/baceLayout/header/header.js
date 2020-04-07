import React, { Component } from "react";
import { Link } from "react-dom";
import { connect } from "react-redux";
class Header extends Component {
  render() {
    return (
      <header>
        <div id="logo_socials">
          <a href="">
            <img src="/imgs/logo.png" alt="" />
          </a>
        </div>

        <div className="header_navigation">
          <div className="login">
            <a href="" id="login">
              <svg
                height="22px"
                viewBox="0 -32 512 512"
                width="22px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#f5bd1f"
                  d="m298.667969 106.667969c0 58.910156-47.757813 106.664062-106.667969 106.664062s-106.667969-47.753906-106.667969-106.664062c0-58.910157 47.757813-106.667969 106.667969-106.667969s106.667969 47.757812 106.667969 106.667969zm0 0"
                />
                <path
                  fill="#f5bd1f"
                  d="m282.667969 256h-181.335938c-55.871093 0-101.332031 45.460938-101.332031 101.332031v74.667969c0 8.832031 7.167969 16 16 16h352c8.832031 0 16-7.167969 16-16v-74.667969c0-55.871093-45.460938-101.332031-101.332031-101.332031zm0 0"
                />
              </svg>
              {this.props.user && this.props.user.name}
            </a>

            <a id="language" href="">
              En
            </a>
          </div>
          <nav>
            <ul>
              <li>
                <a href="" className="active">
                  მთავარი გვერდი
                </a>
              </li>
              <li>
                <a href="">მანქანის გაქირავება</a>
              </li>
              <li>
                <a href="">ჩემი გვერდი</a>
              </li>
              <li>
                <a href="">კონტაქტი</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default connect((state) => ({ user: state.auth.user }))(Header);
