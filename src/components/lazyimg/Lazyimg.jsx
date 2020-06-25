import React, {Component} from 'react'
import propTypes from 'prop-types'
import className from 'classnames'

import {loadImage} from '../_util/loadHelper'

export default class Lazyimg extends Component {
    constructor (props) {
        super(props)
        this.state = {
            gif: /.*\.gif$/.test(props.src),
            hidden: !props.mum,
            status: props.auto ? 'loading' : 'unloaded',
            src: 'data:image/gifbase64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==',
        }
    }

    componentDidMount () {
        const { thumb, auto } = this.props
        const { status } = this.state
        // 预加载图片thumb
        if ('thumb' in this.props) {
            const loadThumb = () => {
                loadImage([thumb]).then(({success, error}) => {
                    if (status !== 'unloaded') {
                        return
                    }
                    if (error === 0) {
                        this.setState({
                            src: thumb,
                        })
                        if (auto) {
                            this.load()
                        }
                    }
                })
            }
            loadThumb()
        } else {
            if (auto) {
                this.load()
            }
        }
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.auto && !this.props.auto) {
            this.load()
        }
    }

    load () {
        const { src } = this.props
        const { status } = this.state
        if (status === 'loading' || status === 'loaded') {
            return false
        }
        this.setState({
            status: 'loading'
        })
        loadImage([src]).then(({success, error}) => {
            if (error !== 0) {
                this.setState({
                    status: 'fail'
                })
            } else {
                this.setState({
                    status: 'loaded',
                    src: src
                })
            }
        })
    }

    transitionEnd () {
        this.setState({
            hidden: true
        })
    }

    render () {
        const { width, height } = this.props
        const { src, status, gif, hidden } = this.state
        const iconClassName = className({
            'quaLazyimg-icon': true,
            [`quaLazyimg-icon--${status}`]: true,
            'quaLazyimg-icon--gif': gif,
            'quaLazyimg-icon--photo': !gif,
            'quaLazyimg-icon--hidden': hidden,
        })
        return (
            <span className={className('quaLazyimg')}
                  onClick={this.load.bind(this)}>
                <img src={src}
                     width={width ? width : ''}
                     height={height ? height : ''} />
                <span className={iconClassName}
                      onTransitionEnd={this.transitionEnd.bind(this)} />
            </span>
        )
    }
}

Lazyimg.defaultProps = {
    auto: false,
    mum: true,
}

Lazyimg.propTypes = {
    src: propTypes.string.isRequired,
    auto: propTypes.bool,
    thumb: propTypes.string,
    width: propTypes.number,
    height: propTypes.number,
    mum: propTypes.bool,
}
