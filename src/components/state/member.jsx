import React, { Component } from 'react';
class Member extends Component {
    state = {
        Person: [
          {
            id: 1,
            image: "image/bro-1.jpg"
          },
    
          {
            id: 2,
            image: "image/bro-2.jpg"
          },
    
          {
            id: 3,
            image: "image/bro-3.jpg"
          },
    
          {
            id: 4,
            image: "image/bro-4.jpg"
          }
        ]
      };
    render() { 
        return ( <div className="background-under-header-1">
        <div className="ui container">
          <h1 className="memberTitle">Our People</h1>
          <div className="ui grid">
            <div className="doubling four column row">
              {this.state.Person.map(Persons => (
                <div className="column" key={Persons.id}>
                  <center>
                    <img
                      className="ui small circular image image-style"
                      src={Persons.image}
                    />
                  </center>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> );
    }
}
 
export default Member ;