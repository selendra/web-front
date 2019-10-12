import { NavLink, Link } from "react-router-dom";
import React, { Component } from "react";

export class navbar extends Component {
  state = {
    toggleclick: false
  };
  setTogglestate = () => {
    this.setState({
      toggleclick: !this.state.toggleclick
    });
  };
  render() {
    return (
      <React.Fragment>
        <div
          className={this.state.toggleclick ? "phone-background-navbar" : ""}
        >
          <div
            className={
              this.state.toggleclick
                ? "ui left  vertical inverted labeled icon sidebar menu overlay visible mobile only slideIn sidebar-style"
                : "ui left  vertical inverted labeled icon sidebar menu overlay  mobile only slideOut"
            }
            style={{}}
          >
            <Link to="/" className="item">
              <center>
                <img
                  className="ui tiny image"
                  src="./image/zeetomic-logo-header.png"
                  alt=""
                />
              </center>
            </Link>
            {/* <Link to="/invest" className="item ling-navbar">
              Invest
            </Link>
            <Link to="/raiseFund" className="item">
              Raised Fund
            </Link> */}
            <Link to="/about" className="item">
              About
            </Link>
            <NavLink to="/blog" className="item">
              Blog
            </NavLink>
            <a href="https://app.zeetomic.com/login" className="item hoverlink">Login</a>
            {/* <Link to="/signup" className="item">
              Signup
            </Link> */}
            <a href="https://app.zeetomic.com/signup"><button className="ui  white inverted button sign-up-button">Sign Up</button></a>
            </div>
          </div>
        <div className="navbar-menu">
          <div className="ui secondary  container menu mobile only mobile-menu">
            <div className="left menu">
              <Link to="/home">
                <img
                  className="menu-logo"
                  src="./image/zeetomic-logo-header.png"
                  alt="zeetomic logo"
                />
              </Link>
            </div>
            <div className="right menu">
              <div className="image">
                <img
                  className="toggleicon"
                  style={{ position: "relative", zIndex: "2" }}
                  src={
                    this.state.toggleclick
                      ? "./image/closeicon.png"
                      : "./image/burgericon.png"
                  }
                  alt="Toogle icon"
                  onClick={this.setTogglestate}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="ui secondary stackable  menu container  header-menu">
          <div className="left menu menu-icon">
            <Link to="/">
              <img
                className="menu-logo"
                src="image/zeetomic-logo-header.png"
                alt="zeetomic"CompLibrary
              />
            </Link>
          </div>
          <div className="left menu menu-item">
            {/* <NavLink
              to="/invest"
              className="item hoverlink"
              style={{ color: "#fff" }}
            >
              Invest
            </NavLink>
            <NavLink to="/raiseFund" className="item hoverlink">
              Raise Fund
            </NavLink> */}
            <NavLink to="/about" className="item hoverlink">
              About
            </NavLink>
            <NavLink to="/blog" className="item hoverlink">
              Blog
            </NavLink>
            <div className="right menu">
              {/* <NavLink to="/login" className="item hoverlink">
                Login
              </NavLink> */}
              <a href="https://app.zeetomic.com/login" className="item hoverlink">Login</a>
              
                <a href="https://app.zeetomic.com/signup"><button className="ui  white inverted button sign-up-button">Sign Up</button></a>
              
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default navbar;
