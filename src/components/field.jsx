import React, { Component } from 'react';
import Navbar from "./layouts/navbar";
import Footer from "./layouts/footer";
class failedverification extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                {/* <div className="ui container"> */}
            <div className="background-secessful">
            <Navbar/>
            <div className="ui centered card sucessful-card">
            <div className="image-sucessful">
            <img className="ui centered small image"  src="image/incorrect.svg" alt=""/>
            </div>
            <center className="header-sucessful">
            <h1>User Verification Failed</h1>
            <p> The user verification was not successful. Please contact our support at support@zeetomic.com</p>
            
            <a href="https://www.zeetomic.com"><button className="ui teal button sucessful-button">Go Back</button></a>
            </center>  
          
      </div>
      </div>
      {/* </div> */}
      <Footer/>
      </React.Fragment>
         );
    }
}
 
export default failedverification;