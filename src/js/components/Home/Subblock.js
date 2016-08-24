import React, {Component} from 'react';

class Subblock extends Component {
    render() {
        const {backgroundcolor} = this.props;
        const containerStyle = {
            "background-color": backgroundcolor
        }

        return (
            <div class="col-lg-3 col-md-6 sub-block" style={containerStyle}>
                <h3>WED 23</h3>
                <div class="text-center symb">
                    <i class="wi wi-night-sleet"></i>
                    <p class="symbtitle">Sunny</p>
                </div>
                <div class="range">
                    <span>32 &#x2103; </span>
                    <span class="pull-right">28 &#x2103; </span>
                </div>
            </div>
        );
    }
}

export default Subblock;