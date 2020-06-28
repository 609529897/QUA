import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import propsTypes, { element } from 'prop-types';
import classnames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import Icon from '../icon';
import Panel from './Panel';

class Select extends Component{
  constructor(props) {
    super(props)
    let value;
    if ('vale' in props) {
      value = props.value
    } else {
      value = props.defaultValue;
    };
    
  };
};