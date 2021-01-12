import React from 'react'
import CommentList from "./commentlist/CommentList";
import CommentBox from "../3-4forms/CommentBox";
import './Guestbook.css'

class GuestBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: ["this is my first reply"]
        }
        this.addComment = this.addComment.bind(this)
    }

    addComment(comment) {
        this.setState({
            comments: [...this.state.comments, comment]
        })
    }


    render() {
        const {comments} = this.state
        return (
            <div className="comments">

                <CommentList comments={comments}/>
                <CommentBox
                    commentsLength={comments.length}
                    onAddComment={this.addComment}
                />
            </div>
        )
    }
}

export default GuestBook;
