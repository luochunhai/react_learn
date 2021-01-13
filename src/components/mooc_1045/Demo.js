import './demo.css';
import React, {Component} from "react"
import NameCard from "./3-1props/NameCard";
import LikesButton from "./3-2state/LikesButton";
import DigitalClock from "./3-3shengmingzhouqi/DigitalClock";
import GuestBook from "./4-1liuyanben/GuestBook";
import Context from "./5 context/Context";


const tags = ['恐龙', '足球小子'];


class Demo extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
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


export default Demo;

