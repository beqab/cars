import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import classnames from "classnames";
import { useForm } from "react-hook-form";
import validator from "validator";

import Loader from "../UI/loader";

const passwordRecovery = () => {
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [success, setSuccess] = useState(false);
  const { handleSubmit, register, errors } = useForm();

  const recoverSubmit = async (data) => {
    setLoading(true);

    try {
      const res = await axios.post("users/recoverpass", data);
      setSuccess(true);
      setLoading(false);
    } catch (err) {
      setServerError(err.response.data);
      setLoading(false);
    }
  };

  const inputHandler = () => setServerError(null);

  console.log(errors, "errrors");

  return (
    <div id="authorizathion">
      <div className="authorization_box">
        <div className="auth_title">
          <h3>პაროლის აღდგენა</h3>
        </div>

        <form onSubmit={handleSubmit(recoverSubmit)}>
          {success ? (
            <div style={{ color: "#fff" }} className="color-wight text-center">
              პაროლის აღდგენის ბმული გამოიგზავნე თქვენს მეილზე{" "}
              <b>გთხოვთ შეამოწმოთ თქვენი ელ-ფოსტა </b>
            </div>
          ) : (
            <>
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
                    className={classnames("form-control", {
                      "is-invalid": errors.email || serverError,
                    })}
                    name="email"
                    type="mail"
                    onChange={inputHandler}
                    placeholder="YourEmail@gmail.com"
                  />
                  <span className="invalid-feedback">
                    {serverError ||
                      (errors.email && "შეიყვანე იმეილი სწორი ფორმატით")}
                  </span>
                </div>
              </div>
              <div id="rec_box">
                <Loader loading={loading} />
                <button id="recover_button">გაგზავნა</button>
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

export default passwordRecovery;
