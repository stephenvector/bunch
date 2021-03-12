import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { House } from "phosphor-react";
import useAuth from "./useAuth";
import Container from "./Container";
import Button from "./Button";

const StyledAppHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  padding: 2rem 0;
  a {
    color: inherit;
    text-decoration: none;
  }
  nav {
    display: flex;
    align-items: center;
    grid-gap: 1.5rem;
  }
  & > a {
    display: inline-flex;
    grid-gap: 1rem;
    height: 3rem;
    width: 3rem;
    background: #00b7ff;
    justify-content: center;
    align-items: center;
    color: #fff;
    border-radius: 1.5rem;
  }
`;

function AppHeader() {
  const { signedIn, signOut } = useAuth();

  return (
    <Container>
      <StyledAppHeader>
        <Link to="/">
          <House weight="bold" size="1.5rem" />
        </Link>

        <nav>
          <Link to="/communities">Communities</Link>
          {!signedIn && <Link to="/signin">Sign In</Link>}
          {!signedIn && <Link to="/signup">Sign Up</Link>}
          {signedIn && (
            <Button type="button" onClick={signOut}>
              Sign Out
            </Button>
          )}
        </nav>
      </StyledAppHeader>
    </Container>
  );
}

export default AppHeader;
