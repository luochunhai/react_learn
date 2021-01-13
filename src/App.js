import './App.css';
import React, {Component} from "react"
import Demo from "./components/mooc_1045/Demo";
import {BrowserRouter, Link, Route} from 'react-router-dom';
import SimpleSAP from "./components/mooc_791/SimpleSAP";

class App extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <div className="navigation">
                        <p><Link to={{pathname: '/react16',}}>基于实例的 React16 傻瓜课程</Link></p>
                        <p><Link to={{pathname: '/simple-sap',}}>React Router</Link></p>
                    </div>

                    <Route path="/react16" exact component={Demo}/>
                    <Route path="/simple-sap" exact component={SimpleSAP}/>

                </div>
            </BrowserRouter>


        );
    }
}


export default App;

