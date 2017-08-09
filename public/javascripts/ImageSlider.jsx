import React, {Component} from "react";
import Slider from "react-slick";

export default class ImageSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgs: null
        };
    }

    componentWillMount() {
        this.imageFetcher = new Promise((resolve, reject) => {
            const imgs = this.props.images.map((imgSrc, index) => {
                return (
                    <div key={index} data-index={index}>
                        <img
                            className="image-slide"
                            src={imgSrc}
                            />
                    </div>
                    );
            });
            resolve(imgs);
        });

        Promise.resolve(this.imageFetcher).then(imgs => {
            const sliderStyle = {
                dots: true,
                infinite: true,
                speed: 500,
                autoplay: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplaySpeed: 5000,
                arrows: true,
                adaptiveHeight: true,
                afterChange: this.indexCallback
            };
            const _imgs = (<Slider className="image-slider" {...sliderStyle}>
                    <div><img className="image-slide" src="../images/vietnam.png"/></div>
                    <div><img className="image-slide" src="../images/vietnam.png"/></div>
                    <div><img className="image-slide" src="../images/vietnam.png"/></div>
                    <div><img className="image-slide" src="../images/vietnam.png"/></div>
                </Slider>);
            this.setState({
                imgs: _imgs
            })
            this.props.onImgReady();

        });
    }

    indexCallback = (index) => {
        this.props.changeSlide(index);
    }

    render() {

        return this.state.imgs;

    }
}