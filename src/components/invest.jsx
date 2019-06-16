import React from "react";
import Navbar from "./layouts/navbar";
import Footer from "./layouts/footer";
import { Link } from "react-router-dom";
const invest = () => {
  return (
    <div>
      <React.Fragment>
        <div className="invest-container">
          <Navbar />
          <div className="ui container invest-sub-container">
            <div className="invest-header">
              <h1 className="ui big header invest-main-header">
                Purpose-built student accommodation in Sala Doung
              </h1>
              <h2 className="ui header text-grey text-rm-mt">
                Newly-built PBSA block of 124 Studios is available for
                Investment.
              </h2>
            </div>
            <div className="ui cotainer invest-text-container">
              <div className="ui grid stackable">
                <div className="eight wide column invest-column-left">
                  <div className="ui grid two column">
                    <div className="column">
                      <div className="image">
                        <img
                          className="ui small circular  image invest-image"
                          src="./image/sample-project-photo.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="column">
                      <div className="ui  header text-blue">
                        Kirirom Mountain
                      </div>
                      <div className="description text-white">
                        #35, 600BIS, Touk Kork
                        <br /> Phnom Penh
                      </div>
                    </div>
                  </div>
                </div>
                <div className="eight wide column">
                  <div className="ui two column grid">
                    <div className="row">
                      <div className="column">
                        <div className="ui small header text-white">
                          Funding Target
                        </div>
                        <div className="ui medium header text-blue">
                          $ 1,000,000
                        </div>
                      </div>
                      <div className="column">
                        <div className="ui small header text-white">
                          Equity Share
                        </div>
                        <div className="ui header text-blue">30%</div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="column">
                        <div className="ui small header text-white">
                          Expected Returns
                        </div>
                        <div className="ui header text-blue">
                          15.72%
                          <div className="description">(Annualised)</div>
                        </div>
                      </div>
                      <div className="column">
                        <div className="ui small header text-white">
                          Project Terms
                        </div>
                        <div className="ui header text-blue">12 Months</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ui inverted divider" />
              <div className="ui stackable grid grid-panel-bottom">
                <div className="six wide column">
                  <span className="text-invest-panel">SHARE ON</span>
                  <span className="footer-icons invest-icons">
                    <a href="https://www.youtube.com">
                      <i
                        style={{ borderColor: "" }}
                        className="ui  circular large facebook f icon"
                      />
                    </a>
                    <a href="https://www.youtube.com">
                      <i className="ui  circular large telegram plane icon" />
                    </a>
                    <a href="https://www.youtube.com">
                      <i className="ui  circular large twitter icon" />
                    </a>
                    <a href="https://www.youtube.com">
                      <i className="ui blue circular large normal icon">
                        <img
                          src="./image/micon.png"
                          alt="this is medium icon footer-icon-style "
                        />
                      </i>
                    </a>
                  </span>
                </div>
                <div className="seven wide column">
                  <span className="text-grey">
                    To see more information, Please{" "}
                    <Link to="/login">Login</Link> Or
                  </span>
                </div>
                <div className="three wide column">
                  <span className="description">
                    <button className="ui massive button">Sign Up</button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-project">
          <div className="ui huge centered header about-project-header">
            About Project
          </div>
          <div className="ui centered stackable grid container">
            <div
              style={{ margin: "auto", overflowWrap: "break-word" }}
              className="six wide column"
            >
              <div className="ui text container">
                <p style={{ overflowWrap: "break-word !important" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  voluptatibus dolor necessitatibus nisi corrupti exercitationem
                  ea, repellat magni magnam, inventore aliquid officiis ut sequi
                  tempora sed rerum debitis, perspiciatis libero.Nihil ipsa
                  fugiat aliquam aperiam omnis voluptas odit nesciunt? Et
                  doloribus molestiae accusantium quam nulla beatae unde ratione
                  consectetur cumque esse ipsum autem, illo vero adipisci,
                  dolorum, veniam velit numquam! lore
                </p>
              </div>
              <p />
              <div className="ui text container">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  voluptatibus dolor necessitatibus nisi corrupti exercitationem
                  ea, repellat magni magnam, inventore aliquid officiis ut sequi
                  tempora sed rerum debitis, perspiciatis libero.Nihil ipsa
                  fugiat aliquam aperiam omnis voluptas odit nesciunt? Et
                  doloribus molestiae accusantium quam nulla beatae unde ratione
                  consectetur cumque esse ipsum autem, illo vero adipisci,
                  dolorum, veniam velit numquam! lore
                </p>
              </div>
            </div>
            <div className="six wide column">
              <div className="ui image">
                <img
                  className="ui massive image"
                  src="./image/sample-project-photo.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </React.Fragment>
    </div>
  );
};

export default invest;
