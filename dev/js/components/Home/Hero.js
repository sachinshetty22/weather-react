import React, {Component} from 'react';

class Hero extends Component {
    render() {
        const {currenttemp, city, type, condition, conditioncode, conditionicon } = this.props;
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
                                <i class={`wi ${conditionicon}`} ></i>
                            </span>
                            <span id="maintemp">{currenttemp}</span>
                            <div class="btn-group btn-group-md typebutton">
                                <button type="button" class="btn btn-default">&#x2103; </button>
                                <button type="button" class="btn btn-default">&#x2109; </button>
                            </div>
                            <div class="hidden-lg subtext-buttom">
                                In {city}
                            </div>
                        </div>
                        <div class="visible-lg">
                            <div class="col-md-7">
                            </div>
                            <div class="col-md-5">
                                <span class="subtext-buttom">In {city}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hero;