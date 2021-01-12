import React from 'react'

/*
* 当一个组件没有生命周期，也没有state,    可以写成 function 形式
 */

const CommentList = ({comments}) => {
    return (
        <div className="comment-list-component">
            <label>评论列表</label>
            <ul className="list-group mb-3">
                {
                    comments.map((comment, index) =>
                        <li key={index} className="list-group-item" style={{color: "#000"}}>{comment}</li>
                    )
                }
            </ul>
        </div>
    )
}

export default CommentList;
