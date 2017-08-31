import React, {Component} from "react";
import ImageSlider from "./ImageSlider.jsx";
import {cloneJSON} from "./utilities.js";
import {emojify} from "react-emojione";
import Emojify from 'react-emojione';
import {Tooltip} from 'react-tippy';

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.init();
    }

    init = () => {
        this.state = {
            storyIndex: 0,
            initialSlide: 0,
            mc1: 0,
            mc2: 0
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

        const mc1_2 = (
            <Emojify>
                <span className="mc-full"> Vietnamese :flag_vn: English with Vietnamese/North American accent (the blended type :sweat:) and Chinese (我能说一点普通话 :sweat_smile:
                    )</span>
            </Emojify>

            );
        const mc2_2 = (
            <Emojify>
                <span className="mc-full"> quite a few sports.
                    <Tooltip
                      html={<span className="cursorOnHover" onClick={this.handleSportProof}>Here!</span>}
                      position="top"
                      arrow={true}
                      interactive={true}
                    >
                        <span id="mc-proof" onClick={this.handleSportProof}> Need proof?</span>
                    </Tooltip>
                </span>
            </Emojify>
            )
        this.mc1 = [" a few languages", mc1_2];
        this.mc2 = [" a few sports", mc2_2];
    }

    changeSlide = (index) => {
        this.setState({
            storyIndex: index
        })
    }

    onImgReady = () => {
        document.querySelector("#homepage").style = "opacity: 1; height: 100%";
        document.querySelector("#loading-img").style = "opacity: 0; background-color: #F5FAFA; position: absolute; padding: 21% 45%; width: 10%;";
        setTimeout(() => {
            const toRemove =  document.querySelector("#loading-img");
            if (toRemove) {
                toRemove.parentNode.removeChild(toRemove)
            }
        }, 3000);
    }

    handleClick_mc1 = () => {
        const newVar = (this.state.mc1 + 1) % 2;
        this.setState({mc1: newVar});
    }

    handleClick_mc2 = () => {
        const newVar = (this.state.mc2 + 1) % 2;
        this.setState({mc2: newVar});
    }

    handleSportProof = () => {
        const obj = document.querySelector("#youtube")
        if (!obj) {
            const youtube = document.createElement('iframe');
            youtube.width="560px";
            youtube.height="315px";
            youtube.setAttribute("src", "https://www.youtube.com/embed/3T3odwl_BL4");
            document.getElementById("mc-proof").appendChild(youtube);
        }

    }

    render() {

        const {storyIndex} = this.state;

        return (
            <div className="main-content" style={{display: "inherit"}}>

                <div className="intro">
                    <div className="intro-hi">Hi!</div>
                    <div>
                        My name is Hank (Hưng).
                        I speak
                        <span onClick={this.handleClick_mc1}>{this.mc1[this.state.mc1]}</span>,
                        and play
                        <span onClick={this.handleClick_mc2}>{this.mc2[this.state.mc2]}</span>
                    </div>

                </div>

                <ImageSlider
                    changeSlide={this.changeSlide}
                    images={this.images}
                    onImgReady={this.onImgReady}
                />
                <div className="story">
                    <div className="title">
                        {emojify(this.titles[storyIndex])}
                    </div>
                    <div className="text">
                        {emojify(this.texts[storyIndex])}
                    </div>
                </div>
            </div>
        )
    }
}