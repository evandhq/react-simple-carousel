const Carousel = require('./../../src');
const ReactDOM = require('react/lib/ReactDOM');
const React = require('react');

const el = document.getElementById('example');
ReactDOM.render((
  <div className="slides">
    <Carousel>
      <div className="slide slide-1">
        <p>Hi,<br/>I'm Kevin!</p>
        <img src="img/slide-1.jpg"/>
      </div>

      <div className="slide slide-2">
        <img src="img/slide-2.jpg"/>
      </div>

      <div className="slide slide-3">
        <p>This is a beautiful USB cable!</p>
        <img src="img/slide-3.jpg"/>
      </div>
    </Carousel>
  </div>
), el);
