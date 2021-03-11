import React, { useCallback } from "react";
import useAuth from "./useAuth";
import SignUpSignInForm from "./SignUpSignInForm";

const SignIn: React.FC = () => {
  const { signIn } = useAuth();

  const onSubmit = useCallback(
    (values: { email: string; password: string }) => {
      return signIn(values.email, values.password);
    },
    [signIn]
  );

  return (
    <div>
      <h1>Sign In</h1>
      <SignUpSignInForm onSubmit={onSubmit} />
    </div>
  );
};

export default SignIn;
