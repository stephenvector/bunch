import React, { useCallback, useMemo } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import firebase from "firebase/app";
import "firebase/firestore";
import Label from "./Label";
import Input from "./Input";
import Button from "./Button";
import useCommunities from "./useCommunities";
import { Community as CommunityType } from "./types";
import Loading from "./Loading";
import Error from "./Error";
import NotFound from "./NotFound";
import useAuth from "./useAuth";
import NeedToLogin from "./NeedToLogin";
import Textarea from "./Textarea";
import Box from "./Box";
import Container from "./Container";
import PageTitle from "./PageTitle";

const NewPost: React.FC = () => {
  const history = useHistory();
  const { signedIn, currentUser } = useAuth();
  const { communityId } = useParams<{ communityId: string }>();
  const { communities, status } = useCommunities();

  const community: null | CommunityType = useMemo(() => {
    if (communityId in communities) return communities[communityId];

    return null;
  }, [communities, communityId]);

  const { handleSubmit, register, formState } = useForm<{
    title: string;
    content: string;
  }>({
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const onSubmit = useCallback(
    async (values: { title: string; content: string }) => {
      const { title, content } = values;
      const newDocRef = firebase.firestore().collection("posts").doc();
      await newDocRef.set({
        title,
        content,
        communityId,
        date: firebase.firestore.Timestamp.now().toDate(),
        userId: currentUser ? currentUser.uid : "",
      });
      history.replace(`/communities/${communityId}/posts/${newDocRef.id}`);
    },
    [communityId, currentUser, history]
  );

  if (!signedIn) return <NeedToLogin />;

  if (status === "loading") return <Loading />;

  if (status === "error") return <Error />;

  if (community === null) return <NotFound />;

  return (
    <Container>
      <Box>
        <PageTitle>Create A New Post</PageTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Label htmlFor="title">Title</Label>
          <Input
            disabled={formState.isSubmitting}
            type="text"
            id="title"
            name="title"
            ref={register}
          />

          <Label htmlFor="content">Content</Label>
          <Textarea
            id="content"
            name="content"
            ref={register}
            disabled={formState.isSubmitting}
          />

          <Button disabled={formState.isSubmitting} type="submit">
            Create Post
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default NewPost;
