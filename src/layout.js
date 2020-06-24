import React, { Component, lazy, Suspense } from "react";
import { Route, NavLink } from "react-router-dom";

import Home from './home'
const QuaStoreDemo = lazy(() => import("./quaStore"))

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="layout">
        <div className="header">
          Qua 组件库
        </div>
        <div className="nav">
          <div className="nav-item">
            <NavLink
              to="/"
              className="nav-link"
              activeClassName="nav-link--active"
              exact
            >
              <span className="nav-icon">
                {/* <Icon type="home" /> */}
              </span>
              首页
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink
              to="/quastore"
              className="nav-link"
              activeClassName="nav-link--active"
              exact
            >
              <span className="nav-icon">
                {/* <Icon type="right" /> */}
              </span>
              QuaStore 组件
            </NavLink>
          </div>
        </div>
        <div className="content">
          <Suspense fallback={<div className="loading">Loading...</div>}>
          <Route path="/" component={Home} exact/>
          <Route path="/quastore" component={QuaStoreDemo} />
          </Suspense>
        </div>
      </div>
    )
  }
}

export default Layout