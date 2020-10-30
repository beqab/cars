import React from "react";
import { useForm } from "react-hook-form";
import classnames from "classnames";
import axios from "axios";

const changePassword = () => {
  const [serverError, setServerError] = React.useState({});
  const [success, setSuccess] = React.useState(false);
  const [butDisable, setButDisable] = React.useState(false);

  const {
    register,
    handleSubmit,
    errors,
    setError,
    clearErrors,
    watch,
    clearError,
    getValues,
    setValue,
  } = useForm();

  const onSubmitRegister = (data) => {
    console.log(data);
    setButDisable(true);

    axios
      .post("users/shangPassword", data)
      .then((res) => {
        setButDisable(false);
        setSuccess(true);
      })
      .catch((err) => {
        setButDisable(false);
        console.log(err.response.data);

        setServerError(err.response.data);
      });
  };

  console.log(errors, "errors");

  return (
    <form onSubmit={handleSubmit(onSubmitRegister)}>
      <div className="personal_bottom">
        <div className="form-group">
          <label>მიმდინარე პაროლი</label>
          <div>
            <input
              type="password"
              name="password"
              placeholder="password"
              className={classnames("form-control", {
                "is-invalid": errors.password || serverError.password,
              })}
              ref={register({
                required: true,
              })}
              onChange={() => {
                setServerError({});
              }}
            />

            <div className="invalid-feedback font10">
              {" "}
              {serverError.password || "შეიყვანეთ პაროლი"}
            </div>
          </div>
        </div>

        <div className="form-group">
          <label>ახალი პაროლი</label>
          <div>
            <input
              type="password"
              name="newPassword"
              className={classnames("form-control mb-0", {
                "is-invalid": errors.newPassword,
              })}
              placeholder="Repeat Password"
              ref={register({
                required: true,
                minLength: 6,
              })}
            />
            {errors.newPassword && (
              <div className="invalid-feedback font10 ">
                {" "}
                {errors.newPassword.type === "minLength"
                  ? "შეიყვანეთ მინიმუმ 6 სიმბოლო"
                  : "პაროლი აუცილებელია"}{" "}
              </div>
            )}
          </div>
        </div>

        <div className="form-group">
          <label>გაიმეორეთ პაროლი</label>
          <div>
            <input
              type="password"
              name="repeatPassword"
              className={classnames("form-control mb-0", {
                "is-invalid": errors.repeatPassword,
              })}
              placeholder="Repeat Password"
              ref={register({
                required: true,
                minLength: 6,

                validate: {
                  confirm: (value) => value === watch("newPassword"),
                },
              })}
            />
            {errors.repeatPassword && (
              <div className="invalid-feedback font10">
                {" "}
                {errors.repeatPassword.type === "minLength"
                  ? "შიყვანეთ მინიმუმ 6 სიმბოლო"
                  : errors.repeatPassword.type === "confirm"
                  ? "პაროლები არ ემთვევა ერთამანეთს"
                  : "პაროლი აუცილებელია"}{" "}
              </div>
            )}
          </div>
        </div>
      </div>

      {success && (
        <div className="text-center">პაროლი წარმატებით შეიცვალა!</div>
      )}

      <div className="personal_buttons">
        <div
          onClick={(e) => {
            e.preventDefault;
            setValue("password", "");
            clearErrors("password");
            setValue("repeatPassword", "");
            clearErrors("repeatPassword");
            setValue("newPassword", "");
            clearErrors("newPassword");
          }}
          style={{ borderRadius: 50 }}
          className="interupt d-flex align-items-center px-3"
        >
          გაუქმება
        </div>

        <button disabled={butDisable} className="personal_save d-flex">
          <div
            className={classnames("loader_box mr-2", {
              hide: !butDisable,
            })}
          >
            <div
              style={{ width: 18, height: 18 }}
              className="loader"
              id="loader-1"
            ></div>
          </div>
          შენახვა
        </button>
      </div>
    </form>
  );
};

export default changePassword;
