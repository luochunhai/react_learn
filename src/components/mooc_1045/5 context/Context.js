import React from 'react'
import ThemedBar from "./ThemedBar";
import ThemeContext from "./theme-context";

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


class Context extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'light'
        }
        this.changeTheme = this.changeTheme.bind(this)
    }

    changeTheme(theme) {
        this.setState({theme})
    }

    render() {

        return (
            <ThemeContext.Provider value={themes[this.state.theme]}>
                <div>
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
                </div>
            </ThemeContext.Provider>
        )
    }
}

export default Context;
