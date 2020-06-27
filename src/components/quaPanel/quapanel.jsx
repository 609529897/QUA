import React, { Component, createRef, Fragment } from "react";
import { createPortal } from "react-dom";
import propTypes from "prop-types";
import className from "classnames";
import { CSSTransition } from "react-transition-group";

export default class QuaPanel extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
    this.canvasRef = createRef();
    this.state = {
      open: false, // 是否已打开
      buttonIn: false, // button
      hidden: true, // 是否隐藏
      canvasWidth: 0, // 画布宽度
      canvasHeight: 0, // 画布高度
      radius: 0, // 需要画圆的半径
      animating: false, // 正在处理展开/关闭
    };
  }
  componentDidMount() {
    this.canvasContext = this.canvasRef.current.getContext("2d");
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }
  renderPanel() {
    const state = this.state;
    const props = this.props;
    this.haveOpened = this.haveOpened || state.open;
  }
  render() {
    return (
      <Fragment>
        <div
          className={className("quaPanel-menu")}
          onClick={this.open.bind(this)}
        >
          {this.props.children[0].props.children}
        </div>
        {this.renderPanel()}
      </Fragment>
    );
  }
}
