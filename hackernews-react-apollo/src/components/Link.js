import React, { Component } from 'react';

class Link extends Component {
  render() {
    return (
      <div>
        <h1>hey</h1>
        <div>
          {this.props.link.description}({this.props.link.url})
        </div>
      </div>
    );
  }
}

export default Link;
