import React, {Component} from 'react';

class Subblock extends Component {
    render() {
        const {backgroundColor, date, min, max, condition,conditionicon } = this.props;

        const containerStyle = {
           backgroundColor : backgroundColor
        }

        return (
            <div class="col-lg-3 col-md-6 sub-block" style={containerStyle}>
                <h3>{date}</h3>
                <div class="text-center symb">
                    <i class={`wi ${conditionicon}`}></i>
                    <p class="symbtitle">{condition}</p>
                </div>
                <div class="range">
                    <span>{min}&deg; </span>
                    <span class="pull-right">{max}&deg; </span>
                </div>
            </div>
        );
    }
}

export default Subblock;