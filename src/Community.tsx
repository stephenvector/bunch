import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import useCommunities from "./useCommunities";
import { Community as CommunityType } from "./types";
import Container from "./Container";
import Loading from "./Loading";
import NotFound from "./NotFound";
import Error from "./Error";
import CommunityPosts from "./CommunityPosts";
import ButtonLink from "./ButtonLink";

const Community: React.FC = () => {
  const { communityId } = useParams<{ communityId: string }>();
  const { communities, status } = useCommunities();

  const community: null | CommunityType = useMemo(() => {
    if (communityId in communities) return communities[communityId];

    return null;
  }, [communities, communityId]);

  if (status === "loading") return <Loading />;

  if (status === "error") return <Error />;

  if (community === null) return <NotFound />;

  return (
    <Container>
      <h1>{community.name}</h1>
      <p>{community.description}</p>
      <ButtonLink to={`/communities/${communityId}/posts/new`}>
        Create A Post
      </ButtonLink>
      <CommunityPosts communityId={communityId} />
    </Container>
  );
};

export default Community;
