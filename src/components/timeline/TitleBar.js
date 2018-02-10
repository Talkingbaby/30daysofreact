import React, { Component } from 'react';

export default class TitleBar extends Component {
  render() {
    return (
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">Timeline</span>
            </div>
            <input type="text" className="form-control"
              placeholder="Search ..." />
            <div className="input-group-append">
              <span className="input-group-text"><div className="fa fa-search searchIcon"></div></span>
            </div>
          </div>
    )
  }
}