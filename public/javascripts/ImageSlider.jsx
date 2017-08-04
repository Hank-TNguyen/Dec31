import React, {Component} from "react";
import Slider from "react-slick";

export default class ImageSlider extends Component {
    constructor() {
        super();
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
            adaptiveHeight: true
            };

        return (
            <Slider className="image-slider" {...sliderStyle}>
                <div><img className="image-slide" src="../images/vietnam.png"/></div>
                <div><img className="image-slide" src="../images/china.png"/></div>
                <div><img className="image-slide" src="../images/alberta.png"/></div>
                <div><img className="image-slide" src="../images/singapore.png"/></div>
            </Slider>
            );
        }
}