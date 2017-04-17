import React from "react";
import UserList from "./users/user_list";

// Home page component
export default class Users extends React.Component {
  // render
  render() {
    return (
      <div className="page-user">
        <UserList />
      </div>
    );
  }
}
