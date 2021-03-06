import React, { Component } from "react"
import { QuaStore, Button } from "../../components"

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  notifyLevel2_2() {
    QuaStore.notify("level2_2")
  }

  notifyLevel2_3() {
    QuaStore.notify("level2_3")
  }

  render() {
    return (
      <div className="level">
        <div className="level-name">第二层：2-1</div>
        <Button
          onClick={this.notifyLevel2_2.bind(this)}
        >
          通知【第二层:2-2】数据变化了
        </Button>
        <Button
          onClick={this.notifyLevel2_3.bind(this)}
        >
          通知【第二层:2-3】数据变化了
        </Button>
      </div>
    )
  }
}

export default Index
