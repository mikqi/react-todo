import React, { Component } from 'react';
import Navigation from './Navigation';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}
