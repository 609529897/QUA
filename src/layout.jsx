import React, { Component, lazy, Suspense } from "react";
import { Route, NavLink } from "react-router-dom";
import { Icon } from "./components";

import Home from "./home";
const QuaStoreDemo = lazy(() => import("./quaStore"));
const LazyimgDemo = lazy(() => import("./lazyimg"));
const PlaceboDemo = lazy(() => import("./placebo"));
const IconDemo = lazy(() => import("./icon"));
const ButtonDemo = lazy(() => import("./button"));
const SwitchDemo = lazy(() => import("./switch"));
const DropdownDemo = lazy(() => import("./dropdown"));

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
                <Icon type="home" />
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
                <Icon type="right" />
              </span>
              QuaStore
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
                <Icon type="right" />
              </span>
              Lazyimg
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
                <Icon type="right" />
              </span>
              Placebo
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink
              to="/icon"
              className="nav-link"
              activeClassName="nav-link--active"
              exact
            >
              <span className="nav-icon">
                <Icon type="right" />
              </span>
              Icon
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink
              to="/button"
              className="nav-link"
              activeClassName="nav-link--active"
              exact
            >
              <span className="nav-icon">
                <Icon type="right" />
              </span>
              Button
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink
              to="/switch"
              className="nav-link"
              activeClassName="nav-link--active"
              exact
            >
              <span className="nav-icon">
                <Icon type="right" />
              </span>
              Switch
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink
              to="/dropdown"
              className="nav-link"
              activeClassName="nav-link--active"
              exact
            >
              <span className="nav-icon">
                <Icon type="right" />
              </span>
              Dropdown
            </NavLink>
          </div>
        </div>
        <div className="content">
          <Suspense fallback={<div className="loading">Loading...</div>}>
            <Route path="/" component={Home} exact />
            <Route path="/quastore" component={QuaStoreDemo} />
            <Route path="/lazyimg" component={LazyimgDemo} />
            <Route path="/placebo" component={PlaceboDemo} />
            <Route path="/icon" component={IconDemo} />
            <Route path="/button" component={ButtonDemo} />
            <Route path="/switch" component={SwitchDemo} />
            <Route path="/dropdown" component={DropdownDemo} />
          </Suspense>
        </div>
      </div>
    );
  }
}

export default Layout;
