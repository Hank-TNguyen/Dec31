import React, {Component} from "react";
import LeftNav from "./LeftNav.jsx";
import Footer from "./Footer.jsx";
import Main from "./Main.jsx";

export default class Homepage extends Component {
    render() {

        return (
            <div style={{top: "50px", height: "2000px", position: "relative"}}>
                <LeftNav/>
                <Main/>
                <Footer/>
            </div>
            );

    }
}
