import React, { Component } from "react";
import "./index.scss";
import Code from "../code";
import { Lazyimg, Button } from "../components";
import staticImg from '../images/static.webp';
import interchangeImg from '../images/interchange.gif';
import clearImg from '../images/clear.webp'
import fuzzyImg from '../images/fuzzy.webp'

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auto01: false,
      auto02: false,
    };
  }
  render() {
    return (
      <div className="demo demo--lazyimg">
        <h1 className="demo-title">Lazyimg 图片赖加载组件</h1>
        <div className="demo-description">
          在网页加载比较大的图片时，我们为了节省网络资源，我们会使用懒加载的方式（点击或者触发别的事件时加载）。
          为了用户体验会提供一张小的预加载预览图。<br />
          我们需要实现三个功能：<br />
          1. 显示预加载图片<br />
          2. 点击时加载完整图片<br />
          3. 加载失败，提示用户重新加载的图标<br />
        </div>
        <div className="panel">
          <h2 className="panel-title">演示</h2>
          <div className="panel-content">
            <div className="panel-litetitle">GIF图片演示</div>
            <div className="panel-line">
              <Lazyimg
                height={188}
                width={350}
                thumb={staticImg}
                src={interchangeImg}
              />
            </div>
          </div>
          <div className="panel-content">
            <div className="panel-litetitle">JPG图片演示</div>
            <div className="panel-line">
              <Lazyimg
                height={188}
                width={350}
                thumb={fuzzyImg}
                src={clearImg}
                auto={this.state.auto01}
              />

              <Lazyimg
                height={188}
                width={350}
                auto={this.state.auto02}
                src="https://i0.hdslb.com/bfs/article/77.webp"
              />
            </div>
            <Button
              onClick={() => {
                this.setState({
                  auto01: true,
                });
              }}
            >
              加载第一张
            </Button>
            <Button
              onClick={() => {
                this.setState({
                  auto02: true,
                });
              }}
            >
              加载第二张(失效的图片)
            </Button>
          </div>
        </div>
        <div className="panel">
          <h2 className="panel-title">示例代码</h2>
          <div className="panel-content">
            <Code>
              {`// gif图片
<Lazyimg 
     height={188}
     width={350}
     thumb="https://i0.hdslb.com/bfs/article/0c8a6760b9683dcfe790b09ea676bf6192aa5c5f.jpg@718w_392h.webp"
     src="https://i0.hdslb.com/bfs/article/b6aad2cd5c988c40ebfa705c4c1f9e583df44d09.gif" />
<Lazyimg 
     height={188}
     width={350}
     thumb="https://i0.hdslb.com/bfs/article/428f5b1a19ae5e0a43f2aef11c094ea0c5f5aa58.png@700w_376h.webp"
     src="https://i0.hdslb.com/bfs/article/2a748f8f2264dfd7b8dcc0d314a179d9622232b2.jpg@700w_376h.webp"
     auto={this.state.auto01} />`}
            </Code>
          </div>
        </div>
        <div className="panel">
          <h2 className="panel-title">属性</h2>
          <div className="panel-content">
            <p key="1"><strong>height</strong> 图片高度</p>
            <br />
            <p key="2"><strong>width</strong> 图片宽度</p>
            <br />
            <p key="3"><strong>thumb</strong> 预加载图片</p>
            <br />
            <p key="4"><strong>src</strong> 完整图片</p>
            <br />
            <p key="5"><strong>auto</strong> 是否自动加载</p>
          </div>
        </div>
      </div>
    );
  }
}
