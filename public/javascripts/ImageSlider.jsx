import React, {Component} from "react";
import Slider from "react-slick";

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
            adaptiveHeight: true,
            afterChange: this.indexCallback
            };

        if (this.state.imageStatus === "loaded") {
            this.props.onImgReady();
        }

        return (
            <Slider className="image-slider" {...sliderStyle}>
                {this.props.images.map(img => {
                    return (
                        <div key={img}>
                            <img
                                className="image-slide"
                                src={img}
                                onLoad={() => {
                                    this.setState({imageStatus: "loaded"})
                                }}/>
                        </div>);
                })}
            </Slider>
            );
        }
}