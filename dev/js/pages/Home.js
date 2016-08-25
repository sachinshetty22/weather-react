import React from "react";
import Hero from "../components/Home/Hero";
import Subblock from "../components/Home/Subblock";
import {Loader} from "../components/layout/Loader";
import axios from "axios";
//var Loader = require('react-loaders').Loader;
export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      forecast: [],
      hero: {}
    }
  }


  componentDidMount() {
    var _this = this;
    this.serverRequest =
      axios
        .get("/weather")
        .then(function (result) {
          if (result.status == 200) {
            let { forecast, hero} = result.data;
            _this.setState({
              forecast,
              hero
            });
          }
          console.log(result);

        })
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }



  render() {
    const Subblocks = this.state.forecast.map((eachSubBlock, i) => <Subblock key={i} {...eachSubBlock}></Subblock>);

    return (
      <div>
        <Hero {...this.state.hero}></Hero>
        {Subblocks}
      </div>

    );
  }
}


