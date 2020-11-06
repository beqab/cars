import React, { useState, useCallback } from "react";
import axios from "axios";
import classnames from "classnames";
import Link from "next/link";
import { useForm } from "react-hook-form";

import Loader from "../../UI/loader";

const resetPassword = ({ token }) => {
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { handleSubmit, errors, register, watch } = useForm();

  const changePasswordHandler = useCallback(async (data) => {
    setLoading(true);

    try {
      const res = await axios.post("users/resetpass", {
        token,
        newPassword: data.password,
      });
      setLoading(false);
      setSuccess(res.data);
    } catch (err) {
      setLoading(false);
      setServerError(err.response.data);
    }
  }, []);

  return (
    <div id="authorizathion">
      <div className="authorization_box">
        <div className="auth_title">
          <h3>პაროლის აღდგენა</h3>
        </div>

        <form onSubmit={handleSubmit(changePasswordHandler)}>
          {success ? (
            <div style={{ color: "#fff" }} className="text-center">
              {success}
            </div>
          ) : serverError ? (
            <div style={{ color: "#fff" }} className="text-center">
              {serverError}{" "}
              <Link href="/roceverpass">
                <a> თავიდან მოთხოვნა</a>
              </Link>
            </div>
          ) : (
            <>
              <div className="auth_inputs">
                <div className="input_box">
                  <label htmlFor="password">პაროლი</label>
                  <input
                    ref={register({
                      required: "პაროლი აუცილებელია",
                      minLength: 6,
                    })}
                    name="password"
                    type="password"
                    placeholder="პაროლი"
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
                <div className="input_box mt-3">
                  <label htmlFor="password">გაიმეორეთ პაროლი</label>
                  <input
                    ref={register({
                      required: true,
                      validate: {
                        isMatch: (value) => value === watch("password"),
                      },
                    })}
                    name="repeatPasword"
                    type="password"
                    placeholder="გაიმეორეთ პაროლი"
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
              </div>
              <Loader loading={loading} />
              <div id="rec_box">
                <button id="recover_button">შენახვა</button>
              </div>
            </>
          )}

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
};

export default resetPassword;
