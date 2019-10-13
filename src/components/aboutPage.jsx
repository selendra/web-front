import React from "react";
import Member from "./state/member";
import Navbar from "./layouts/navbar";
import Footer from "./layouts/footer";
const About = () => {
  return (
    <React.Fragment>
      <div className="background-header">
        <Navbar />
        <div className="ui text container">
          <div className="ui stackable two column grid about-column-main">
            <div className="four wide column">
              <h1 className="h1-ABOUT">ABOUT</h1>
            </div>
            <div className="twelve wide column about-column-style">
              <p className="color-about-p">
              Zeetomic is a new generation of trusted global solutions for creating a digital asset.  Customer Loyalty, Real Estate, Vested Shares and Payment Solution based on blockchain.
              </p>
              <hr size="2" />
              <p className="color-about-p">
              The platform is designed to bring collectively a set of logistics, private equity, food, and hospitality transaction more efficiency. We have built a risk-free infrastructure established for security/utility token offerings on Zeetomic to maximize the safety and security of transactions on the Platform.
              </p>
              <p className="color-about-p">
              Zeetomic Platform currently built on top of the Stellar network and engages with advanced blockchain technology to extended capabilities as fast transaction processing at low cost, enhanced the security of all processes-from issuance to storage to transfers of tokens for swap, trading on the market.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" aboutPageContainer">
        <div className="background-under-header">
          <div className="ui stackable two column grid">
            <div className="column">
              <div className="columnLeft">
                <h1 className="h1-mission"> Mission</h1>
                <p className="p-about-size">
                Fast, simple and cost reduction for security/utility token issuing platform.
                </p>
              </div>
            </div>
            <div className="column">
              <div className="circle" />
            </div>
          </div>
          <div className="about-mr-style" />
          <div className="ui stackable two column grid">
            <div className="column">
              <div className="circleRight" />
            </div>
            <div className="column">
              <div className="columnRight">
                <h1 className="h1-mission1">Vision</h1>
                <p className="p-about-size">
                Zeetomic is a bridge of blockchain with a single and simple endpoint integration that empowers all classes of the business ecosystem. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="background-under-header">
        <div className="ui text container">
          <div className="ui stackable two column grid">
            <div className="column">
              <div className="ui right aligned container">
                <div className="ui sizer vertical segment">
                  <div className="ui huge header">
                    <h1 className="about-misson ">Mission</h1>
                  </div>
                  <p className="about-p">
                    Creation of a new class of low-risk tokens base on hight
                    yield and illiquid real assets
                  </p>
                </div>
              </div>
            </div>
            <div className=" column">
              <div className="ui left aligned container">
                <div className="ui sizer vertical segment">
                  <div className="ui huge header">
                    <h1 className="about-misson-1">Vision</h1>
                  </div>
                  <p className="about-p-1">
                    Creation of a new class of low-risk tokens base on hight
                    yield and illiquid real assets
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <Member />
      <Footer />
    </React.Fragment>
  );
};

export default About;
