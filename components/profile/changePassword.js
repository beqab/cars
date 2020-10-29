import React from "react";
import { useForm } from "react-hook-form";
import classnames from "classnames";

const changePassword = () => {
  const [serverError, setServerError] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const {
    register,
    handleSubmit,
    errors,
    setError,
    watch,
    clearError,
    getValues,
  } = useForm();

  const onSubmitRegister = (data) => {
    console.log(data);
    debugger;
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
                "is-invalid": errors.password,
              })}
              ref={register({
                required: true,
              })}
            />

            {errors.password && (
              <div className="invalid-feedback font10">შეიყვანეთ პაროლი</div>
            )}
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

      <div className="personal_buttons">
        <button className="interupt">გაუქმება</button>
        <button className="personal_save">შენახვა</button>
      </div>
    </form>
  );
};

export default changePassword;
