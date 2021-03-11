import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import useCommunities from "./useCommunities";
import { Community as CommunityType } from "./types";
import Loading from "./Loading";
import NotFound from "./NotFound";
import Error from "./Error";
import CommunityPosts from "./CommunityPosts";

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
    <div>
      <h1>{community.name}</h1>
      <p>{community.description}</p>
      <Link to={`/communities/${communityId}/post`}>Create A Post</Link>
      <CommunityPosts communityId={communityId} />
    </div>
  );
};

export default Community;
