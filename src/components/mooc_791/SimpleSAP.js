import React, {Component} from "react"
import {BrowserRouter, Link, Route} from 'react-router-dom';
import './simpleSap.css'
import SimpleSAPHome from "./SubPage/SimpleSAPHome";
import SimpleSAPDufu from "./SubPage/SimpleSAPDufu";
import SimpleSAPLiShangying from "./SubPage/SimpleSAPLiShangying";

class SimpleSAP extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <h1>Simple SAP</h1>
                    <ul className="header">
                        <li><Link activeClaassName='active' to={{pathname: '/simple-sap/libai'}}>李白</Link></li>
                        <li><Link activeClaassName='active' to={{pathname: '/simple-sap/dufu'}}>杜甫</Link></li>
                        <li><Link activeClaassName='active' to={{pathname: '/simple-sap/lishangyin'}}>李商隐</Link></li>
                    </ul>

                    <Route path="/simple-sap/libai" exact component={SimpleSAPHome}/>
                    <Route path="/simple-sap/dufu" exact component={SimpleSAPDufu}/>
                    <Route path="/simple-sap/lishangyin" exact component={SimpleSAPLiShangying}/>
                </div>
            </BrowserRouter>
        )
    }
}


export default SimpleSAP;

