import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import Placebo from './Placebo'

let _placebo

// 会创建一个 div ，这个 div 是脱离 React 的一个元素
const newInstancePlacebo = ({ fillColor }) => {
    const root = document.createElement('div')
    root.className = 'quaPlacebo-container'
    Placebo.domContainer = root
    document.body.appendChild(root)
    let called = false

    // 如果是 false 的话表示没有创建组件，需要你重新创建组件
    const ref = (placebo) => {
        if (called) {
            return false
        }
        called = true
        _placebo = placebo
    }
    // 把组件挂载到脱离 React 的一个 div 元素
    render(
        (
            <Placebo fillColor={fillColor} ref={ref} />
        ),
        root
    )
}

// 如果组件没有挂载到自定义 div 就挂载到到自定义 div，如果已经挂载那正常渲染就 OK
Placebo.open = (options = {fillColor: '66, 133, 244'}) => {
    if (!_placebo) {
        newInstancePlacebo(options)
    } else {
        _placebo.open(options)
    }
}

Placebo.close = () => {
  if (_placebo) {
      _placebo.close()
  }
}

// 强制从真实 DOM 中销毁，这是脱离 React 根节点的元素
Placebo.destroy = () => {
    if (_placebo) {
        unmountComponentAtNode(Placebo.domContainer)
        document.body.removeChild(Placebo.domContainer)
    }
}

export default Placebo