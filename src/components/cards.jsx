import React from "react";
function cards(props) {
  const { image, header, descr } = props.property;
  return (
    <React.Fragment>
      <div className="card card-style">
        <div className="card-image-background">
          <div className="image">
            <img
              className="ui medium image"
              src={image}
              alt="vitamin-air"
              srcSet=""
            />
          </div>
        </div>
        <div className="description center aligned description-style">
          <div className="ui medium grey header">{header}</div>
          <div className="description-sub">{descr}</div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default cards;
