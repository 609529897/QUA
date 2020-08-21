import React, { Component } from "react"
import propTypes from "prop-types"
import className from "classnames"

import { loadImage } from "../_util/loadHelper"

export default class Lazyimg extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gif: /.*\.gif$/.test(props.src),
      hidden: !props.mum,
      status: props.auto ? "loading" : "unloaded",
      src:
        "data:image/gifbase64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",
    }
  }

  componentDidMount() {
    const props = this.props
    const state = this.state
    // 预加载图片thumb
    if ("thumb" in props) {
      const loadThumb = () => {
        loadImage([props.thumb]).then(({ success, error }) => {
          if (state.status !== "unloaded") {
            // 一旦表示直接加载原图片，就不需要展示 thumb 了 return 就完了
            return
          }
          // 如果 error === 0 表示没有错直接，把 thumb 图片给 src
          if (error === 0) {
            this.setState({
              src: props.thumb,
            })
            // 如果是自动加载图片的话直接加载原图片就可以了
            if (props.auto) {
              this.load()
            }
          }
        })
      }
      loadThumb()
    } else {
      if (props.auto) {
        this.load()
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    // 如果原来的 auto 和新的 auto 都是 true 的话就不用重新加载图片了
    if (nextProps.auto && !this.props.auto) {
      this.load()
    }
  }

  // 原图加载函数
  load() {
    const props = this.props
    const state = this.state
    // 如果图片已经在加载或者是加载完成状态就不要执行了
    if (state.status === "loading" || state.status === "loaded") {
      return false
    }
    // 加载状态
    this.setState({
      status: "loading",
    })
    // 加载图片
    loadImage([props.src]).then(({ success, error }) => {
      // 如果 error 不等于 0 表示出错需要展示报错动画
      if (error !== 0) {
        this.setState({
          status: "fail",
        })
      } else {
        // 图片加载完成
        this.setState({
          status: "loaded",
          src: props.src,
        })
      }
    })
  }

  // 当过渡效果完成后过渡动画执行隐藏操作
  transitionEnd() {
    this.setState({
      hidden: true,
    })
  }

  render() {
    const props = this.props
    const state = this.state
    const iconClassName = className({
      "quaLazyimg-icon": true,
      [`quaLazyimg-icon--${state.status}`]: true,
      "quaLazyimg-icon--gif": state.gif,
      "quaLazyimg-icon--photo": !state.gif,
      "quaLazyimg-icon--hidden": state.hidden,
    })
    return (
      <span className={className("quaLazyimg")} onClick={this.load.bind(this)}>
        <img
          src={state.src}
          width={props.width ? props.width : ""}
          height={props.height ? props.height : ""}
        />
        <span
          className={iconClassName}
          onTransitionEnd={this.transitionEnd.bind(this)}
        />
      </span>
    )
  }
}

Lazyimg.defaultProps = {
  auto: false,
  mum: true,
}

Lazyimg.propTypes = {
  src: propTypes.string.isRequired,
  auto: propTypes.bool,
  thumb: propTypes.string,
  width: propTypes.number,
  height: propTypes.number,
  mum: propTypes.bool,
}