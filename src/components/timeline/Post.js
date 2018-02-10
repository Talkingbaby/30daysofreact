import React, { Component } from 'react';

export default class Post extends Component {
    render() {
        return (
            <div className="item">
                <div className="avatar">
                    <img
                        alt='doug'
                        src="http://www.croop.cl/UI/twitter/images/doug.jpg" />
                </div>
                <div>
                    <span className="time">An hour ago</span>
                    <p>Ate lunch</p>
                </div>
            </div>
        )
    }
}