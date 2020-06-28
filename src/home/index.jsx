import "./index.scss";
import React, { Component } from "react";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="demo demo--home">
        <h1 className="demo-title">QUA</h1>
        <div className="demo-description">
          <h2>React 组件库</h2>
          <br />
          <h4>
            思路和样式：<a
              href="https://ant.design/index-cn"
              rel="noopener noreferrer"
              target="_blank"
            >
              Ant Design
            </a>
            </h4>
          <br />
          <h4>
            Icon：<a
              href="https://material.io/tools/icons/?style=baseline"
              rel="noopener noreferrer"
              target="_blank"
            >
              Material Icons
            </a>
          </h4>
          <br />
          <h4>
            动画实现：<a
              href="https://github.com/reactjs/react-transition-group"
              rel="noopener noreferrer"
              target="_blank"
            >
              react-transition-group
            </a>
          </h4>
        </div>
      </div>
    );
  }
}

export default Index;
