import React, { lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const RepositoryModule = lazy(() => import("../modules/repositories"));
const IssueModule = lazy(() => import("../modules/issues"));
const CommentModule = lazy(() => import("../modules/comments"));
const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <RepositoryModule />
      </Route>
      <Route exact path="/:owner/:repo/issue">
        <IssueModule />
      </Route>
      <Route exact path="/:owner/:repo/issue/:issueNumber">
        <CommentModule />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
