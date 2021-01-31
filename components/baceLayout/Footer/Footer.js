import React from "react";
import Link from "next/link";
import { connect } from "react-redux";

const Footer = ({ isAuth }) => {
  return (
    <footer>
      <div className="footer_logo">
        <img src="/imgs/white-06.png" />
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
        </ul>
      </div>
      <div className="footer_contact">
        <a href="tel:579 29 66 56">579 29 66 56</a>
        <span> infogcar@gmail.com</span>
      </div>
    </footer>
  );
};

export default connect((state) => ({ isAuth: state.auth.isAuth }))(Footer);
