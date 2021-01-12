import React from 'react'

class LikesButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: 0
        }
        // js 类中，this没有自动绑定， increaseLikes --> 回调函数， 没有绑定指定的类
        //手动绑定
        // this.increaseLikes = this.increaseLikes.bind(this)
    }

    increaseLikes() {
        this.setState({
            likes: ++this.state.likes
        })
    }

    render() {
        return (
            <div className="likes-button-component">
                <button
                    type="button"
                    className="btn btn-outline-primary btn-lg"
                    //箭头函数
                    onClick={() => {
                        this.increaseLikes()
                    }}
                >
                    👍{this.state.likes}
                </button>
            </div>
        )
    }
}

export default LikesButton
