import React from "react";
import { Route, Switch } from "react-router-dom";
import AppHeader from "./AppHeader";
import Home from "./Home";
import Communities from "./Communities";
import NewCommunity from "./NewCommunity";
import SignUp from "./SignUp";
import Community from "./Community";
import NewPost from "./NewPost";

function App() {
  return (
    <div>
      <AppHeader />
      <section>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/communities" exact component={Communities} />
          <Route path="/communities/new" exact component={NewCommunity} />
          <Route path="/communities/:communityId" exact component={Community} />
          <Route
            path="/communities/:communityId/post"
            exact
            component={NewPost}
          />
        </Switch>
      </section>
    </div>
  );
}

export default App;
