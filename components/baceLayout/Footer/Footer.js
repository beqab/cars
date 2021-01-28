import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="footer_logo">
        <img src="/imgs/footer_logo.png" />
      </div>
      <div className="footer_nav">
        <ul>
          <li>
            <Link href="/">
              <a>მთავარი</a>
            </Link>
          </li>
          <li>
            <Link href="/profile/addStatement">
              <a>მანქანების გაქირავება</a>
            </Link>
          </li>
          <li>
            <Link href="/profile/addStatement">
              <a>მანქანით მომსახურება</a>
            </Link>
          </li>
          <li>
            <Link href="/profile/addStatement">
              <a href="">ჩემი გვერდი</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer_contact">
      <a href="tel:555 23 32 32">579 29 66 56</a>
        <span> infogcar@gmail.com</span>
      </div>
    </footer>
  );
};

export default Footer;
