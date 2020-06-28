import React, { Component } from "react";
import "./index.scss";
import Code from "../code";
import { Dropdown, Button, Icon } from "../components";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="demo demo--dropdown">
        <h1 className="demo-title">Dropdown 下拉块组件</h1>
        <div className="demo-description">
          <p style={{ color: "red" }}>debug 中...</p>
        </div>
        <div className="panel">
          <h2 className="panel-title">演示</h2>
          <div className="panel-content">
            <div className="panel-line">
              <Dropdown placement="left bottom">
                <Dropdown.Menu>
                  <Button>左对齐</Button>
                </Dropdown.Menu>
                <Dropdown.Content>
                  <div className="dropdown-content dropdown-content--long">
                    今夜，我的嗓音是一列被截停的火车，<br />
                    你的名字是俄罗斯漫长的国境线。
                  </div>
                </Dropdown.Content>
              </Dropdown>

              <Dropdown placement="center bottom">
                <Dropdown.Menu>
                  <Button>中对齐</Button>
                </Dropdown.Menu>
                <Dropdown.Content>
                  <div className="dropdown-content">
                    我是内容<br />
                    我是内容<br />
                    我是内容
                  </div>
                </Dropdown.Content>
              </Dropdown>

              <Dropdown placement="right bottom">
                <Dropdown.Menu>
                  <Button>右对齐</Button>
                </Dropdown.Menu>
                <Dropdown.Content>
                  <div className="dropdown-content">
                    我是内容<br />
                    我是内容<br />
                    我是内容
                  </div>
                </Dropdown.Content>
              </Dropdown>

              <Dropdown placement="center top">
                <Dropdown.Menu>
                  <Button>覆盖</Button>
                </Dropdown.Menu>
                <Dropdown.Content>
                  <div className="dropdown-content">
                    我是内容<br />
                    我是内容<br />
                    我是内容
                  </div>
                </Dropdown.Content>
              </Dropdown>
            </div>
          </div>
          <div className="panel-content">
            <div className="panel-litetitle">有<i>"角"</i>的</div>
            <div className="panel-line">
              <Dropdown placement="center bottom" arrow>
                <Dropdown.Menu>
                  <Icon type="notify"></Icon>
                </Dropdown.Menu>
                <Dropdown.Content>
                  <div className="dropdown-content">
                    我是内容<br />
                    我是内容<br />
                    我是内容
                  </div>
                </Dropdown.Content>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="panel">
          <h2 className="panel-title">代码展示</h2>
          <div className="panel-content">
            <Code>
              {`<Dropdown placement="center bottom">
    <Dropdown.Menu>
        <Button>中对齐</Button>
    </Dropdown.Menu>
    <Dropdown.Content>
        <div>
            我是内容<br />
            我是内容<br />
            我是内容
        </div>
    </Dropdown.Content>
</Dropdown>`}
            </Code>
          </div>
        </div>
        <div className="panel">
          <h2 className="panel-title">属性</h2>
          <div className="panel-content">
            <p>Dropdown.Menu: 实现下拉功能的元素</p>
            <br />
            <p>Dropdown.Content: 下拉块里的内容</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
