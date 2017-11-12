import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      selectedIndex: 0
    }
  }

  checkScreenWidth() {
    
  }

  changeIframeWidth(width) {

  }

  render() {
    return (
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-header">
            <a>
              Select Device:
            </a>
          </div>
          <div className="navbar-platform">
            <ul className="navbar-nav">
              <li className="">
                <a href="#" data-width="320">
                  <i className="fa fa-mobile-phone fa-lg"></i>
                </a>
              </li>
              <li>
                <a href="#" data-width="320">
                  <i className="fa fa-tablet fa-lg"></i>
                </a>
              </li>
              <li>
                <a href="#" data-width="320">
                  <i className="fa fa-laptop fa-lg"></i>
                </a>
              </li>
              <li>
                <a href="#" data-width="320">
                  <i className="fa fa-desktop fa-lg"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default App;
