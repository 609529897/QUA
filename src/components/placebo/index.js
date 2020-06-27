import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Placebo from './Placebo';

let _placebo;

const newInstancePlacebo = ({ fillColor }) => {
    const root = document.createElement('div');
    root.className = 'quaPlacebo-container';
    Placebo.domContainer = root;
    document.body.appendChild(root);
    let called = false;

    const ref = (placebo) => {
        if (called) {
            return false
        };
        called = true
        _placebo = placebo
    };

    render(
        (
            <Placebo fillColor={fillColor} ref={ref} />
        ),
        root
    )
};

Placebo.open = (options = {fillColor: '66, 133, 244'}) => {
    if (!_placebo) {
        newInstancePlacebo(options)
    } else {
        _placebo.open(options)
    }
};

Placebo.close = () => {
  if (_placebo) {
      _placebo.close()
  }
};

Placebo.destroy = () => {
    if (_placebo) {
        unmountComponentAtNode(Placebo.domContainer)
        document.body.removeChild(Placebo.domContainer)
    }
};

export default Placebo;