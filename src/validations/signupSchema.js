import { object, string, ref } from "yup";

export const signupSchema = object({
  email: string().email("Enter a valid email").required("Enter an email"),
  password: string()
    .min(6, "Minimum 6 characters")
    .required("Enter a password"),
  confirmPassword: string()
    .oneOf([ref("password")], "Passwords do not match")
    .required("Please re-enter the email"),
});
