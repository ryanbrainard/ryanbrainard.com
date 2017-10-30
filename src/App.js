import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <a href="/" style={{textDecoration : 'none'}}>
          <h1>ryanbrainard.com</h1>
        </a>
        <nav>
          <ul>
            <li>
              <a href="https://www.facebook.com/ryanbrainard">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/ryanbrainard">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.github.com/ryanbrainard">
                <i className="fa fa-github"></i>
              </a>
            </li>
            <li>
              <a href="http://stackoverflow.com/users/129492/ryanbrainard">
                <i className="fa fa-stack-overflow"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ryanbrainard  ">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </nav>
        <div id="mainBlock">
      
        </div>
      </div>
    );
  }
}

export default App;
