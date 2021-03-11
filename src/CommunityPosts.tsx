import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/firestore";
import { Post } from "./types";

type CommunityPostsProps = {
  communityId: string;
};

const CommunityPosts: React.FC<CommunityPostsProps> = ({ communityId }) => {
  const [posts, setPosts] = useState<Record<string, Post>>({});

  useEffect(() => {
    firebase
      .firestore()
      .collection("posts")
      .where("communityId", "==", communityId)
      .onSnapshot((snapshot) => {
        const newPosts: Record<string, Post> = {};

        snapshot.forEach((doc) => {
          const docData = doc.data();

          newPosts[doc.id] = {
            communityId,
            title: docData.title,
            content: docData.content,
            userId: docData.userId,
          };
        });

        console.log(newPosts);

        setPosts(newPosts);
      });
  }, [communityId]);

  return (
    <div>
      {Object.entries(posts).map(([postId, post]) => (
        <div key={postId}>
          <Link to={`/communities/${communityId}/post/${postId}`}>
            {post.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CommunityPosts;
