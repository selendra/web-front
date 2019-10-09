import React, { Component } from "react";
import Slider from "react-slick";
export class slideshow extends Component {
  state = {
    slide_data: [
      {
        _id: 1001,
        number: 1,
        image: "./image/step-1.png",
        header: "How it works",
        descr:
          "the agreement between the owner of property with Zeeva's curator"
      },
      {
        _id: 1002,
        number: 2,
        image: "./image/step-1.png",
        header: "How it works",
        descr:
          "the agreement between the owner of property with Zeeva's curator"
      },
      {
        _id: 1003,
        number: 3,
        image: "./image/step-1.png",
        header: "How it works",
        descr:
          "the agreement between the owner of property with Zeeva's curator"
      },
      {
        _id: 1004,
        number: 4,
        image: "./image/step-1.png",
        header: "How it works",
        descr:
          "the agreement between the owner of property with Zeeva's curator"
      }
    ]
  };
  next = () => {
    this.slider.slickNext();
  };
  prev = () => {
    this.slider.slickPrev();
  };
  render() {
    const settings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      className: "slide-container",
      centerPadding: true,
      autoplay: true,
      autoplaySpeed: 10000
    };
    return (
      <React.Fragment>
        <div className="ui fluid container slide-container">
          <div className="btn-mv-left" onClick={this.prev}>
            <img src="./image/left-arrow.png" alt="" />
          </div>
          <Slider ref={slider => (this.slider = slider)} {...settings}>
            {this.state.slide_data.map(info => (
              <div key={info._id} className="slide-content">
                <div className="ui container">
                  <div className="ui stackable two column  grid">
                    <div className="column">
                      <center>
                        <img
                          // style={{ margin: "auto", marginTop: "1rem" }}
                          className="ui image fluid imageSlide"
                          src={info.image}
                          alt="it's so easy"
                        />
                      </center>
                    </div>
                    <div className="column">
                      <div className="slide-content-container">
                        <div className="slide-content-box">
                          <center>
                            <div className="ui header slide-content-header">
                              {info.header}
                            </div>
                            <div className="ui massive  circular label">
                              <div className="ui  header slide-content-label">
                                {info.number}
                              </div>
                            </div>
                            <div className="slide-content-description">
                              {info.descr}
                            </div>
                          </center>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <div className="btn-mv-right" onClick={this.next}>
            <img src="./image/right-arrow.png" alt="" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default slideshow;
