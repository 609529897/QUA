import React, { Component } from 'react'
import { quaStore } from '../../components'

class Index extends Component {
  constructor (props) {
    super(props)
    this.state={}
  }
  notifyLevel2_2() {
    quaStore.notify('level2_2')
  }

  notifyLevel2_3 () {
   quaStore.notify('level2_3');
}

  render() {
    return (
      <div className="level">
        <div className="level-name">第二层：2-1</div>
          <button className="clickButton" onClick={this.notifyLevel2_2.bind(this)}>通知【第二层:2-2】数据变化了</button>
          <button className="clickButton" onClick={this.notifyLevel2_3.bind(this)}>通知【第二层:2-3】数据变化了</button>
      </div>
    )
  }
}

export default Index
