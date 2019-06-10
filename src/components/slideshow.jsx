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
      infinite: true
      // dots: true,
      // autoplay: true,
      // autoplaySpeed: 2000,
      // arrows: true
    };
    // const { id, number, image, header, descr } = this.state.slide_data;
    return (
      <React.Fragment>
        <div className="ui fluid container">
          <Slider ref={slider => (this.slider = slider)} {...settings}>
            {this.state.slide_data.map(info => (
              <div key={info._id} className="slide-content">
                <div className="ui button" onClick={this.prev}>
                  Previous
                </div>
                <div className="ui stackable  grid container">
                  <div className="eight wide column">
                    <img
                      className="ui large image"
                      src={info.image}
                      alt="it's so easy"
                    />
                  </div>
                  <div className="eight wide column column-box">
                    <div className="column-text-box">
                      <div className="ui  header">{info.header}</div>
                      <div className="ui massive  circular label">
                        <div className="ui  header">{info.number}</div>
                      </div>
                      <div className="description">{info.descr}</div>
                    </div>
                  </div>
                </div>
                <div className="ui button" onClick={this.next}>
                  Next
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </React.Fragment>
    );
  }
}

export default slideshow;
