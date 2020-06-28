import React, { Component } from "react";
import "./index.scss";
import Code from "../code";
import { Placebo, Button } from "../components";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="demo demo--placebo">
        <h1 className="demo-title">Placebo 安慰剂组件</h1>
        <div className="demo-description">
          当页面加载很久时 Placebo 组件需要安慰用户，不要着急正在努力的加载哦。
        </div>
        <div className="panel">
          <h2 className="panel-title">演示</h2>
          <div className="panel-content">
            <div className="panel-line">
              <Button
                type="danger"
                onClick={() => {
                  Placebo.open({ fillColor: "255, 0, 0" });
                  setTimeout(() => {
                    Placebo.close();
                  }, 3000);
                }}
              >
                3秒钟红色的安慰
              </Button>
              <Button
                onClick={() => {
                  Placebo.open();
                  setTimeout(() => {
                    Placebo.close();
                  }, 5000);
                }}
              >
                5秒钟蓝色的安慰
              </Button>
            </div>
            <div className="panel-line">
            </div>
          </div>
        </div>
        <div className="panel">
          <h2 className="panel-title">示例代码</h2>
          <div className="panel-content">
            <Code>
              {`<button type="normal" onClick={() => {
    Placebo.open({ fillColor: '255, 0, 0' })
    setTimeout(() => {
        Placebo.close()
    }, 3000)
}}></button>`}
            </Code>
          </div>
        </div>
        <div className="panel">
          <h2 className="panel-title">注意</h2>
          <div className="panel-content">
            <p>调用 Placebo.close 进行关闭，组件不会销毁，下次打开不会重新创建组件</p>
            <br />
            <p>也可以调用 Placebo.desroy 进行销毁，会销毁组件；下次打开需要重新创建组件</p>
          </div>
        </div>
        <div className="panel">
          <h2 className="panel-title">属性</h2>
          <div className="panel-content">
            <p>
              <strong>fillColor</strong>
              给 open 函数传递一个对象，对象属性 fillColor 代表安慰剂颜色。默认颜色是蓝色！
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default Index;