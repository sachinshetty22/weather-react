import React from "react";
import Hero from "../components/Home/Hero";
import Subblock from "../components/Home/Subblock";
export default class Home extends React.Component {
  render() {
    console.log("Home");
    return (
      <div>
        <Hero></Hero>
        <Subblock backgroundcolor="#e74c3c"></Subblock>
        <Subblock backgroundcolor="#f39c12"></Subblock>
        <Subblock backgroundcolor="#27ae60"></Subblock>
        <Subblock backgroundcolor="#16a085"></Subblock>
      </div>
    );
  }
}
