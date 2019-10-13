import React, { Component } from "react";
import Navbar from "./layouts/navbar";
// import { Link } from "react-router-dom";
import Slideview from "./slideshow";
import Footer from "./layouts/footer";

const card = (image, header, descr) => {
  return (
    <div className="card card-style">
      <center>
        <div className="card-image-background">
          <img
            className="ui medium image"
            src={image}
            alt="vitamin-air"
            srcSet=""
          />
        </div>
      </center>
      <div className="description center aligned description-style">
        <div className="ui medium grey header description-style-header">
          {header}
        </div>
        <div className="description-sub">{descr}</div>
      </div>
    </div>
  );
};
const cards = (id, image, header, descr) => {
  return (
    <div key={id} className="card card-style">
      <div className="image">
        <img
          className="ui medium image card-image-border"
          src={image}
          alt="vitamin-air"
          srcSet=""
        />
      </div>
      <div className="description center aligned description-style">
        <div className="ui medium grey header header-update">{header}</div>
        <div className="description-sub">{descr}</div>
      </div>
    </div>
  );
};

class home extends Component {
  state = {
    recently_data: [
      {
        _id: 1000,
        image: "./image/vitamin-air.png",
        header: "Blockchain as a Customer Loyalty solution",
        descr:
          "Customer loyalty programs allow companies to reward customers who make purchases frequently or on a specified period."
      },
      {
        _id: 1001,
        image: "./image/vitamin-air-v.png",
        header: "Crowdfunding And Vested",
        descr:
          "Our Platform enables any startup to create an asset and accept crowdfunding secured by the Zeetomic custodian account."
      },
      {
        _id: 1002,
        image: "./image/crypto.png",
        header: "API for Payment Solutions",
        descr:
          "With our robust API developers can access payment ecosystems for a more dynamic transition of value."
      }
    ],
    updates_data: [
      {
        _id: 1000,
        image: "./image/city.jpg",
        header: "Community Incentivise Platform Base on Smart Contract",
        descr:
          "Zeeva ultivmate goal is to makes the network more decentralized, efficient, equalized, robust and secure, thus enabling healthier,safer, and more open internet for community."
      },
      {
        _id: 1001,
        image: "./image/city-1.jpg",
        header: "Decentralized Internet Sharing",
        descr:
          "Zeeva ultivmate goal is to makes the network more decentralized, efficient, equalized, robust and secure, thus enabling healthier,safer, and more open internet for community."
      },
      {
        _id: 1002,
        image: "./image/city-2.jpg",
        header: "ISO Listing and Trading",
        descr:
          "Zeeva ultivmate goal is to makes the network more decentralized, efficient, equalized, robust and secure, thus enabling healthier,safer, and more open internet for community."
      }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <div className="home-bg-image">
          <div className="ui container ">
            <Navbar sidevalue={this.state.slidebar} open={this.opensidebar} />
            <div className="ui text container header-text-box" style={{margin: "0px"}}>
              <div className="header-main">
                <h1 className="header-main-1">
                The Platform for the Issuance and Management of Digital Asset
                </h1>
                <h2 className="header-main-2">
                We provide trusted global solutions for creating a digital asset. Customer Loyalty | Real Estate | Vested Shares | Payment Solution
                </h2>
                <br/>
                {/* <Link to="/learnmore " className="learn-more">
                <span className="learn-more-word">Learn More</span>
                <span className="arrow-home">&#10093;</span>
              </Link> */}
              <a href="https://github.com/zeetomic/mobile/releases/download/0.2.test/zee_test_v0_2.apk"><button className="ui massive black button get-apk"> <i class="android icon android-icon"></i>Get Android APK</button></a>
              </div>
              
            </div>
          </div>
        </div>
        <div className="recently-container">
          <div className="recently-header">
            <div className="ui centered  header">Recently Projects</div>
          </div>
          <div className="ui  centered five stackable cards card-container">
            {this.state.recently_data.map(property => (
              <React.Fragment key={property._id}>
                {card(property.image, property.header, property.descr)}
              </React.Fragment>
            ))}
          </div>
        </div>
        <Slideview />
        <div className="recently-container">
          <div className="recently-header">
            <div className="ui centered  header">Recently Updates</div>
          </div>
          <div className="ui  centered five stackable cards card-container">
            {this.state.updates_data.map(value =>
              cards(value._id, value.image, value.header, value.descr)
            )}
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default home;