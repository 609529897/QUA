import React, { Component, lazy, Suspense } from "react"
import { Route, NavLink } from "react-router-dom"

import Home from './home'
const QuaStoreDemo = lazy(() => import('./quaStore'))
const LazyimgDemo = lazy(() => import('./lazyimg'))
const PlaceboDemo = lazy(() => import('./placebo'))

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="layout">
        <div className="header">
          QUA 组件库
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
          <div className="nav-item">
            <NavLink
              to="/lazyimg"
              className="nav-link"
              activeClassName="nav-link--active"
              exact
            >
              <span className="nav-icon">
                {/* <Icon type="right" /> */}
              </span>
              Lazyimg 组件
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink
              to="/placebo"
              className="nav-link"
              activeClassName="nav-link--active"
              exact
            >
              <span className="nav-icon">
                {/* <Icon type="right" /> */}
              </span>
              Placebo 组件
            </NavLink>
          </div>
        </div>
        <div className="content">
          <Suspense fallback={<div className="loading">Loading...</div>}>
            <Route path="/" component={Home} exact />
            <Route path="/quastore" component={QuaStoreDemo} />
            <Route path="/lazyimg" component={LazyimgDemo} />
            <Route path="/placebo" component={PlaceboDemo} />
          </Suspense>
        </div>
      </div>
    )
  }
}

export default Layout