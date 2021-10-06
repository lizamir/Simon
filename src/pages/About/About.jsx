import { Component } from 'react';

import './About.scss';

export class About extends Component {
  render() {
    return (
      <div className="about">
        <p className="title"> About Simon</p>
        <p className="container">
          Welcome to the Simon. What is a Simon? <br />
          Get ready to watch, remember, repeat! The Simon game is the exciting
          electronic game of lights and sounds in which players must repeat
          random sequences of lights by pressing the colored pads in the correct
          order. It's fast-paced play, with lights and sounds that can challenge
          you. Experience the fun as you repeat the patterns and advance to
          higher levels. Keep track of your score as you challenge friends or
          try to beat your own high score.
          <br /> begin !!
        </p>
      </div>
    );
  }
}
