import React, { Component, createRef } from "react";
import { findDOMNode } from "react-dom";
import propTypes from "prop-types";
import classnames from "classnames";
import RcAlign from "rc-align";
import Panel from "./Panel";
import { CSSTransition } from "react-transition-group";
import { isNodeFound } from "../_util/domHelper";

const ALIGN_VALUE = {
  "left bottom": ["tl", "bl"],
  "center bottom": ["tc", "bc"],
  "right bottom": ["tr", "br"],
  "left top": ["tl", "tl"],
  "center top": ["tc", "tc"],
  "right top": ["tr", "tr"],
};

const SIZE = 4;

const ALIGN_OFFSET = {
  "left bottom": SIZE,
  "center bottom": SIZE,
  "right bottom": SIZE,
  "left top": -SIZE,
  "center top": -SIZE,
  "right top": -SIZE,
};

class Dropdown extends Component {
  constructor (props) {
    super(props);
    this.dropdownRef = createRef()
    this.align = {
      points: ALIGN_VALUE[props.placement],
    }
  }
};

Dropdown.defaultProps = {
  placement: "center botton",
  arrow: false,
};

Dropdown.propTypes = {
  placement: propTypes.oneOf(['left bottom', 'center bottom', 'right bottom', 'left top', 'center top', 'right top']),
  arrow: propTypes.bool,
};

export default Dropdown;
