import React, { Component } from "react";
import Navbar from "./layouts/navbar";
import { Link } from "react-router-dom";
import Card from "./cards";
import Slideview from "./slideshow";
import Footer from "./layouts/footer";

class home extends Component {
  state = {
    recently_data: [
      {
        _id: 1000,
        image: "./image/vitamin-air.png",
        header: "Community Incentivise Platform Base on Smart Contract",
        descr:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias officiis deleniti, quisquam dolorum vel nemo, soluta nihil, non praesentium illum veritatis? ."
      },
      {
        _id: 1001,
        image: "./image/vitamin-air-v.png",
        header: "Community Incentivise Platform Base on Smart Contract",
        descr:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias officiis deleniti, quisquam dolorum vel nemo, soluta nihil, non praesentium illum veritatis? ."
      },
      {
        _id: 1002,
        image: "./image/crypto.png",
        header: "Community Incentivise Platform Base on Smart Contract",
        descr:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias officiis deleniti, quisquam dolorum vel nemo, soluta nihil, non praesentium illum veritatis? ."
      }
    ],
    updates_data: [
      {
        _id: 1000,
        image: "./image/vitamin-air.png",
        header: "Community Incentivise Platform Base on Smart Contract",
        descr:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias officiis deleniti, quisquam dolorum vel nemo, soluta nihil, non praesentium illum veritatis? ."
      },
      {
        _id: 1001,
        image: "./image/vitamin-air-v.png",
        header: "Community Incentivise Platform Base on Smart Contract",
        descr:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias officiis deleniti, quisquam dolorum vel nemo, soluta nihil, non praesentium illum veritatis? ."
      },
      {
        _id: 1002,
        image: "./image/crypto.png",
        header: "Community Incentivise Platform Base on Smart Contract",
        descr:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias officiis deleniti, quisquam dolorum vel nemo, soluta nihil, non praesentium illum veritatis? ."
      }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <div className="home-bg-image">
          <div className="ui container">
            <Navbar />
            <div className="header-text-box">
              <div className="header-main">
                <span className="header-main-1">
                  Decentralzed Platform Empowering Community Enconomic
                </span>
                <span className="header-main-2">
                  The generation of highly scalable, autonomous-incentivized
                  platform base on decentralized network infrastructure that
                  empower the community economic.
                </span>
              </div>
              <Link to="/learnmore" className="learn-more">
                <span className="learn-more-word">Learn More</span>
                <span>&#10093;</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="recently-container">
          <div className="recently-header">
            <div className="ui centered  header">Recently Projects</div>
          </div>
          <div className="ui  centered five stackable cards">
            {this.state.recently_data.map(property => (
              <Card key={property._id} property={property} />
            ))}
          </div>
        </div>
        <Slideview />
        <div className="recently-container">
          <div className="recently-header">
            <div className="ui centered  header">Recently Updates</div>
          </div>
          <div className="ui  centered five stackable cards">
            {this.state.recently_data.map(property => (
              <Card key={property._id} property={property} />
            ))}
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default home;
