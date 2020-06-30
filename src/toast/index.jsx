import React, { Component } from "react"
import "./index.scss"
import Code from "../code"
import { Button, Toast } from "../components"

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillUnmount() {
    this.onCloseLoading()
  }

  onShowLoading() {
    if (this.loadingRef) {
      return
    }
    Toast.loading("加载中...", { duration: 0 }, (loadingRef) => {
      this.loadingRef = loadingRef
    })
  }

  onCloseLoading() {
    this.loadingRef && this.loadingRef.close()
    this.loadingRef = null
  }

  render() {
    return (
      <div className="demo demo--toast">
        <h1 className="demo-title">Toast 提示组件</h1>
        <div className="demo-description">
          Toast 提示
        </div>
        <div className="panel">
          <h2 className="panel-title">演示</h2>
          <div className="panel-content">
            <div className="panel-line">
              <Button
                onClick={() => {
                  Toast.tip("打开提示框")
                }}
              >
                Toast.tip
              </Button>
              <Button
                onClick={() => {
                  Toast.tip("打开提示框", { closable: true })
                }}
              >
                closable
              </Button>
            </div>

            <div className="panel-line">
              <Button
                onClick={() => {
                  if (this.loadingRef) {
                    return
                  }
                  Toast.loading("加载中...", { duration: 0 }, (loadingRef) => {
                    this.loadingRef = loadingRef
                  })
                }}
              >
                Toast.loading
              </Button>
              <Button
                onClick={() => {
                  this.loadingRef && this.loadingRef.close()
                  this.loadingRef = null
                }}
              >
                close loading
              </Button>
            </div>
          </div>
        </div>

        <div className="panel">
          <h2 className="panel-title">代码展示</h2>
          <div className="panel-content">
            <Code>
              {`// Tip提示框
<Button onClick={() => {
    Toast.tip('打开提示框', {closable: true})
}}>可关闭</Button>
// loading加载框
<Button onClick={this.onShowLoading.bind(this)}>Toast.loading</Button>
<Button onClick={this.onCloseLoading.bind(this)}>close左边的loading</Button>`}
            </Code>
          </div>
        </div>

        <div className="panel">
          <h2 className="panel-title">属性</h2>
          <div className="panel-content">
            <p><strong>duration</strong> 提示持续时间</p>
            <br />
            <p><strong>closable</strong> 用户是否可以关闭提示</p>
            <br />
            <p>
            Toast.loading：提示加载中
            </p>
            <br />
            <p>
            Toast.destroy：摧毁全部的 Toast，下载打开页面时重新创建组件
            </p>
            <br />
            <p>
            this.loadingref.close()：close ref 为 loadingref 的提示
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Index
