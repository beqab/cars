import validator from "validator";
import isEmpty from "./isEmpty";

export const loginValidation = (data) => {
  let errors = {};
  if (!validator.isEmail(data.email)) {
    errors.email = "ელ. ფოსტა სწორი ფორმატით";
  }
  if (!validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "პაროლი მინიმუმ 6 სიმბოლო";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
