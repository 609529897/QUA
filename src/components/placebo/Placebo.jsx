import React, { Component } from "react"
import propTypes from "prop-types"
import className from "classnames"
import { CSSTransition } from "react-transition-group"

class Placebo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: true,
      hidden: false,
      fillColor: props.fillColor,
    }
  }
  // 接收用户设定的颜色到 state
  open({ fillColor }) {
    this.setState({
      fillColor,
      open: true,
      hidden: false,
    })
  }
  // 关闭动画
  close() {
    this.setState({
      open: false,
    })
  }
  // 动画结束后关闭安慰剂
  onExited() {
    this.setState({
      hidden: true,
    })
  }

  render() {
    const state = this.state
    // 变化颜色
    const progressStyle = {
      backgroundColor: `rgba(${state.fillColor} , 1)`,
    }
    const placeboClassName = className({
      "quaPlacebo": true,
      "quaPlacebo--hidden": state.hidden,
    })
    return (
      <span>
        <CSSTransition
          in={state.open}
          timeout={300}
          onExited={this.onExited.bind(this)}
        >
          <div className={placeboClassName}>
            <span
              className={className("quaPlacebo-progress")}
              style={progressStyle}
            />
          </div>
        </CSSTransition>
      </span>
    )
  }
}

Placebo.propTypes = {
  fillColor: propTypes.string,
}

export default Placebo