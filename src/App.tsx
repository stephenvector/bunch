import React from "react";
import { Route, Switch } from "react-router-dom";
import AppHeader from "./AppHeader";
import Home from "./Home";
import Communities from "./Communities";
import NewCommunity from "./NewCommunity";
import SignUpPage from "./SignUpPage";
import Community from "./Community";
import NewPost from "./NewPost";
import Post from "./Post";

function App() {
  return (
    <div>
      <AppHeader />
      <section>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" exact component={SignUpPage} />
          <Route path="/communities" exact component={Communities} />
          <Route path="/communities/new" exact component={NewCommunity} />
          <Route path="/communities/:communityId" exact component={Community} />
          <Route
            path="/communities/:communityId/posts/new"
            exact
            component={NewPost}
          />
          <Route
            path="/communities/:communityId/posts/:postId"
            exact
            component={Post}
          />
        </Switch>
      </section>
    </div>
  );
}

export default App;
