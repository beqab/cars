import React, { useState, useCallback } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import Link from "next/link";
import classnames from "classnames";
import validator from "validator";
import { useForm } from "react-hook-form";

import { setCurrentUser } from "../../../redux/auth/authActions";
import FBLogin from "./Fblogin";

const Authorization = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState([]);

  const { handleSubmit, errors, register } = useForm();

  const handleLogIn = useCallback(async (data) => {
    setLoading(true);

    try {
      const res = await axios.post("auth", data);

      setLoading(false);
      dispatch(
        setCurrentUser({
          user: res.data.user,
          token: res.data.token,
        })
      );
    } catch (err) {
      if (err.response.status > 400) {
        setServerError("კავშირის პრობლემა :/ სცადეთ მოგვიანებით");
      } else {
        setServerError(err.response.data.errors);
      }
      setLoading(false);
    }
  }, []);

  const inputHandler = useCallback(() => {
    setServerError(null);
  }, []);

  return (
    <div id="authorizathion">
      <div className="authorization_box">
        <div className="auth_title">
          <h3>ავტორიზაცია</h3>
        </div>

        <form onSubmit={handleSubmit(handleLogIn)} id="auth_form">
          {serverError && <div style={{ color: "red" }}>{serverError}</div>}

          <div className="auth_inputs">
            <div className="input_box">
              <label htmlFor="email">მეილი</label>
              <input
                ref={register({
                  required: "მეილი აუცილებელია",
                  validate: {
                    isEmail: (value) => validator.isEmail(value),
                  },
                })}
                onChange={inputHandler}
                name="email"
                type="mail"
                placeholder="YourEmail@gmail.com"
                className={classnames("form-control", {
                  "is-invalid": errors.email,
                })}
              />
              <span className="invalid-feedback">
                {errors.email && errors.email.type === "isEmail"
                  ? "მეილი არასწორი ფორმატისაა"
                  : "მეილი აცილებელია"}
              </span>
            </div>
            <div className="input_box">
              <label htmlFor="password">პაროლი</label>
              <input
                onChange={inputHandler}
                ref={register({
                  required: true,
                })}
                name="password"
                type="password"
                placeholder="* * * * * * *"
                className={classnames("form-control", {
                  "is-invalid": errors.password,
                })}
              />
              <span className="invalid-feedback">{"პაროლი აუცილებელია"}</span>
            </div>
            <div
              className={classnames("loader_box", {
                hide: !loading,
              })}
            >
              <div className="loader" id="loader-1"></div>
            </div>
            <div id="login_box">
              <button className="load" disabled={loading} id="login_button">
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
};

export default Authorization;
