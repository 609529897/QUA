import './index.scss'
import React, { Component } from 'react'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="demo demo--home">
        <h1 className="demo-title">QUA</h1>
        <div className="demo-description">
          <p>一个简单的组件库</p>
          <p>Icon：<a href="https://material.io/tools/icons/?style=baseline" rel="noopener noreferrer" target="_blank">Material Icons</a></p>
          <div />
          <p>动画实现：<a href="https://github.com/reactjs/react-transition-group" rel="noopener noreferrer" target="_blank">react-transition-group</a></p>
        </div>
      </div>
    )
  }
}

export default Index