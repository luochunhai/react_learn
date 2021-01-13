import React from 'react'
import './commentBox.css';
class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     value: ''
        // }
        // this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // 受控组件
    // handleChange(event) {
    //     this.setState({
    //         value: event.target.value
    //     })
    //
    // }


    handleSubmit(event) {
        // alert(this.state.value)
        // 回调函数  调用了外部传入的方法 ， 单向数据流
        this.props.onAddComment(this.textInput.value)
        event.preventDefault()
    }
    /**
     受控组件
     <form className="p-5" onSubmit={this.handleSubmit}>
     <h2>3-4 forms</h2>
     <div className="form-group">
     <label>留言内容</label>
     <input
     type="text"
     className="form-control"
     placeholder="请输入内容"
     value = {this.state.value}
     onChange={this.handleChange}
     />
     </div>
     <button type="submit" className="btn btn-primary">留言</button>
     <p>已有{this.props.commentsLength}条评论</p>
     </form>
     **/
    render() {
        return (

            <div className="commentBox">
                <form className="p-5" onSubmit={this.handleSubmit}>
                    {/*<h2>3-4 forms</h2>*/}
                    <div className="form-group">
                        <label>留言内容</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="请输入内容"
                            ref={(input) => this.textInput = input}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">留言</button>
                    <p>已有{this.props.commentsLength}条评论</p>
                </form>
            </div>
        )
    }
}

export default CommentBox;
