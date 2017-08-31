import React, {Component} from "react";
import {
  Tooltip
} from 'react-tippy';

export default class LeftNav extends Component {

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

    render() {

        return (
            <div className="left-nav">
                {this.getProfileImg()}
                <hr className="separator"/>

                <div className="bio-section">

                    <span className="contact-text">Contact: </span>
                    <span className="contact-icon-container">
                        <a href="https://www.linkedin.com/in/hnguyen95/" target="_blank"><img className="contact-icon" src="../images/linkedin.png"/></a>
                        <a href="https://www.facebook.com/Hanktnguyen" target="_blank"><img className="contact-icon" src="../images/facebook_icon.png"/></a>
                        <a href="mailto: t.hung.95@gmail.com" target="_blank"><img className="contact-icon" src="../images/email_icon.png"/></a>
                    </span>

                </div>
            </div>
            );
    }

}


