import React from "react";
import { useForm } from "react-hook-form";
import Label from "./Label";
import Input from "./Input";
import Button from "./Button";

type SignUpSignInFormProps = {
  onSubmit: (values: { email: string; password: string }) => Promise<void>;
};

const SignUpSignInForm: React.FC<SignUpSignInFormProps> = ({ onSubmit }) => {
  const { handleSubmit, register } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor="email">Email Address</Label>
      <Input
        name="email"
        type="email"
        id="email"
        defaultValue=""
        ref={register}
      />
      <Label htmlFor="password">Password</Label>
      <Input
        name="password"
        type="password"
        id="password"
        defaultValue=""
        ref={register}
      />
      <Button type="submit">Sign Up</Button>
    </form>
  );
};

export default SignUpSignInForm;
