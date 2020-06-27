import React, { Component } from "react";
import propTypes from "prop-types";
import classnames from "classnames";
import Icon from "../icon";

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onClick() {
    const props = this.props;
    if ("onClick" in props) {
      props.onClick();
    }
  }

  render() {
    const { type, size, disabled, circle, fill, loading, className } =
      this.props;
    const prefixCls = "quaButton";
    const buttonClassName = classnames({
      [prefixCls]: true,
      [`${prefixCls}--${type}`]: true,
      [`${prefixCls}--${size}`]: true,
      [`${prefixCls}--disable`]: disabled,
      [`${prefixCls}--circle`]: circle,
      [`${prefixCls}--fill`]: fill,
      [`${prefixCls}--loading`]: loading,
      [className]: true,
    });

    return (
      <button className={buttonClassName} onClick={this.onClick.bind(this)}>
        {loading ? (<Icon type="loading" />) : null}
        {this.props.children}
      </button>
    );
  }
}

Button.defaultProps = {
  size: "default",
  disabled: false,
  type: "primary",
  circle: false,
  fill: false,
  loading: false,
  className: "",
};

Button.propTypes = {
  size: propTypes.oneOf(["small", "large", "default"]),
  type: propTypes.oneOf(["primary", "success", "normal", "danger"]),
  disabled: propTypes.bool,
  circle: propTypes.bool,
  fill: propTypes.bool,
  onClick: propTypes.func,
  icon: propTypes.string,
  loading: propTypes.bool,
  className: propTypes.string,
};
