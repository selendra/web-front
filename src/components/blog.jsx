import React, { Component } from "react";
import { Modal } from "semantic-ui-react";

class Blog extends Component {
  state = {};
  render() {
    return (
      // <React.Fragment>
      //   <div className="blog-background-header">
      //     <h1 className="blog">BLOG</h1>
      //   </div>
      //   <div className="ui container blog-margin">
      //     <div className="ui stackable grid three column">
      //       <div className="column blur">
      //         <center className="shadowEvent">
      //           <div
      //             style={{
      //               backgroundImage:
      //                 'url("https://cdn-images-1.medium.com/max/1024/1*wi6WovY-PKomMRLaAtAZTA.jpeg")',
      //               height: "200px",
      //               backgroundPosition: "center center",
      //               backgroundSize: "cover"
      //             }}
      //           />
      //           <div className="index-background">
      //             <h4>KOOMPI Telegram Assistant</h4>
      //             <p className="index-description" />
      //             <p>
      //               As KOOMPI continues to grow in popularity and development,
      //               we strive to offer you the most power...
      //             </p>
      //             <p />
      //             <p className="bySomeOne">
      //               <span>Small World Venture</span>
      //             </p>
      //           </div>
      //         </center>
      //       </div>

      //       <div className="column blur">
      //         <center className="shadowEvent">
      //           <div
      //             style={{
      //               backgroundImage:
      //                 'url("https://cdn-images-1.medium.com/max/1024/1*wi6WovY-PKomMRLaAtAZTA.jpeg")',
      //               height: "200px",
      //               backgroundPosition: "center center",
      //               backgroundSize: "cover"
      //             }}
      //           />
      //           <div className="index-background">
      //             <h4>KOOMPI Telegram Assistant</h4>
      //             <p className="index-description" />
      //             <p>
      //               As KOOMPI continues to grow in popularity and development,
      //               we strive to offer you the most power...
      //             </p>
      //             <p />
      //             <p className="bySomeOne">
      //               <span>Small World Venture</span>
      //             </p>
      //           </div>
      //         </center>
      //       </div>

      //       <div className="column blur">
      //         <center className="shadowEvent">
      //           <div
      //             style={{
      //               backgroundImage:
      //                 'url("https://cdn-images-1.medium.com/max/1024/1*wi6WovY-PKomMRLaAtAZTA.jpeg")',
      //               height: "200px",
      //               backgroundPosition: "center center",
      //               backgroundSize: "cover"
      //             }}
      //           />
      //           <div className="index-background">
      //             <h4>KOOMPI Telegram Assistant</h4>
      //             <p className="index-description" />
      //             <p>
      //               As KOOMPI continues to grow in popularity and development,
      //               we strive to offer you the most power...
      //             </p>
      //             <p />
      //             <p className="bySomeOne">
      //               <span>Small World Venture</span>
      //             </p>
      //           </div>
      //         </center>
      //       </div>
      //     </div>

      //     <div className="ui stackable grid three column">
      //       <div className="column blur">
      //         <center className="shadowEvent">
      //           <div
      //             style={{
      //               backgroundImage:
      //                 'url("https://cdn-images-1.medium.com/max/1024/1*wi6WovY-PKomMRLaAtAZTA.jpeg")',
      //               height: "200px",
      //               backgroundPosition: "center center",
      //               backgroundSize: "cover"
      //             }}
      //           />
      //           <div className="index-background">
      //             <h4>KOOMPI Telegram Assistant</h4>
      //             <p className="index-description" />
      //             <p>
      //               As KOOMPI continues to grow in popularity and development,
      //               we strive to offer you the most power...
      //             </p>
      //             <p />
      //             <p className="bySomeOne">
      //               <span>Small World Venture</span>
      //             </p>
      //           </div>
      //         </center>
      //       </div>

      //       <div className="column blur">
      //         <center className="shadowEvent">
      //           <div
      //             style={{
      //               backgroundImage:
      //                 'url("https://cdn-images-1.medium.com/max/1024/1*wi6WovY-PKomMRLaAtAZTA.jpeg")',
      //               height: "200px",
      //               backgroundPosition: "center center",
      //               backgroundSize: "cover"
      //             }}
      //           />
      //           <div className="index-background">
      //             <h4>KOOMPI Telegram Assistant</h4>
      //             <p className="index-description" />
      //             <p>
      //               As KOOMPI continues to grow in popularity and development,
      //               we strive to offer you the most power...
      //             </p>
      //             <p />
      //             <p className="bySomeOne">
      //               <span>Small World Venture</span>
      //             </p>
      //           </div>
      //         </center>
      //       </div>

      //       <div className="column blur">
      //         <center className="shadowEvent">
      //           <div
      //             style={{
      //               backgroundImage:
      //                 'url("https://cdn-images-1.medium.com/max/1024/1*wi6WovY-PKomMRLaAtAZTA.jpeg")',
      //               height: "200px",
      //               backgroundPosition: "center center",
      //               backgroundSize: "cover"
      //             }}
      //           />
      //           <div className="index-background">
      //             <h4>KOOMPI Telegram Assistant</h4>
      //             <p className="index-description" />
      //             <p>
      //               As KOOMPI continues to grow in popularity and development,
      //               we strive to offer you the most power...
      //             </p>
      //             <p />
      //             <p className="bySomeOne">
      //               <span>Small World Venture</span>
      //             </p>
      //           </div>
      //         </center>
      //       </div>
      //     </div>
      //   </div>
      //   <br />
      //   <center>
      //     <button class="big ui button btn">Load More</button>
      //   </center>
      // </React.Fragment>

      <React.Fragment>
        <div className="blog-background-header">
          <h1 className="blog">BLOG</h1>
        </div>
        <div className="ui container margin-bottom">
          <div className="ui stackable three column equal height stretched grid">
            <div className="column">
              <div className="shadowEvent">
                <a
                  className="newsDetail"
                  href="https://medium.com/p/981c765f55c6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    style={{
                      backgroundImage:
                        'url("https://cdn-images-1.medium.com/max/960/1*M5btbITHfrf0_o8b4XWL5A.jpeg")',
                      height: "200px",
                      backgroundPosition: "center center",
                      backgroundSize: "cover"
                    }}
                  />
                  <div className="backgroundEvent">
                    <center>
                      <h3>A usual day at Emerald HUB</h3>
                    </center>
                    <br />
                    <p>
                      To spend the day at the Hub means see different faces and
                      enjoy a nice environment to work in. Let me expl...
                    </p>
                    <p className="badge">SmallWorld Venture</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="column">
              <div className="shadowEvent">
                {/* <a
                  className="newsDetail"
                  href="https://medium.com/p/4f3102f2d6da"
                  target="_blank"
                  rel="noopener noreferrer"
                > */}
                <div
                  style={{
                    backgroundImage:
                      'url("https://cdn-images-1.medium.com/max/910/1*oHIg3oiWxiuLbwj82zFN2Q.jpeg")',
                    height: "200px",
                    backgroundPosition: "center center",
                    backgroundSize: "cover"
                  }}
                />
                <div className="backgroundEvent">
                  <center>
                    <h3>A lovely TeaTalk</h3>
                  </center>
                  <br />
                  <p>
                    On last Friday evening, the 6th January, Smallworld hosted a
                    lovely&nbsp;TeaTalk. I am pretty sure that ...
                  </p>
                  <p className="badge">SmallWorld Venture</p>
                </div>
                {/* </a> */}
              </div>
            </div>
            <div className="column">
              <div className="shadowEvent">
                <a
                  className="newsDetail"
                  href="https://medium.com/p/5ee11afe8598"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    style={{
                      backgroundImage:
                        'url("https://cdn-images-1.medium.com/max/910/1*qWYKh6Uokl6lTQcku19K0w.jpeg")',
                      height: "200px",
                      backgroundPosition: "center center",
                      backgroundSize: "cover"
                    }}
                  />
                  <div className="backgroundEvent">
                    <center>
                      <h3>
                        Let’s take the boat with the SmallWorld team&nbsp;!
                      </h3>
                    </center>
                    <br />
                    <p>
                      Let’s take the boat with the SmallWorld team&nbsp;! What a
                      better way to start a week than by spending...
                    </p>
                    <p className="badge">SmallWorld Venture</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="column">
              <div className="shadowEvent">
                <a
                  className="newsDetail"
                  href="https://medium.com/p/7847583baaba"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    style={{
                      backgroundImage:
                        'url("https://cdn-images-1.medium.com/max/1024/1*OYPX0_U4bkfxFAM5HskNaA.jpeg")',
                      height: "200px",
                      backgroundPosition: "center center",
                      backgroundSize: "cover"
                    }}
                  />
                  <div className="backgroundEvent">
                    <center>
                      <h3>Who is pitching on the next Startup Party?</h3>
                    </center>
                    <br />
                    <p>
                      The next Startup Party will happen this Friday 10th
                      February and you may want to know which startups are g...
                    </p>
                    <p className="badge">SmallWorld Venture</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="column">
              <div className="shadowEvent">
                <a
                  className="newsDetail"
                  href="https://medium.com/p/e2085e448033"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    style={{
                      backgroundImage:
                        'url("https://cdn-images-1.medium.com/max/1024/1*HU9nKnNT_z0UY3TbeY7Dlg.jpeg")',
                      height: "200px",
                      backgroundPosition: "center center",
                      backgroundSize: "cover"
                    }}
                  />
                  <div className="backgroundEvent">
                    <center>
                      <h3>Smallworld Small Dinner</h3>
                    </center>
                    <br />
                    <p>
                      This Sunday, Smallworld team left Toul Kork and went to my
                      place the all afternoon to prepare and share an...
                    </p>
                    <p className="badge">SmallWorld Venture</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="column">
              <div className="shadowEvent">
                <a
                  className="newsDetail"
                  href="https://medium.com/p/a70235d7fc8b"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    style={{
                      backgroundImage:
                        'url("https://cdn-images-1.medium.com/max/910/1*VHMH72qjPiNkNPpFoTjjog.jpeg")',
                      height: "200px",
                      backgroundPosition: "center center",
                      backgroundSize: "cover"
                    }}
                  />
                  <div className="backgroundEvent">
                    <center>
                      <h3>Workshops from Remote Year in December</h3>
                    </center>
                    <br />
                    <p>
                      As new Remote teams have arrived in Phnom Penh, new
                      workshops will happen during this month&nbsp;! &lt;a
                      href="htt...
                    </p>
                    <p className="badge">SmallWorld Venture</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <br />
        <center>
          <button className="ui button btn">Load More</button>
          {/* <button class="btn btn-round btn-lg btn-filled-orange">
            Register
          </button> */}
        </center>
      </React.Fragment>
    );
  }
}

export default Blog;
