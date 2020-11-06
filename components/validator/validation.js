import validator from "validator";
import isEmpty from "./isEmpty";

export const regValidation = (data) => {
  let errors = {};
  if (!validator.isEmail(data.email)) {
    errors.email = "ელ. ფოსტა სწორი ფორმატით";
  }
  if (!validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "პაროლი მინიმუმ 6 სიმბოლო";
  }
  if (!validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "შეიყვანეთ სახელი და გვარი";
  }

  if (!validator.isLength(data.repeatPasword, { min: 6, max: 30 })) {
    errors.repeatPasword = "გაიმეორეთ პაროლი - მინიმუმ 6 სიმბოლო";
  } else if (data.password !== data.repeatPasword) {
    errors.repeatPasword = "გამეორებული პაროლი არასწორია";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

export const passwordResetValidation = (data) => {
  let errors = {};
  if (!validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "პაროლი მინიმუმ 6 სიმბოლო";
  }

  if (!validator.isLength(data.repeatPasword, { min: 6, max: 30 })) {
    errors.repeatPasword = "გაიმეორეთ პაროლი - მინიმუმ 6 სიმბოლო";
  } else if (data.password !== data.repeatPasword) {
    errors.repeatPasword = "გამეორებული პაროლი არასწორია";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
