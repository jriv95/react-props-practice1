import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.header}</h1>
        <h1>{this.props.somekey}</h1>
        <p>{this.props.anotherkey}</p>
        <p>What is I didnt want a prop key and I just wanted this to show</p>
      </div>
      );
  }
}

export default Header;
