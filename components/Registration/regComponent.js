import React, { useCallback, useState } from "react";
import axios from "axios";
import classnames from "classnames";
import { useDispatch } from "react-redux";
import Link from "next/link";
import validator from "validator";
import { useForm } from "react-hook-form";

import { setCurrentUser } from "../../redux/auth/authActions";
import Loader from "../UI/loader";

const Registration = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState(false);

  const { handleSubmit, errors, register, watch } = useForm();

  const registerHandler = useCallback(async (data) => {
    setLoading(true);

    try {
      const res = await axios.post("users", data);
      setLoading(false);
      dispatch(
        setCurrentUser({
          user: res.data.user,
          token: res.data.token,
        })
      );
    } catch (err) {
      setLoading(false);
      setServerError(err.response.data);
    }
  }, []);

  const inputHandler = () => {
    setServerError(null);
  };

  return (
    <div>
      <div id="authorizathion">
        <div className="reg_box">
          <div className="auth_title">
            <h3>რეგისტრაცია</h3>
          </div>

          <form id="auth_form" onSubmit={handleSubmit(registerHandler)}>
            {serverError && <div style={{ color: "red" }}>{serverError}</div>}
            <div className="auth_inputs">
              <div className="input_box">
                <label htmlFor="name">სახელი - გვარი</label>
                <input
                  onChange={inputHandler}
                  ref={register({
                    required: true,
                    minLength: 2,
                  })}
                  name="name"
                  type="text"
                  placeholder="სახელი"
                  className={classnames("form-control", {
                    "is-invalid": errors.name,
                  })}
                />
                <span className="invalid-feedback">
                  {errors.name && errors.name.type === "required"
                    ? "სახელი აუცილებელია"
                    : "მინიმუმ 2 სიმბოლო"}
                </span>
              </div>
              <div className="input_box">
                <label htmlFor="email">მეილი</label>
                <input
                  onChange={inputHandler}
                  ref={register({
                    required: true,
                    validate: (value) => validator.isEmail(value),
                  })}
                  name="email"
                  type="mail"
                  placeholder="YourEmail@gmail.com"
                  className={classnames("form-control", {
                    "is-invalid": errors.email,
                  })}
                />
                <span className="invalid-feedback">
                  {errors.email && errors.email.type === "required"
                    ? "მეილი აუცილებელია"
                    : "მეილი არასოწი ფომრატისაა"}
                </span>
              </div>

              <div className="input_box">
                <label htmlFor="password">პაროლი</label>
                <input
                  onChange={inputHandler}
                  ref={register({
                    required: true,
                    minLength: 6,
                  })}
                  name="password"
                  type="password"
                  placeholder="* * * * * * *"
                  className={classnames("form-control", {
                    "is-invalid": errors.password,
                  })}
                />
                <span className="invalid-feedback">
                  {errors.password && errors.password.type === "required"
                    ? "პაროლი აუცილებელია"
                    : "მინიმუმ 6 სიმბოლო"}
                </span>
              </div>
              <div className="input_box">
                <label htmlFor="password">გაიმეორე პაროლი</label>
                <input
                  onChange={inputHandler}
                  ref={register({
                    required: true,
                    validate: (value) => value === watch("password"),
                  })}
                  name="repeatPasword"
                  type="password"
                  placeholder="* * * * * * *"
                  className={classnames("form-control", {
                    "is-invalid": errors.repeatPasword,
                  })}
                />
                <span className="invalid-feedback">
                  {errors.repeatPasword &&
                  errors.repeatPasword.type === "required"
                    ? "პაროლი აუცილებელია"
                    : "პაროლები არ მეთხვევა"}
                </span>
              </div>
              <div></div>

              <Loader loading={loading} />
              <div id="login_box">
                <button className="load" id="login_button">
                  რეგისტრაცია
                </button>
              </div>
            </div>

            <div className="auth_footer">
              <Link href="/login">
                <a>უკვე ხართ რეგისტრირებული?</a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
