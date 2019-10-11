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
                Zeetomic is a blockchain-based real economy with new exciting
                opportunities for individual investors, SMEs, and large
                institutions
              </p>
              <hr size="2" />
              <p className="color-about-p">
                The platform is designed to bring togetther aset managers/owners
                and investors by creating low-risk blockchain-based securities
                backed by assets in real estate, agriculture, the manaufactruing
                sector, logistics, private equity, and others. Wehvae built
                risk-free infrastructure founded upon a legal framework
                explicitly established for security token offerings on
                Smartlands to maximize the safety and security of investing on
                the Platform.
              </p>
              <p className="color-about-p">
                Smarlands Platform is built on the Stellar network and employs
                advanced blockchain technology with such extended capabilities
                as fast transactions processing at low cost, enhanced securit of
                all processes-from issuance to storage to transfers of tokens
                for tranding on the secondary market others. on the secondary
                market otheres.
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
                  Creation of a new class of low-risk tokens base on hight yield
                  and illiquid real assets
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
                  Creation of a new class of low-risk tokens base on hight yield
                  and illiquid real assets
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
