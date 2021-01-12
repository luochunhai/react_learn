import React from 'react'


class DigitalClock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    //初始化
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 3000)
    }

    //更新
    componentDidUpdate(currentProps, currentState) {
        // console.log(currentState)
    }

    //卸载
    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        return (
            <div className="digital-clock-components jumbotron">
                <h2>3-3 React 生命周期</h2>
                <h1 style={{color: "#000"}}>{this.state.date.toLocaleTimeString()}</h1>
            </div>
        )
    }
}

export default DigitalClock;
