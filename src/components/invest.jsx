import React from "react";
import Navbar from "./layouts/navbar";
import Footer from "./layouts/footer";
import { Link } from "react-router-dom";
import Member from "./state/member";
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
                          className="ui tiny circular image invest-image"
                          src="./image/rocket.jpeg"
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
                    <a href="https://www.facebook.com/zeetomic">
                      <i
                        style={{ borderColor: "" }}
                        className="ui  circular large facebook f icon"
                      />
                    </a>
                    <a href="https://t.me/zeetomic">
                      <i className="ui  circular large telegram plane icon" />
                    </a>
                    <a href="https://www.linkedin.com/company/zeetomic">
                      <i className="ui  circular large linkedin icon" />
                    </a>
                    <a href="https://medium.com/zeetomic">
                      <i className="ui  circular large medium m icon" />
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
            <div className="six wide column about-column-style">
              <p>
                A purpose-built student accommodation(PBSA) block in Nottingham,
                UK ocntaining 124 student apartments is currently available for
                investment on the Smartlands Platform. Nottingham hosts tow
                universities one of which (Nottingham Trent University) is
                within a a short walk to the property. The apartments are
                studios with en-suit bathroom that are in high demand.
                Construction of the property completed in Q3 2018 and it is
                fully occupied for this academic year.
              </p>
              <p>
                Purpose-built Student Accommodation is trandiionally a strong
                and stable investment and, in this case, provides both divided
                income (over 6% expected per year) and capital growth.
                Nottingham has two top tier universities and has significant
                demand for student Accommodation it is expected to wishstand the
                effects of Brexit volatilly due to its strong academic
                performance and global status, which means it will likely
                contiue to attract student from both the UK and abroad.
              </p>
            </div>
            <div className="ten wide column">
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
        <Member />
        <Footer />
      </React.Fragment>
    </div>
  );
};

export default invest;
