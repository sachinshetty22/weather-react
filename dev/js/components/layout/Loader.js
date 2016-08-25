import React, {Component} from 'react';

class Loader extends Component {
  render() {
    let {color} = this.props;
    if (!color)
      color = "#fff";
    const containerStyle = {
      color
    }
    return (
      <div>
        <div id="loaders">
          <div class="loader-container arc-scale" style={containerStyle}>
            <div class="loader">
              <div class="arc"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Loader;