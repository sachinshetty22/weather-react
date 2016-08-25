import React from "react";

export default class Layout extends React.Component {
  render() {
    console.log("layout");
    return (
      <div>
        {this.props.children}
      </div>

    );
  }
}
