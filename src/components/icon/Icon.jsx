import React, { Component } from "react"
import propTypes from "prop-types"
import className from "classnames"

class Icon extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const iconClassName = className({
      "quaIcon": true,
      [`quaIcon-${this.props.type}`]: true,
    })
    return (
      <span className={iconClassName} />
    )
  }
}

Icon.propTypes = {
  type: propTypes.string,
}

export default Icon
