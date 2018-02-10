import React, { Component } from 'react';

export default class Post extends Component {
    render() {
        const {activity} = this.props;
        return (
            <div className="item">
                <div className="avatar">
                    <img
                        alt='doug'
                        src={activity.user.avatar} />
                </div>
                <div className="content">
                    <div>
                        <span className="time">{activity.timestamp}</span>
                        <p>{activity.text}</p>
                    </div>
                    <div className="comments">
                        <sub>{activity.comments.length}</sub>
                        <i className="material-icons">&#xE0CB;</i>
                    </div>
                </div>
            </div>
        )
    }
}