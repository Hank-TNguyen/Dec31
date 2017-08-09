import React, {Component} from "react";
import LeftNav from "./LeftNav.jsx";
import ImageSlider from "./ImageSlider.jsx";
import {cloneJSON} from "./utilities.js";

export default class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            storyIndex: 0,
            initialSlide: 0
        }
        const story = cloneJSON(require("./story.json")).story;
        this.images = story.map(s => {
            return s.image;
        });
        this.titles = story.map(s => {
            return s.title;
        });
        this.texts = story.map(s => {
            return s.text;
        });
    }

    changeSlide = (index) => {
        this.setState({
            storyIndex: index
        })
    }

    onImgReady = () => {
        document.querySelector("#homepage").style = "opacity: 1; height: 100%";
    }

    render() {

        const {storyIndex} = this.state;

        return (
            <div style={{height: "100%"}}>
                <LeftNav/>
                <div className="main-content">
                    <ImageSlider
                        changeSlide={this.changeSlide}
                        images={this.images}
                        onImgReady={this.onImgReady}
                    />
                    <div className="story">
                        <div className="title">
                            {this.titles[storyIndex]}
                        </div>
                        <div className="text">
                            {this.texts[storyIndex]}
                        </div>
                    </div>
                </div>
            </div>
            );

    }
}
