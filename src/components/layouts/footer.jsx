import React from "react";

function footer() {
  return (
    <React.Fragment>
      <div className="footer-container">
        <div className="footer-inner-container">
          <div className="footer-logo">
            <img src="./image/zeetomic-logo-footer.png" alt="" />
          </div>
          <p
            style={{ fontSize: "1.5rem", letterSpacing: "1px", color: "grey" }}
          >
            Copyright &copy; 2018 Zeetomic. All right reserved.
            <br /> A brainchild of SmallWorld Venture
          </p>

          <div className="footer-icons">
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
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default footer;
