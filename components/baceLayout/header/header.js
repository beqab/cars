import React, { useState } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";
import classnames from "classnames";
import { useRouter } from "next/router";

import { authLogout } from "../../../redux/auth/authActions";
import {
  userSelector,
  isAuthSelector,
} from "../../../redux/auth/authSelectors";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => setOpenMenu(!openMenu);

  const dispatch = useDispatch();

  const { user, isAuth } = useSelector(
    createStructuredSelector({ user: userSelector, isAuth: isAuthSelector })
  );

  const router = useRouter();

  console.log(router, "routerrouter");

  return (
    <header>
      <div id="logo_socials">
        <Link href="/">
          <a>
            <img src="/imgs/yelow-06.png" alt="" />
          </a>
        </Link>
      </div>

      <div className="header_navigation">
        <div className="login">
          {isAuth ? (
            <>
              <Link href="/profile/addStatement">
                <a id="login">
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
                  {user && user.name}
                </a>
              </Link>

              <button className="mt-0" onClick={() => dispatch(authLogout())}>
                გამოსვლა
              </button>
            </>
          ) : (
            <Link href="/login">
              <a className="loginBtn">შესვლა</a>
            </Link>
          )}
          <div
            onClick={toggleMenu}
            className={classnames("menu-btn", { open: openMenu })}
          >
            <div className="menu-btn__burger"></div>
          </div>

          <a id="language" href="">
            En
          </a>
        </div>
        <nav className={classnames({ active: openMenu })}>
          <ul>
            <li>
              <Link href="/">
                <a className={router.pathname === "/" ? "active" : ""}>
                  მთავარი გვერდი
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className={router.pathname === "/about" ? "active" : ""}>
                  ჩვენს შესახებ
                </a>
              </Link>
            </li>
            <li>
              <Link href={isAuth ? "/profile/addStatement" : "/login"}>
                <a>მანქანის გაქირავება</a>
              </Link>
            </li>
            <li>
              <Link href={isAuth ? "/profile/addStatement" : "/login"}>
                <a
                  className={
                    router.pathname === "/profile/addStatement" ? "active" : ""
                  }
                >
                  ჩემი გვერდი
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className={router.pathname === "/contact" ? "active" : ""}>
                  კონტაქტი
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
