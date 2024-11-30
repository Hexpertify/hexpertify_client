import { Formik, Form } from "formik";
import * as Yup from "yup";

import Input from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import useSignup from "./hooks/useSignup";
import useGoogleLogin from "./hooks/useGoogleLogin";

const hasUppercase = /[A-Z]/;
const hasLowercase = /[a-z]/;
const hasNumber = /\d/;
const hasSpecialChar = /[@$!%*?&]/;

const signupSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Username must be at least 3 characters long")
    .max(30, "Username must be less than 30 characters")
    .matches(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores",
    )
    .required("Username is required"),

  name: Yup.string()
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name must be less than 50 characters")
    .matches(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces")
    .required("Name is required"),

  phoneNumber: Yup.string()
    .matches(/^[+]?[1-9]\d{1,14}$/, "Invalid phone number format")
    .required("Phone number is required"),

  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .test(
      "has-lowercase",
      "Password must contain at least one lowercase letter",
      (value) => hasLowercase.test(value),
    )
    .test(
      "has-uppercase",
      "Password must contain at least one uppercase letter",
      (value) => hasUppercase.test(value),
    )
    .test("has-number", "Password must contain at least one number", (value) =>
      hasNumber.test(value),
    )
    .test(
      "has-special",
      "Password must contain at least one special character (e.g., @, $, !, %, *, ?, &)",
      (value) => hasSpecialChar.test(value),
    )
    .required("Password is required"),
});

export const SignupForm = () => {
  const { signupAction, isloading } = useSignup();
  const { googleLoginAction, isloading: googling } = useGoogleLogin();

  return (
    <div className="flex items-center justify-center bg-primary-background p-4">
      <div className="w-full max-w-lg rounded-lg bg-primary-background py-8">
        <Formik
          initialValues={{
            username: "",
            name: "",
            phoneNumber: "",
            email: "",
            password: "",
          }}
          validationSchema={signupSchema}
          onSubmit={signupAction}
        >
          {({ errors, touched, values, handleChange, handleBlur }) => (
            <Form>
              <div className="mb-4">
                <Input
                  name="username"
                  disabled={isloading}
                  label="Username"
                  type="text"
                  placeholder="Username"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values?.username}
                  error={
                    errors.username && touched.username ? errors.username : ""
                  }
                />
              </div>
              <div className="mb-4">
                <Input
                  name="name"
                  disabled={isloading}
                  label="Name"
                  type="text"
                  placeholder="Full Name"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values?.name}
                  error={errors.name && touched.name ? errors.name : ""}
                />
              </div>
              <div className="mb-4">
                <Input
                  name="phoneNumber"
                  disabled={isloading}
                  label="Phone Number"
                  type="text"
                  placeholder="Phone Number"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values?.phoneNumber}
                  error={
                    errors.phoneNumber && touched.phoneNumber
                      ? errors.phoneNumber
                      : ""
                  }
                />
              </div>
              <div className="mb-6">
                <Input
                  name="email"
                  disabled={isloading}
                  label="Email"
                  type="email"
                  placeholder="Email"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values?.email}
                  error={errors.email && touched.email ? errors.email : ""}
                />
              </div>
              <div className="mb-6">
                <Input
                  name="password"
                  disabled={isloading}
                  label="Password"
                  type="password"
                  placeholder="Password"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values?.password}
                  error={
                    errors.password && touched.password ? errors.password : ""
                  }
                />
              </div>

              <Button
                type="submit"
                disabled={isloading}
                title="Sign Up"
                className="bg-primary hover:bg-primary-dark focus:ring-primary-500 w-full rounded-md px-4 py-2 font-semibold text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-opacity-50"
              />
              <div className="mt-4 text-center">
                <Link
                  to="/login"
                  className="text-accent font-medium hover:underline"
                >
                  Already have an account? Sign in here
                </Link>
              </div>
            </Form>
          )}
        </Formik>
        <span className="text-accent mt-4 block text-center font-medium">
          Or
        </span>
        <Button
          title="Sign in with Google"
          variant="primary"
          disabled={googling}
          handleClick={googleLoginAction}
          className="mt-4 w-full rounded-md px-4 py-2 font-semibold text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-opacity-50"
        />
      </div>
    </div>
  );
};
