import React from "react";
import { Nav, NavItem, Glyphicon } from "react-bootstrap";
import { IndexLinkContainer, LinkContainer } from "react-router-bootstrap";

// Menu component
export default class Menu extends React.Component {
  // render
  render() {
    return (
      <Nav bsStyle="pills">
        <IndexLinkContainer to="/">
          <NavItem>
            Home
          </NavItem>
        </IndexLinkContainer>
        <IndexLinkContainer to="/users">
          <NavItem>
            Users
          </NavItem>
        </IndexLinkContainer>
        <IndexLinkContainer to="/more">
          <NavItem>
            More
          </NavItem>
        </IndexLinkContainer>
      </Nav>
    );
  }
}
