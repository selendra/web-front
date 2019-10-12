import React, {Component} from 'react'
import Navbar from "./layouts/navbar";
import Footer from "./layouts/footer";
class successfullyverified extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                {/* <div className="ui container"> hi check*/}
            <div className="background-secessful">
            <Navbar/>
            <div className="ui centered card sucessful-card">
            <div className="image-sucessful">
            <img className="ui centered small image"  src="image/correct.svg" alt=""/>
            </div>
            <center className="header-sucessful">
            <h1>User Successfully Activated</h1>
            <p> Congratulations your user successfully activated. Please login to perform other operations.</p>
            
            <a href="https://app.zeetomic.com"><button className="ui teal button sucessful-button">Go to The Platform</button></a>
            </center>  
          
      </div>
      </div>
      {/* </div> */}
      <Footer/>
      </React.Fragment>
         );
    }
}
 
export default successfullyverified;