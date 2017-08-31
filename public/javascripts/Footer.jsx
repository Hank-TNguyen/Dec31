import React, {Component} from "react";
import {getEdmontonTime} from "./TimeUtil.js";

export default class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            edmontonTime: new Date()
        };
    }

    componentWillMount() {
        this._getEdmontonTime();
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this._tick(this.state.edmontonTime),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    _tick = (date) => {
        this.setState({
            edmontonTime: new Date(date.getTime() + 1000)
        });
    }


    _getEdmontonTime = () => {
        Promise.resolve(getEdmontonTime()).then(response => {
            this.setState({
                edmontonTime: new Date(JSON.parse(response).formatted)
            });
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        const myTime = new Date(this.state.edmontonTime);
        return (
            <div className="footer">
                <div className="clock-container">
                    <span className="clock">
                        <div> My Time </div>
                        <div>{myTime.toLocaleTimeString()}</div>
                    </span>
                    <span className="clock">
                        <div> Your Time </div>
                        <div>{new Date().toLocaleTimeString()}</div>
                    </span>
                </div>
                <div className="copyright">
                    &copy; {myTime.getFullYear()} Hank Nguyen.
                </div>
            </div>
        )
    }
}