import React, {Component} from "react";
import Slider from "react-slick";
import {emojify} from "react-emojione";
import {Tooltip} from 'react-tippy';
import Emojify from 'react-emojione';

export default class ImageSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageStatus: "loading"
        };
    }

    indexCallback = (index) => {
        this.props.changeSlide(index);
    }

    render() {
        const sliderStyle = {
            dots: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            slidesToShow: 1,
            autoplaySpeed: 5000,
            centerMode: true,
            arrows: true,
            afterChange: this.indexCallback
            };

        const t = (<Emojify className="image-slider-pretext">
                    I haven't been to a lot of places :sob:,
                    so it might be easier for me to list them down and tell a bit about my journeys without wasting (much) of your time xDD
                    Nonetheless, I wish to travel more. Suggestions?
                </Emojify>);

        return (
            <div>
                <Tooltip
                      html={t}
                      position="top"
                      arrow={true}
                    >
                    <Slider className="image-slider" {...sliderStyle}>
                        {this.props.images.map(img => {
                            return (
                                <div key={img} style={{height: "100%"}}>
                                    <img
                                        className="image-slide"
                                        src={img}
                                        onLoad={() => {
                                            this.props.onImgReady()
                                        }}/>
                                </div>);
                        })}
                    </Slider>
                </Tooltip>
            </div>
            );
        }
}
