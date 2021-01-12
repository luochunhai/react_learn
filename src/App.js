import './App.css';
import logo from './logo.svg'
import React, {Component} from "react"
import ThemeContext from "./components/theme-context"
import ThemedBar from "./components/ThemedBar";
import CommentList from "./components/CommentList";
import CommentBox from "./components/CommentBox";
import DigitalClock from "./components/DigitalClock";
import NameCard from "./components/NameCard";
import LikesButton from "./components/LikesButton";


const tags = ['aa', 'bbb']

const themes = {
    light: {
        classnames: 'btn btn-primary',
        bgColor: '#eeeeee',
        color: '#000'
    },
    dark: {
        classnames: 'btn btn-light',
        bgColor: '#222222',
        color: '#fff'
    },
}


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: ["this is my first reply"],
            theme: 'light'
        }
        this.addComment = this.addComment.bind(this)
        this.changeTheme = this.changeTheme.bind(this)
    }

    addComment(comment) {
        this.setState({
            comments: [...this.state.comments, comment]
        })
    }

    changeTheme(theme) {
        this.setState({theme})
    }

    render() {
        const {comments} = this.state
        return (
            <ThemeContext.Provider value={themes[this.state.theme]}>
                <div className="App">
                    <header className="App-header">
                        <a href="#theme-switcher"
                           className="btn btn-light"
                           onClick={() => {
                               this.changeTheme('light')
                           }}
                        >
                            浅色主题
                        </a>
                        <a href="#theme-switcher"
                           className="btn btn-secondary"
                           onClick={() => {
                               this.changeTheme('dark')
                           }}
                        >
                            深色主题
                        </a>
                        <ThemedBar/>


                        <CommentList comments={comments}/>

                        <CommentBox
                            commentsLength={comments.length}
                            onAddComment={this.addComment}
                        />

                        <DigitalClock/>
                        <NameCard name="viking" number={1234567890} tags={tags}/>
                        <LikesButton/>
                        <img src={logo} className="App-logo" alt="logo"/>
                        <p>
                            Edit <code>src/App.js</code> and save to reload.
                        </p>
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn React
                        </a>
                    </header>
                </div>

            </ThemeContext.Provider>
        );
    }
}


export default App;

