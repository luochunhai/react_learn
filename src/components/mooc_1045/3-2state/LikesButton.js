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
            // eslint-disable-next-line
            likes: ++this.state.likes
        })
    }

    render() {
        return (
            <div className="likes-button-component">
                <h2>3-2 state</h2>
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
