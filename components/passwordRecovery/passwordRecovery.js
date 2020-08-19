import React, {Component} from "react";
import axios from "axios";
import Link from "next/link";

class Recovery extends Component {
    state = {
        email: "",
        password: "",
        errors: [],
        validated: false,
    };

    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    seandEmail = async (e) => {
        e.preventDefault();
        try {
            const res = axios.post("users/recoverpass", {
                email: this.state.email,
            });
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    };
    render() {
        return (
            <div id="authorizathion">
                <div className="authorization_box">
                    <div className="auth_title">
                        <h3>პაროლის აღდგენა</h3>
                    </div>

                    <form onSubmit={this.seandEmail}>
                        <div className="auth_inputs">
                            <div className="input_box">
                                <label htmlFor="email">მეილი</label>
                                <input
                                    name="email"
                                    type="mail"
                                    onChange={this.inputHandler}
                                    placeholder="YourEmail@gmail.com"
                                />
                                <span className="invalid-feedback"></span>
                            </div>
                        </div>
                        <div id="rec_box">
                            <button id="recover_button">გაგზავნა</button>
                        </div>
                        <div className="auth_footer inline">
                            <Link href="/login">
                                <a>ავტორიზაცია</a>
                            </Link>
                            <Link href="/registration">
                                <a>რეგისტრაცია</a>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Recovery;
