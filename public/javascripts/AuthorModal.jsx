import React, {Component} from "react";

export default class AuthorModal extends Component {
    render() {
        const {opac} = this.props,
            _style = {opacity: opac ? 0.4 : 0};

        return (

            <div>
                <div className="background-modal" style={_style}/>
                <p> MODAL </p>
            </div>
        )
    }
}