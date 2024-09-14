import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import useLogin from "./hooks/useLogin";
import useGoogleLogin from "./hooks/useGoogleLogin";

const loginSchema = Yup.object().shape({
  identifier: Yup.string().required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export const LoginForm = () => {
  const { loginAction, isloading } = useLogin();
  const { googleLoginAction, isloading: googling } = useGoogleLogin();

  return (
    <div className="flex items-center justify-center bg-primary-background p-4">
      <div className="w-full max-w-lg rounded-lg bg-primary-background p-8">
        <Formik
          initialValues={{
            identifier: "",
            password: "",
          }}
          validationSchema={loginSchema}
          onSubmit={loginAction}
        >
          {({ errors, touched, values, handleChange }) => (
            <Form>
              <div className="mb-4">
                <Input
                  name="identifier"
                  disabled={isloading}
                  label="Username or Email"
                  type="text"
                  placeholder="Username or Email"
                  handleChange={handleChange}
                  value={values?.identifier}
                  error={
                    errors.identifier && touched.identifier
                      ? errors.identifier
                      : ""
                  }
                  className="focus:ring-primary-500 focus:border-primary-500 block w-full rounded-md border-gray-300 shadow-sm"
                />
              </div>
              <div className="mb-6">
                <Input
                  name="password"
                  disabled={isloading}
                  placeholder="Password"
                  label="Password"
                  type="password"
                  handleChange={handleChange}
                  value={values?.password}
                  error={
                    errors.password && touched.password ? errors.password : ""
                  }
                  className="focus:ring-primary-500 focus:border-primary-500 block w-full rounded-md border-gray-300 shadow-sm"
                />
              </div>

              <Button
                type="submit"
                disabled={isloading}
                title="Login"
                className="bg-primary hover:bg-primary-dark focus:ring-primary-500 w-full rounded-md px-4 py-2 font-semibold text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-opacity-50"
              />
              <div className="mt-4 text-center">
                <Link
                  to="/signup"
                  className="text-accent font-medium hover:underline"
                >
                  Don&apos;t have an account? Register here
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
