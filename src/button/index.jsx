import React, { Component } from "react";
import "./index.scss";
import Code from "../code";
import { Button, Icon } from "../components";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="demo demo--button">
        <h1 className="demo-title">Button按钮</h1>
        <div className="demo-description">
          Button 按钮
        </div>
        <div className="panel">
          <h2 className="panel-title">演示</h2>
          <div className="panel-content">
            <div className="panel-litetitle">基础样式</div>
            <div className="panel-line">
              <Button>Button</Button>
              <Button type="danger">danger</Button>
              <Button type="success">success</Button>
              <Button type="normal">normal</Button>
              <Button size="large">large</Button>
            </div>
            <div className="panel-litetitle">实心</div>
            <div className="panel-line">
              <Button fill>Buttton</Button>
              <Button fill type="danger">danger</Button>
              <Button fill type="success">success</Button>
              <Button fill type="normal">normal</Button>
              <Button fill size="large">large</Button>
            </div>

            <div className="panel-litetitle">带Icon</div>
            <div className="panel-line">
              <Button><Icon type="add" />add</Button>
              <Button loading>loading</Button>
              <Button disabled><Icon type="add" />disabled</Button>
            </div>

            <div className="panel-litetitle">圆形</div>
            <div className="panel-line">
              <Button circle><Icon type="add" /></Button>
              <Button circle type="danger"><Icon type="add" /></Button>
              <Button circle type="success"><Icon type="add" /></Button>
              <Button circle type="normal"><Icon type="add" /></Button>
              <Button circle size="large"><Icon type="add" /></Button>
            </div>
          </div>
        </div>
        <div className="panel">
          <h2 className="panel-title">示例代码</h2>
          <div className="panel-content">
            <Code>
              {`<Button type="success">success</Button>
<Button type="normal">normal</Button>
<Button loading>loading</Button>
<Button disabled><Icon type="add" />disabled</Button>`}
            </Code>
          </div>
        </div>
        <div className="panel">
          <h2 className="panel-title">属性</h2>
          <div className="panel-content">
            <p key="1">
              <strong>size</strong> 大小，可选值: small | large | default
            </p>
            <br />
            <p key="3">
              <strong>type</strong> 类型，可选值: primary | success | normal | danger
            </p>
            <br />
            <p key="2"><strong>disabled</strong> 禁用</p>
            <br />
            <p key="4"><strong>circle</strong> 圆形</p>
            <br />
            <p key="5"><strong>fill</strong> 实心</p>
            <br />
            <p key="6"><strong>loading</strong> 正在加载</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
