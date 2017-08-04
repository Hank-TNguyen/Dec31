import React, {Component} from "react";
import LeftNav from "./LeftNav.jsx";
import ImageSlider from "./ImageSlider.jsx";
import getEdmontonTime from "./TimeUtil.js";

export default class Homepage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // const time = Promise.resolve(getEdmontonTime());
        // console.log(time);
        return (
            <div>
                <LeftNav/>
                <div className="main-content">
                    <ImageSlider />
                </div>
            </div>
            );

    }
}
