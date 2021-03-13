import React from "react";
import Link from "next/link";
import { connect } from "react-redux";

const Footer = ({ isAuth }) => {
  return (
    <footer>
      <div className="footer_logo">
        <img src="/imgs/logosSVGwhite.svg" alt="logo" />
      </div>
      <div className="footer_nav">
        <ul>
          <li>
            <Link href="/">
              <a>მთავარი</a>
            </Link>
          </li>
          <li>
            <Link href={isAuth ? "/profile/addStatement" : "/login"}>
              <a>მანქანების გაქირავება</a>
            </Link>
          </li>

          <li>
            <Link href={isAuth ? "/profile/addStatement" : "/login"}>
              <a href="">ჩემი გვერდი</a>
            </Link>
          </li>
          <li className="d-none">
            <a href="http://myauto.ge/">Anchor text</a>
          </li>
        </ul>
      </div>
      <div className="footer_contact">
        {/* <a href="tel:579 29 67 56">579 29 67 56</a> */}
        <span> infogcar@gmail.com</span>
      </div>
    </footer>
  );
};

export default connect((state) => ({ isAuth: state.auth.isAuth }))(Footer);
