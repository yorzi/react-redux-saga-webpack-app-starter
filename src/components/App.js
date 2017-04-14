import React from "react";
import { connect } from "react-redux";
import { ProgressBar } from "react-bootstrap";
import Menu from "./common/menu";
import "../stylesheets/app.scss";

// app component
export class App extends React.Component {
  // pre-render logic
  componentWillMount() {
    // the first time we load the app, we need that users list
    console.log("APP mounted");
    this.props.dispatch({type: 'USERS_FETCH_LIST'});
  }

  // render
  render() {
    const { users, children } = this.props;

    if (!users.length) {
      return (
        <ProgressBar active now={100}/>
      );
    }

    return (
      <div className="container">
        <div>
          <Menu/>
        </div>
        { children }
      </div>
    );
  }
}

// export the connected class
function mapStateToProps(state) {
  return {
    users: state.users || [],
  };
}
export default connect(mapStateToProps)(App);
