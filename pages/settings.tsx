import React from "react";
import Container from "../src/Container";
import PageTitle from "../src/PageTitle";
import useAuth from "../src/useAuth";

const Settings: React.FC = () => {
  const { currentUser } = useAuth();
  return (
    <Container>
      <PageTitle>Settings</PageTitle>
      <pre>
        <code>{JSON.stringify(currentUser, null, 2)}</code>
      </pre>
    </Container>
  );
};

export default Settings;
