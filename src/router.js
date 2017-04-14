import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";

import App from "./components/app";
import Home from "./components/pages/home";

// User pages
import UserPage from "./components/pages/users";
import UserEdit from "./components/pages/users/user_edit";


import NotFound from "./components/pages/not_found";

// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="users" component={UserPage}/>
      <Route path="user-edit(/:id)" component={UserEdit}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

// export
export { router };
