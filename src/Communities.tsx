import React from "react";
import { Link } from "react-router-dom";
import useCommunities from "./useCommunities";
import Box from "./Box";
import Container from "./Container";

const Communities: React.FC = () => {
  const { communities } = useCommunities();
  return (
    <Container>
      <h1>Communities</h1>
      <Link to="/communities/new">New Community</Link>

      {Object.entries(communities).map(([communityId, community]) => (
        <Box key={communityId}>
          <Link to={`/communities/${communityId}`}>
            <h3>{community.name}</h3>
            <div>{community.description}</div>
          </Link>
        </Box>
      ))}
    </Container>
  );
};

export default Communities;
