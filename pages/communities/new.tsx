import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import firebase from "firebase/app";
import "firebase/firestore";
import Label from "../../src/Label";
import Input from "../../src/Input";
import Box from "../../src/Box";
import Button from "../../src/Button";
import Textarea from "../../src/Textarea";
import Container from "../../src/Container";
import PageTitle from "../../src/PageTitle";
import VerticalGrid from "../../src/VerticalGrid";

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
    <Container>
      <PageTitle>Create A New Community</PageTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <VerticalGrid>
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                disabled={formState.isSubmitting}
                type="text"
                id="name"
                name="name"
                ref={register}
              />
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                ref={register}
                disabled={formState.isSubmitting}
              />
            </div>

            <div>
              <Button disabled={formState.isSubmitting} type="submit">
                Create Community
              </Button>
            </div>
          </VerticalGrid>
        </Box>
      </form>
    </Container>
  );
};

export default NewCommunity;
