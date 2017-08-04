import React, {Component} from "react";

export default class CentreQuote extends Component {
    render() {
        const quote = "The best preparation for tomorrow is doing your best today.";
        return (
            <div className="quote">
                {quote}
            </div>
        )
    }
}