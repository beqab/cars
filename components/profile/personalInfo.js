import React, { Component } from "react";
import ChangePassword from "./changePassword";
import { useForm } from "react-hook-form";
import classnames from "classnames";
import axios from "axios";
import { connect } from "react-redux";
import { updateUser } from "../../redux/auth/authActions";

const personalInfo = (props) => {
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
      .post("users/updateUserInfo", data)
      .then((res) => {
        props.UpdateUser(res.data.user);
        setButDisable(false);
        setSuccess(true);
      })
      .catch((err) => {
        setButDisable(false);
        // console.log(err.response.data);

        // setServerError(err.response.data);
      });
  };

  console.log(errors, "errors");

  const clearForm = (e) => {
    e.preventDefault;
    setValue("name", "");
    clearErrors("name");
    setValue("phone", "");
    clearErrors("phone");
    setValue("location", "");
  };

  return (
    <div className="personal_info_fluid">
      <div className="personal_info_container">
        <form onSubmit={handleSubmit(onSubmitRegister)}>
          <div className="personal_top_info">
            <div className="form-group">
              <label>სახელი</label>
              <div>
                <input
                  className={classnames("form-control", {
                    "is-invalid": errors.name || serverError.name,
                  })}
                  ref={register({
                    required: true,
                    minLength: 2,
                  })}
                  placeholder="სახელი"
                  type="text"
                  name="name"
                />
                <div className="invalid-feedback font10 ">
                  {errors.name && errors.name.type === "minLength"
                    ? "მინიმუმ 2 სიმბოლო"
                    : "სახელი აუცილებელია"}
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>ტელ.ნომერი</label>
              <div>
                <input
                  className={classnames("form-control", {
                    "is-invalid": errors.phone || serverError.phone,
                  })}
                  ref={register({
                    required: true,
                    minLength: 9,
                  })}
                  placeholder="მობილური"
                  type="number"
                  name="phone"
                />
                <div className="invalid-feedback font10 ">
                  {errors.phone && errors.phone.type === "minLength"
                    ? "მინიმუმ 9 ციფრი"
                    : "მობილური აუცილებელია"}
                </div>
              </div>
            </div>
            <div className="form-group">
              <label>ადგილმდებარეობა</label>
              <div>
                <input
                  className={classnames("form-control", {
                    "is-invalid": errors.password || serverError.password,
                  })}
                  placeholder="მდებარეობა"
                  type="text"
                  name="location"
                />
              </div>
            </div>

            {success && <div>ინფორმაცია წარმატებით განახლდა</div>}

            <div style={{ alignItems: "unset" }} className="personal_buttons">
              <div
                onClick={(e) => clearForm(e)}
                style={{ borderRadius: 50 }}
                className="interupt d-flex align-items-center px-3 "
              >
                გაუქმება
              </div>
              <button className="personal_save d-flex">
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
          </div>
        </form>
        <ChangePassword />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  state: state,
});

const mapDispatchToProps = (dispatch) => ({
  UpdateUser: (user) => dispatch(updateUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(personalInfo);
