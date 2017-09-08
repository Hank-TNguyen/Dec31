import React, {Component} from "react";

export default class IFrameVideoPlayer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="iframe-video-container" ref="iframe-container" onClick={() => {
                const iframe = this.refs["iframe-container"];
                iframe.parentNode.removeChild(iframe);
            }}>
                <iframe width="560px" height="315px"
                    className="iframe-video"
                    src={this.props.src}>
                    iframe not supported!
                </iframe>
            </div>
        )
    }
}