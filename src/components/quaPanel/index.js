import React,{ Component, createRef } from 'react'
import { createPortal } from 'react'
import propTypes from 'prop-types'
import className from 'classnames'
import { CSSTransition } from 'react-transition-group'

class QuaPanel extends Component{
  constructor(props) {
    super(props)
    this.el = document.createElement('div')
    this.canvasRef = createRef()
    this.state = {
      open: false,            // 是否已打开
      buttonIn: false,        // 按钮
      hidden: true,           // 是否隐藏
      canvasWidth: 0,         // 画布宽带
      canvasHeight: 0,        // 画布高度
      radius: 0,              // 需要画圆的半径
      animating: false,       // 正在处理展开/关闭
    }
  }
  componentDidMount () {
    this.canvasContext = this.canvasRef.current.getContext('2d');
    document.body.appendChild(this.el)
  }

  componentWillMount () {
    document.body.removeChild(this.el)
  }

  /**
   * 获取半径
   * 遍历窗体4个坐标与事件触发点的坐标，最大值级半径
   * */
  
}

export default QuaPanel