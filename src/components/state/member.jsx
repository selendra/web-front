import React, { Component } from "react";
class Member extends Component {
  state = {
    Person: [
      {
        id: 1,
        image: "image/bro-3.jpg",
        memberName: "Saing Sab",
        memberPosition: "Co-Founder"
      },

      {
        id: 2,
        image: "image/bro-2.jpg",
        memberName: "Thul Rithy",
        memberPosition: "Advisor"
      },

      {
        id: 3,
        image: "image/bro-4.jpg",
        memberName: "Sokhomoliyuth Tea",
        memberPosition: "Technial Advisor"
      },
      {
        id: 4,
        image: "./image/bro-5.jpg",
        memberName: "Daveat Corn",
        memberPosition: "Mobile Developer"
      },
      {
        id: 5,
        image: "./image/bro-6.jpg",
        memberName: "Heang Piset",
        memberPosition: "Web Developer"
      },
      {
        id: 6,
        image: "./image/bro-7.jpg",
        memberName: "Chinyong Chhe",
        memberPosition: "Backend Developer"
      }
    ]
  };
  render() {
    return (
      <div className="background-under-header-1">
        <div className="ui container member-container">
          <h1 className="memberTitle">Our Team</h1>
          <div className="ui grid">
            <div className="doubling three column row">
              {this.state.Person.map(Persons => (
                <div className="column member-column-style" key={Persons.id}>
                  <center>
                    <img
                      className="ui small circular image image-style"
                      src={Persons.image}
                      alt={Persons.memberName}
                    />
                    <h3 style={{ color: "#fff" }} className="memberName">
                      {Persons.memberName}
                    </h3>
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
