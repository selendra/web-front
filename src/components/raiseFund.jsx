import React, { Component } from "react";
import Accordion from "./accordion";
import Navbar from "./layouts/navbar";
import Footer from "./layouts/footer";
class Raisfund extends Component {
  state = {
    FAQ: [
      {
        id: 1,
        q: "What's exactly is it?",
        faq: "relejefsfauefaiefsiefaiefasjiel;fjasfei"
      },
      {
        id: 2,
        q: "What's exactly is it?",
        faq: "relejefsfauefaiefsiefaiefasjiel;fjasfei"
      },
      {
        id: 3,
        q: "What's exactly is it?",
        faq: "relejefsfauefaiefsiefaiefasjiel;fjasfei"
      },
      {
        id: 4,
        q: "What's exactly is it?",
        faq: "relejefsfauefaiefsiefaiefasjiel;fjasfei"
      },
      {
        id: 5,
        q: "What's exactly is it?",
        faq: "relejefsfauefaiefsiefaiefasjiel;fjasfei"
      }
    ],
    showfaq: false
  };

  toggleHandler = () => {
    const doesShow = this.state.showfaq;
    this.setState({ showfaq: !doesShow });
  };
  render() {
    return (
      <React.Fragment>
        <div className="background-rais">
          <Navbar />
          <div className="padding-all-letter">
            <div>
              <h1 className="ui center aligned header text container h1-color-rais">
                Raise capital to grow your business
              </h1>
              <div className="ui center aligned container margain-p">
                <p className="p-color-rais">
                  Discover security tokens - regulated financial instrument
                </p>
                <p className="p-color-rais">on blockchain</p>
              </div>
            </div>
            <div className="ui center aligned container margin-top-2">
              <button className="ui massive primary button">Raise Now</button>
              {/* <p className="margin-p1">or</p>
              <a className="a-submit" href="#">
                Submit
              </a> */}
            </div>
          </div>
        </div>

        <div className="ui text aligned container padding-container-rasifund">
          <h1 className="ui header center aligned h1-apply">How to Apply</h1>
          <div className="ui  divided list">
            <Accordion />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Raisfund;
