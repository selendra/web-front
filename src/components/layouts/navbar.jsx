import React from "react";
import { NavLink, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="ui secondary stackable  menu container  header-menu">
      <Link to="/">
        <img
          className="menu-logo"
          src="image/zeetomic-logo-header.png"
          alt="zeetomic"
        />
      </Link>
      <div className="left menu menu-item">
        <NavLink to="/invest" className="item" activeClassName="active">
          Invest
        </NavLink>
        <NavLink to="/raisedFund" className="item" activeClassName="active">
          Raise Fund
        </NavLink>
        <NavLink to="/about" className="item" activeClassName="active">
          About
        </NavLink>
        <NavLink to="/blog" className="item" activeClassName="active">
          Blog
        </NavLink>
        <div className="right menu">
          <NavLink to="/login" className="item" activeClassName="active">
            Login
          </NavLink>
          <NavLink to="/signup" className="item" activeClassName="active">
            <button className="ui  white inverted button">Sign Up</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
