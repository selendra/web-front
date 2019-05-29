import React from "react";
import Navbar from "./layouts/navbar";
import { Link } from "react-router-dom";

const home = () => {
  return (
    <React.Fragment>
      <div className="home-bg-image">
        <div className="ui container">
          <Navbar />
          <div className="header-text-box">
            <h1 className="header-main">
              <span className="header-main-1">
                Decentralzed Platform Empowering Community Enconomic
              </span>
              <span className="header-main-2">
                The generation of highly scalable, autonomous-incentivized
                platform base on decentralized network infrastructure that
                empower the community economic.
              </span>
            </h1>
            <Link to="/learnmore" className="learn-more">
              <span className="learn-more-word">Learn More</span>
              <span>&#10093;</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="recently-container">
        <div className="ui three column centered stackable grid container">
          <div className="column">
            <div className="ui placeholder segment">
              <div className="ui icon header">
                <i className="search icon" />
                Search
              </div>
            </div>
            <div className="ui header">Lorem ipsum dolor sit amet.</div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              odio.
            </p>
          </div>
          <div className="column">
            <div className="ui placeholder segment" />
            <div className="ui header">Lorem ipsum dolor sit amet.</div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              odio.
            </p>
          </div>
          <div className="column">
            <div className="ui placeholder segment" />
            <div className="ui header">Lorem ipsum dolor sit amet.</div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              odio.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default home;
