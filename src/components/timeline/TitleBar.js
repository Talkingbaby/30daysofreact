import React, { Component } from 'react';

export default class TitleBar extends Component {
  render() {
    return (
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">{this.props.title}</span>
            </div>
            <input type="text" className="form-control"
              placeholder="Search ..." />
            <div className="input-group-append">
              <span className="input-group-text"><i className="material-icons">&#xE8B6;</i></span>
            </div>
          </div>
    )
  }
}