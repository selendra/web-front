import React from "react";

function footer() {
  return (
    <React.Fragment>
      <div className="footer-container">
        <div className="footer-inner-container">
          <div className="footer-logo">
            <img src="./image/zeetomic-logo-footer.png" alt="" />
          </div>
          <p className="footer-text">
            Copyright &copy; 2018 Zeetomic. All right reserved.
            <br /> A brainchild of SmallWorld Venture
          </p>

          <div className="footer-icons">
            <a href="https://www.facebook.com/zeetomic">
              <i className="ui  circular large facebook f icon" />
            </a>
            <a href="https://t.me/zeetomic">
              <i className="ui  circular large telegram plane icon" />
            </a>
            <a href="https://www.linkedin.com/company/zeetomic">
              <i className="ui  circular large linkedin alternate icon" />
            </a>
            <a href="https://medium.com/zeetomic">
              <i className="ui circular  large  medium m icon" />
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default footer;
