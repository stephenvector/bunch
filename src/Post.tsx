import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/firestore";
import { Post, FetchStatus } from "./types";
import useCommunity from "./useCommunity";

const Post: React.FC = () => {
  const { communityId, postId } = useParams<{
    communityId: string;
    postId: string;
  }>();
  const [post, setPost] = useState<Post | null>(null);
  const [postStatus, setPostStatus] = useState<FetchStatus>("initial");
  const { community, status: communityStatus } = useCommunity(communityId);

  useEffect(() => {
    setPostStatus("loading");
    firebase
      .firestore()
      .collection("posts")
      .doc(postId)
      .get()
      .then((docSnapshot) => {
        const docData = docSnapshot.data();
      });
  }, [communityId, postId]);

  if (post === null) return null;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};
