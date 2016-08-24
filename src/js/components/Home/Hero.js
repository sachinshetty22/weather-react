import React, {Component} from 'react';

class Hero extends Component {
    render() {
        return (
            <div class="jumbotron hero">
                <div class="container">
                    <div class="row">
                        <div class="visible-lg">
                            <div class="col-md-4">
                                <span class="pull-right subtext">Currently</span>
                            </div>
                            <div class="col-md-8">
                            </div>
                        </div>
                        <div class="col-md-12 text-center">
                            <div class="hidden-lg subtext">
                                Currently
                            </div>
                            <span class="mainsym">
                                <i class="wi wi-night-sleet" ></i>
                            </span>
                            <span id="maintemp">32</span>
                            <div class="btn-group btn-group-md typebutton">
                                <button type="button" class="btn btn-default">&#x2103; </button>
                                <button type="button" class="btn btn-default">&#x2109; </button>
                            </div>
                            <div class="hidden-lg subtext-buttom">
                                In Bangalore
                            </div>
                        </div>
                        <div class="visible-lg">
                            <div class="col-md-7">
                            </div>
                            <div class="col-md-5">
                                <span class="subtext-buttom">In Bangalore</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hero;