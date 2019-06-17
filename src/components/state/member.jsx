import React, { Component } from "react";
class Member extends Component {
  state = {
    Person: [
      {
        id: 1,
        image: "image/bro-3.jpg",
        memberName: "Saing Sab",
        memberPosition: "Kernel Developer"
      },

      {
        id: 2,
        image: "image/bro-2.jpg",
        memberName: "Thul Rithy",
        memberPosition: "PR and Partnership"
      },

      {
        id: 3,
        image: "image/bro-4.jpg",
        memberName: "San Vuthy",
        memberPosition: "Full Stack Web Developer"
      }
    ]
  };
  render() {
    return (
      <div className="background-under-header-1">
        <div className="ui container">
          <h1 className="memberTitle">Our People</h1>
          <div className="ui grid">
            <div className="doubling three column row">
              {this.state.Person.map(Persons => (
                <div className="column" key={Persons.id}>
                  <center>
                    <img
                      className="ui small circular image image-style"
                      src={Persons.image}
                    />
                    <h3 className="memberName">{Persons.memberName}</h3>
                    <p className="memberPosition">{Persons.memberPosition}</p>
                  </center>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Member;
