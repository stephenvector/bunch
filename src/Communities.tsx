import React from "react";
import { Link } from "react-router-dom";
import useCommunities from "./useCommunities";

const Communities: React.FC = () => {
  const { communities } = useCommunities();
  return (
    <div>
      <h1>Communities</h1>
      <Link to="/communities/new">New Community</Link>

      {Object.entries(communities).map(([communityId, community]) => (
        <div key={communityId}>
          <Link to={`/communities/${communityId}`}>
            <h3>{community.name}</h3>
            <p>{community.description}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Communities;
