import * as Yup from "yup";

const correctEmail = "user@example.com";
const correctPassword = "Password123!";

const LoginPageSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),

  password: Yup.string()
    .required("Password is required")
    .test("password-match", "Email or password do not match", function (value) {
      const { email } = this.parent;
      return email === correctEmail && value === correctPassword;
    }),
});

export default LoginPageSchema;
