import { LoginForm } from "../../../features/authentication/LoginForm";

function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-primary-background">
      <div className="w-full max-w-lg rounded-lg bg-primary-background px-4 py-8 sm:p-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary-text">
            Log in to your account
          </h1>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
