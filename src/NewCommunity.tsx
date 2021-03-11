import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import firebase from "firebase/app";
import "firebase/firestore";
import Label from "./Label";
import Input from "./Input";
import Button from "./Button";

const NewCommunity: React.FC = () => {
  const { handleSubmit, register, formState } = useForm<{
    name: string;
    description: string;
  }>({
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const onSubmit = useCallback(
    async (values: { name: string; description: string }) => {
      const { name, description } = values;
      await firebase.firestore().collection("communities").doc().set({
        name,
        description,
      });
    },
    []
  );

  return (
    <div>
      <h1>Create A New Community</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="name">Name</Label>
        <Input
          disabled={formState.isSubmitting}
          type="text"
          id="name"
          name="name"
          ref={register}
        />

        <Label htmlFor="description">Description</Label>
        <textarea
          id="description"
          name="description"
          ref={register}
          disabled={formState.isSubmitting}
        />

        <Button disabled={formState.isSubmitting} type="submit">
          Create Community
        </Button>
      </form>
    </div>
  );
};

export default NewCommunity;
