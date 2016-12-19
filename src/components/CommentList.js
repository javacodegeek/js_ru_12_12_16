import React, { Component } from 'react'
import Comment from './Comment'

export default class CommentList extends Component {
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
     }
    
    render() {
        const { article } = this.props
        const comments = article.comments || []
        const commentElements = comments.map(comment => <li key = {comment.id}><Comment text = {comment.text}/></li>)
        return (
            <div>
                {this.getCommentsBody(commentElements)}
                <button onClick = {this.toggleOpen} >{this.getText()}</button>
            </div>
        )
    }
    
    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    
    getText() {
        if (!this.state.isOpen) return 'Open comments'
        return 'Close comments'
    }
    
    getCommentsBody(commentElements){
        if (!this.state.isOpen) return null
        return (
            <div>
                <ul>
                    {commentElements}
                </ul>
            </div>
        )
    }
    
}