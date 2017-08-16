import React, {Component} from "react";
import {
  Tooltip
} from 'react-tippy';
import {getEdmontonTime} from "./TimeUtil.js";

export default class LeftNav extends Component {

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

    getProfileImg = () => {
        return (
            <div className="profile-container">
                <Tooltip
                  title="Hi! My Name is Hank!"
                  position="right-start"
                  arrow={true}
                >
                  <img className="profile-image" src="../images/square.png"/>
                </Tooltip>
            </div>
            );
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
            <div className="left-nav">
                {this.getProfileImg()}
                <hr className="separator"/>

                <div className="bio-section">
                BIO
                </div>
                <div className="contact">
                    <table style={{width: "100%"}}>
                        <tbody>
                            <tr>
                                <th><a href="https://www.linkedin.com/in/hnguyen95/" target="_blank"><img className="contact-icon" src="../images/linkedin.png"/></a></th>
                                <th><a href="https://www.facebook.com/Hanktnguyen" target="_blank"><img className="contact-icon" src="../images/facebook_icon.png"/></a></th>
                                <th><a href="mailto: t.hung.95@gmail.com" target="_blank"><img className="contact-icon" src="../images/email_icon.png"/></a></th>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div className="clock">
                    <div> Edmonton Time </div>
                    <div>{myTime.toLocaleTimeString()}</div>
                </div>
            </div>
            );
    }

}


