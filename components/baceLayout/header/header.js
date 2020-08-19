import React, {Component} from "react";
import Link from "next/link";

import {connect} from "react-redux";
import {authLogout} from "../../../redux/auth/authActions";
class Header extends Component {
    render() {
        return (
            <header>
                <div id="logo_socials">
                    <Link href="/">
                        <a>
                            <img src="/imgs/logo.png" alt="" />
                        </a>
                    </Link>
                </div>

                <div className="header_navigation">
                    <div className="login">
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
                                {this.props.user && this.props.user.name}
                            </a>
                        </Link>
                        {this.props.isAuth ? (
                            <button onClick={this.props.logout}>გამოსვლა</button>
                        ) : (
                            <Link href="/login">
                                <a>შესვლა</a>
                            </Link>
                        )}

                        <a id="language" href="">
                            En
                        </a>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <Link href="/">
                                    <a className="active">მთავარი გვერდი</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={this.props.isAuth ? "/profile/addStatement" : "/login"}>
                                    <a>მანქანის გაქირავება</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={this.props.isAuth ? "/profile/addStatement" : "/login"}>
                                    <a>ჩემი გვერდი</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contactus">
                                    <a>კონტაქტი</a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default connect(
    (state) => ({user: state.auth.user, isAuth: state.auth.isAuth}),
    (dispatch) => ({
        logout: () => dispatch(authLogout()),
    }),
)(Header);
