import React from "react";
import Member from "./state/member";
const About = () => {
  return (
    <React.Fragment>
      <div className="background-header">
        <div className="ui text container">
          <div className="ui stackable two column grid">
            <div className="four wide column">
              <h1 className="h1-ABOUT">ABOUT</h1>
            </div>
            <div className="twelve wide column">
              <p className="color-about-p">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempore id nam voluptates, repellendus harum ipsam ducimus
                recusandae{" "}
              </p>
              <hr size="2" />
              <p className="color-about-p">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Placeat voluptatem aut ipsum maiores quo eaque iusto natus eius
                voluptatibus vero molestiae quam, repudiandae alias, illo
                possimus deleniti mollitia suscipit necessitatibus libero in. Ab
                hic reprehenderit omnis asperiores magni animi? Quaerat non a,
                eligendi deleniti vel earum delectus aspernatur corrupti id!
              </p>
              <p className="color-about-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                tempore numquam nulla hic? Aliquam, molestias aut. Quas
                repellendus quod perspiciatis perferendis nulla sapiente, sequi
                ullam porro unde reprehenderit voluptatem, dolor iste adipisci
                deleniti aut dolorem totam accusamus magnam illo, officia rerum
                consequuntur? Recusandae quasi nam vel, rerum praesentium sed,
                vitae quaerat velit nesciunt in maxime quos{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="background-under-header">
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
      </div>
      <Member />
    </React.Fragment>
  );
};

export default About;
