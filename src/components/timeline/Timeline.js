import React, { Component } from 'react';

import TitleBar from './TitleBar';
import PostBody from './PostBody';

export default class Timeline extends Component {
  render() {
    return (
      <div className="container">
        <TitleBar title="Timeline"/>
        <PostBody />
      </div>
    )
  }
}