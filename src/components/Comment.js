import React, { Component } from 'react'

export default class Comment extends Component {
    render() {
        const { text } = this.props
        return (
            <div>
                {text}
            </div>
        )
    }
}