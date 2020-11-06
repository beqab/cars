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
        <span>55555555</span>
        <span>test@gmail.com</span>
      </div>
    </footer>
  );
};

export default Footer;
