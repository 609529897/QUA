import React, { Component } from "react";
import propTypes from "prop-types";
import className from "classnames";
import { CSSTransition } from "react-transition-group";

export default class Placebo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      hidden: false,
      fillColor: props.fillColor,
    };
  }
  open({ fillColor }) {
    this.setState({
      fillColor,
      open: true,
      hidden: false,
    });
  }

  close() {
    this.setState({
      open: false,
    });
  }

  onExited() {
    this.setState({
      hidden: true,
    });
  }

  render() {
    const { fillColor, hidden, open } = this.state;
    const progressStyle = {
      backgroundColor: `rgba(${fillColor} , 1)`,
    };
    const placeboClassName = className({
      "quaPlacebo": true,
      "quaPlacebo--hidden": hidden,
    });
    return (
      <span>
        <CSSTransition
          in={open}
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
    );
  }
}

Placebo.propTypes = {
  fillColor: propTypes.string,
};
