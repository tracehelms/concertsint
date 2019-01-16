import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

export default class HeaderNav extends Component {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img src={logo} alt="logo" width="112" height="28" />
          </Link>
          <Link to="/concerts" className="navbar-item">
            Concerts
          </Link>
        </div>
      </nav>
    );
  }
}
