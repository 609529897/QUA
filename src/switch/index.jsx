import React, { Component } from "react"
import "./index.scss"
import Code from "../code"
import { Switch } from "../components"

class index extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="demo demo--switch">
        <h1 className="demo-title">Switch 开关组件</h1>
        <div className="demo-description">
          Switch 开关
        </div>
        <div className="panel">
          <h2 className="panel-title">演示</h2>
          <div className="panel-content">
            <div className="panel-line">
              <Switch />
              <Switch defaultChecked />
              <Switch defaultChecked type="success" />
              <Switch defaultChecked type="error" />
            </div>
            <div className="panel-line">
              <Switch
                defaultChecked
                type="success"
                checkedText="开"
                uncheckedText="关"
              />
            </div>
            <div className="panel-line">
              <Switch disabled />
              <Switch defaultChecked disabled />
              <Switch defaultChecked type="success" disabled />
              <Switch defaultChecked type="error" disabled />
            </div>
          </div>
        </div>
        <div className="panel">
          <h2 className="panel-title">示例代码</h2>
          <div className="panel-content">
            <Code>
              {`<Switch defaultChecked/>
<Switch defaultChecked type='success' />
<Switch defaultChecked type='error' />
<Switch defaultChecked type='success' checkedText="开" uncheckedText="关" />`}
            </Code>
          </div>
        </div>
        <div className="panel">
          <h2 className="panel-title">属性</h2>
          <div className="panel-content">
            <p><strong>defaultChecked</strong> 默认开启</p> 
            <br />
            <p><strong>checkedText</strong> 开启时显示的文字</p>
            <br />
            <p><strong>uncheckedText</strong> 关闭时显示的文字</p>
            <br />
            <p><strong>type</strong> 类型，可选值 primary | success | error</p>
            <br />
            <p><strong>size</strong> 大小，可选值 default | large | small</p>
            <br />
            <p><strong>disabled</strong> 禁用</p>
            <br />
            <p><strong>onChange</strong> 点击时执行的函数</p>
            <br />
          </div>
        </div>
      </div>
    )
  }
}

export default index
