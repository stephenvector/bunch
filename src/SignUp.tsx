import React, { useCallback } from "react";
import useAuth from "./useAuth";
import SignUpSignInForm from "./SignUpSignInForm";

const SignUp: React.FC = () => {
  const { signUp } = useAuth();

  const onSubmit = useCallback(
    (values: { email: string; password: string }) => {
      return signUp(values.email, values.password);
    },
    [signUp]
  );

  return (
    <div>
      <h1>Sign Up</h1>
      <SignUpSignInForm onSubmit={onSubmit} />
    </div>
  );
};

export default SignUp;
