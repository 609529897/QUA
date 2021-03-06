import React, { Component } from "react"
import "./index.scss"
import Code from "../code"
import Level11 from "./level1_1"
import Level12 from "./level1_2"
import Level21 from "./level2_1"
import Level22 from "./level2_2"
import Level23 from "./level2_3"

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      placement: "right",
      visible: false,
    }
  }

  onOpen(placement) {
    this.setState({
      placement: placement,
      visible: true,
    })
  }

  render() {
    return (
      <div className="demo demo--quastore">
        <h1 className="demo-title">QuaStore 简单的组件通信模式</h1>
        <div className="demo-description">
          采用的是发布者-订阅者模式传递状态，状态更新时只会渲染当前的组件。
        </div>
        <div className="panel">
          <h2 className="panel-title">演示</h2>
          <div className="panel-content">
            <div className="panel-line">
              <Level11>
                <Level21>
                </Level21>
              </Level11>
            </div>

            <div className="panel-line">
              <Level12>
                <Level22>
                </Level22>
                <Level23>
                </Level23>
              </Level12>
            </div>
          </div>
        </div>
        <div className="panel">
          <h2 className="panel-title">示例代码</h2>
          <div className="panel-content">
            <Code>
              {`componentDidMount () {
    // 组件内添加订阅
    this.unsubscribe = QuaStore.subscribe('level2_2', this.setCount.bind(this))
}
componentWillUnmount () {
    // 删除订阅
    this.unsubscribe()
}
// 通知按钮
<Button onClick={() => {
    cooStore.notify('level2_2')
}}>通知【第二层:2-2】数据变化了</Button>`}
            </Code>
          </div>
        </div>
        <div className="panel">
          <h2 className="panel-title">属性</h2>
          <div className="panel-content">
            <p key="1">
              订阅：this.unsubscribe = QuaStore.subscribe('状态标识',/*发布对应状态时执行的函数*/)
            </p>
            <br />
            <p key="2">删除订阅：this.unsubscribe()</p>
            <br />
            <p key="3">发布：cooStore.notify('状态标识')</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Index
