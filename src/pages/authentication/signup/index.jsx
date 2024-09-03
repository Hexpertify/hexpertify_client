import { SignupForm } from "../../../features/authentication/SignupForm";

function Signup() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-primary-background">
      <div className="w-full max-w-lg rounded-lg bg-primary-background p-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary-text">
            Sign up to your account
          </h1>
        </div>
        <SignupForm />
      </div>
    </div>
  );
}

export default Signup;
