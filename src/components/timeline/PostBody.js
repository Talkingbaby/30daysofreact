import React, { Component } from 'react';

import Post from './Post';

export default class TitleBar extends Component {
  render() {
    return (
        <div className="row">
          <div className="col justify-content-start">
            <div className="line"></div>

            <Post />

            <div className="item">
              <div className="avatar">
                <img
                  alt='doug' src="http://www.croop.cl/UI/twitter/images/doug.jpg" />
              </div>

              <div>
                <span className="time">10 am</span>
                <p>Read Day two article</p>
              </div>
            </div>

            <div className="item">
              <div className="avatar">
                <img
                  alt='doug' src="http://www.croop.cl/UI/twitter/images/doug.jpg" />
              </div>
              <div>
                <span className="time">10 am</span>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>

            <div className="item">
              <div className="avatar">
                <img
                  alt='doug' src="http://www.croop.cl/UI/twitter/images/doug.jpg" />
              </div>

              <div>
                <span className="time">2:21 pm</span>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>

          </div>
        </div>
    )
  }
}