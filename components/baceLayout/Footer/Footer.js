import React, { Component } from "react";
import Link from "next/link";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer_logo">
          <img src="/imgs/footer_logo.png" />
        </div>
        <div className="footer_nav">
          <ul>
            <li>
              <a href="">მთავარი</a>{" "}
            </li>
            <li>
              <a href="">მანქანების გაქირავება</a>{" "}
            </li>
            <li>
              <a href="">მანქანით მომსახურება</a>{" "}
            </li>
            <li>
              <a href="">ჩემი გვერდი</a>{" "}
            </li>
          </ul>
        </div>
        <div className="footer_contact">
          <span>55555555</span>
          <span>test@gmail.com</span>
        </div>
      </footer>
    );
  }
}

export default Footer;
