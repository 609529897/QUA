import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import './css/base.scss';
import Layout from './layout';

render(
  <Router>
    <Route link="/" component={Layout} />
  </Router>,
  document.getElementById('root')
);
