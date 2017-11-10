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
                  <img className="profile-image" src="../images/pp.png"/>
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
                    <div className="intro-pos"> Software Developer <span style={{float: "right"}}>@ <a href="http://www.intuit.ca/intuit-products/index.jsp">Intuit Inc.</a></span></div>
                    <div className="intro-pos"> & Student <span style={{float: "right"}}>@ <a href="https://www.ualberta.ca/"> UAlberta</a></span></div>
                    <div className="intro-pos">A copy of my <a style={{float: "right"}} href="https://drive.google.com/open?id=0B2VMAh6F7V4fb2U3QWR3UTFlcUE" target="_blank">resume</a> </div>
                    <div className="contact-text">Contact: </div>
                    <div className="contact-icon-container">
                        <a href="https://www.linkedin.com/in/hnguyen95/" target="_blank"><img className="contact-icon" src="../images/linkedin.png"/></a>
                        <a href="https://www.facebook.com/Hanktnguyen" target="_blank"><img className="contact-icon" src="../images/facebook_icon.png"/></a>
                        <a href="mailto: t.hung.95@gmail.com" target="_blank"><img className="contact-icon" src="../images/email_icon.png"/></a>
                    </div>

                </div>

            </div>
            );
    }

}


