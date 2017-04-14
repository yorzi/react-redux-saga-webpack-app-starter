import React from "react";
import { connect } from "react-redux";
import "../stylesheets/app.scss";

// app component
export class App extends React.Component {
  // pre-render logic
  componentWillMount() {
    // the first time we load the app, we need that users list
    this.props.dispatch({type: 'USERS_FETCH_LIST'});
  }

  // render
  render() {
    const { users, children } = this.props;

    return (
      <div className="container">
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
