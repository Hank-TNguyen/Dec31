import React, {Component} from "react";
import {
  Tooltip
} from 'react-tippy';

export default class LeftNav extends Component {

    constructor(props) {
        super(props);
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


    render() {

        return (
            <div className="left-nav">
                {this.getProfileImg()}
                <hr className="separator"/>
            </div>
            );
    }

}


