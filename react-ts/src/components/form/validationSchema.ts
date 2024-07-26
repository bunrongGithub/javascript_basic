import * as yup from "yup";
export const validationSchema = yup.object().shape({
    email: yup.string().email("Invalid email address").required("Email is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/\d/, "Password must contain at least one digit")
      .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
  });