import './App.css';
import React, {Component} from "react"
import DigitalClock from "./components/3-3shengmingzhouqi/DigitalClock";
import NameCard from "./components/3-1props/NameCard";
import LikesButton from "./components/3-2state/LikesButton";
import GuestBook from "./components/4-1liuyanben/GuestBook";
import Context from "./components/5 context/Context";


const tags = ['恐龙', '足球小子']


class App extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <NameCard name="viking" number={1234567890} tags={tags}/>
                ------------
                <LikesButton/>
                ------------
                <DigitalClock/>
                ------------
                <GuestBook/>
                ------------
                <Context/>
            </div>

        );
    }
}


export default App;

