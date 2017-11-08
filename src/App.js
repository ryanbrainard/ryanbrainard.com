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
            <SocialItem fa="facebook" href="https://www.facebook.com/ryanbrainard"/>
            <SocialItem fa="twitter" href="https://twitter.com/ryanbrainard"/>
            <SocialItem fa="github" href="https://www.github.com/ryanbrainard"/>
            <SocialItem fa="linkedin" href="https://www.linkedin.com/in/ryanbrainard  "/>
          </ul>
        </nav>
        <div id="mainBlock">
      
        </div>
      </div>
    );
  }
}

const SocialItem = function ({fa, href}) {
  return (
    <li>
      <a href={href}>
        <i className={`fa fa-${fa}`}></i>
      </a>
    </li>
  )
}

export default App;
