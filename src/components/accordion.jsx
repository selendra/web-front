import React, { Component } from "react";
import { Accordion } from "semantic-ui-react";

export default class AccordionExampleStandard extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <Accordion>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <h2 className="h2-style">Is Zeeva a cryptocurrency?</h2>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p className="p-style-accordion">
            Yes! It is the first cryptocurrency specifically created to be used
            in your digital life. While many cryptocurencies today are used for
            investment and speculation, Kin was created to be used for your
            daily online interactions with your favorite apps and sites.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <h2
            style={{ borderTop: "1px solid darkgrey", marginTop: "-9px" }}
            className="h2-style"
          >
            What exactly are cryptocurrecies?
          </h2>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p className="p-style-accordion">
            There are many breeds of dogs. Each breed varies in size and
            temperament. Owners often select a breed of dog that they find to be
            compatible with their own lifestyle and desires from a companion.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <h2
            style={{ borderTop: "1px solid darkgrey", marginTop: "-9px" }}
            className="h2-style"
          >
            Why am i getting Zeeva?
          </h2>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p className="p-style-accordion">
            A pet shop may be the most convenient way to buy a dog. Buying a dog
            from a private owner allows you to assess the pedigree and
            upbringing of your dog before choosing to take it home. Lastly,
            finding your dog from a shelter, helps give a good home to a dog who
            may not find one so readily.
          </p>
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 3}
          index={3}
          onClick={this.handleClick}
        >
          <h2
            style={{ borderTop: "1px solid darkgrey", marginTop: "-9px" }}
            className="h2-style"
          >
            How can I use my Zeeva?
          </h2>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
          <p className="p-style-accordion">
            There are many breeds of dogs. Each breed varies in size and
            temperament. Owners often select a breed of dog that they find to be
            compatible with their own lifestyle and desires from a companion.
          </p>
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 4}
          index={4}
          onClick={this.handleClick}
        >
          <h2
            style={{ borderTop: "1px solid darkgrey", marginTop: "-9px" }}
            className="h2-style"
          >
            Can i exchange Zeeva?
          </h2>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 4}>
          <p className="p-style-accordion">
            There are many breeds of dogs. Each breed varies in size and
            temperament. Owners often select a breed of dog that they find to be
            compatible with their own lifestyle and desires from a companion.
          </p>
        </Accordion.Content>
      </Accordion>
    );
  }
}
