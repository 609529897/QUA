import React, { Component } from 'react'
import { quaStore } from '../../components/index'

class Index extends Component{
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  componentDidMount () {
    this.unsubscribe = quaStore.subscribe('level2_3', this.setCount.bind(this));
  }

  componentWillMount () {
    this.unsubscribe()
  }

  setCount () {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
  }

  render () {
    console.log('update render 第二层：2-3');
    return (
        <div className="level">
            <div className="level-name">第二层：2-3</div>
            <div className="level-content">
                <div className="level-display">按钮点击了【{this.state.count}】次</div>
            </div>
        </div>
    )
  }
}

export default Index