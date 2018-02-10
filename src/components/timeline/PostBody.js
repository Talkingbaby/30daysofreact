import React, { Component } from 'react';

import Post from './Post';

const activities = [
    {
    timestamp: new Date().getTime(),
    text: "Ate lunch",
    user: {
      id: 1,
      name: 'Nate',
      avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
    },
    comments: [
      { from: 'Ari', text: 'Me too!' }
    ]
  },
  {
    timestamp: new Date().getTime(),
    text: "Woke up early for a beautiful run",
    user: {
      id: 2, name: 'Ari',
      avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
    },
    comments: [{ from: 'Nate', text: 'I am so jealous' }]
  },
]

export default class TitleBar extends Component {
  render() {
    return (
        <div className="row">
          <div className="col justify-content-start">
            <div className="line"></div>

            {activities.map((activity) => <Post activity={activity}/>)}

          </div>
        </div>
    )
  }
}