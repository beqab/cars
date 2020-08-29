import React, {Component} from "react";
import axios from "axios";
import JVTdecode from "jwt-decode";
import {loginValidation} from "../../validator/validation";
import classname from "classnames";
import {connect} from "react-redux";
import {setCurrentUser} from "../../../redux/auth/authActions";
import Link from "next/link";
import FBLogin from "./Fblogin";

class Authorization extends Component {
    state = {
        email: "",
        password: "",
        errors: [],
        validated: false,
        butDisable: false,
        errorMsgs: null,
    };

    inputHandler = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value,
                errorMsgs: null,
            },
            () => {
                if (this.state.validated) {
                    let {errors, isValid} = loginValidation({
                        email: this.state.email,
                        password: this.state.password,
                    });
                    if (isValid) {
                        this.setState({
                            errors: [],
                        });
                    } else {
                        this.setState({
                            errors: errors,
                        });
                    }
                }
            },
        );
    };

    hangleLogIn = (e) => {
        e.preventDefault();

        let {errors, isValid} = loginValidation({
            email: this.state.email,
            password: this.state.password,
        });
        if (isValid) {
            this.setState(
                {
                    errors: [],
                    butDisable: true,
                },
                () => {
                    axios
                        .post("auth", {
                            email: this.state.email,
                            password: this.state.password,
                        })
                        .then((res) => {
                            let test = JVTdecode(res.data.token);
                            console.log(test);
                            this.setState({
                                errors: [],
                                butDisable: false,
                            });
                            this.props.setCurrentUser({
                                user: res.data.user,
                                token: res.data.token,
                            });
                            // this.props.setCurrentUser({
                            //   user: res.data.user,
                            //   token: res.data.token
                            // });
                        })
                        .catch((err) => {
                            console.log(err, "errrr");

                            if (err.response.status > 400) {
                                this.setState({
                                    butDisable: false,
                                    errorMsgs: "კავშირის პრობლემა :/ სცადეთ თავიდან",
                                });
                            } else {
                                this.setState({
                                    butDisable: false,
                                    errorMsgs: err.response.data.errors,
                                });
                            }
                            // if (err.response.status != 500) {
                            //   this.setState({
                            //     loginerrors: { email: "მეილი ან პარალლი არაწორია" },
                            //   });
                            // }
                        });
                },
            );
        } else {
            this.setState({
                errors: errors,
                validated: true,
            });
        }
    };
    render() {
        return (
            <div id="authorizathion">
                <div className="authorization_box">
                    <div className="auth_title">
                        <h3>ავტორიზაცია</h3>
                    </div>

                    <form onSubmit={this.hangleLogIn} id="auth_form">
                        {this.state.errorMsgs && <div style={{color: "red"}}>{this.state.errorMsgs}</div>}

                        <div className="auth_inputs">
                            <div className="input_box">
                                <label htmlFor="email">მეილი</label>
                                <input
                                    onChange={this.inputHandler}
                                    name="email"
                                    type="mail"
                                    placeholder="YourEmail@gmail.com"
                                    className={classname("form-control", {
                                        "is-invalid": this.state.errors.email,
                                    })}
                                />
                                <span className="invalid-feedback">{this.state.errors.email}</span>
                            </div>
                            <div className="input_box">
                                <label htmlFor="password">პაროლი</label>
                                <input
                                    onChange={this.inputHandler}
                                    name="password"
                                    type="password"
                                    placeholder="* * * * * * *"
                                    className={classname("form-control", {
                                        "is-invalid": this.state.errors.password,
                                    })}
                                />
                                <span className="invalid-feedback">{this.state.errors.password}</span>
                            </div>
                            <div
                                className={classname("loader_box", {
                                    hide: !this.state.butDisable,
                                })}
                            >
                                <div className="loader" id="loader-1"></div>
                            </div>
                            <div id="login_box">
                                <button className="load" disabled={this.state.butDisable} id="login_button">
                                    შესვლა
                                </button>
                            </div>
                        </div>
                        <div className="social_auth">
                            <a href="" className="google_auth_social">
                                <img src="/imgs/google.png" alt="" />
                                <span>by Google</span>
                            </a>
                            <FBLogin />
                        </div>

                        <div className="auth_footer">
                            <Link href="/registration">
                                <a>დარეგისტრირდი</a>
                            </Link>
                            <Link href="/roceverpass">
                                <a>დაგავიწყდათ პაროლი?</a>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect(null, {setCurrentUser})(Authorization);
