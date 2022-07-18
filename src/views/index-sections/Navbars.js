import React from "react";

// reactstrap components
import {
  // Collapse,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  // UncontrolledDropdown,
  // NavbarBrand,
  // Navbar,
  // NavItem,
  // NavLink,
  // Nav,
  Container,
  // Row,
  // Col,
} from "reactstrap";

// core components

function Navbars() {
  return (
    <>
      <div className="section section-navbars">
        <Container id="menu-dropdown">
          <h3 className="title text-center" > Our Services <i className="now-ui-icons ui-2_settings-90"/></h3>
        </Container>
        <div id="navbar">
          <div
            className="navigation-example"
            style={{
              backgroundImage:
                "url(" + require("assets/img/bg7.jpg").default + ")",
            }}
          />

          </div>
      </div>
    </>
  );
}

export default Navbars;
