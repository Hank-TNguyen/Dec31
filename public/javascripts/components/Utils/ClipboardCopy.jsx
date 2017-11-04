import React, {Component} from "react";
import storage from "../../utils/store.js";

const KEY = "ClipboardCopy_storage";

export default class ClipboardCopy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            savedString: storage.get(KEY) || [{savedText: ""}]
        };
    }

    componentWillUpdate() {
        storage.set(KEY, this.state.savedString);
    }

    handleAdd = () => {
        this.setState({savedString: this.state.savedString.concat({savedText: ``})});
    }

    handleRemoveBox = (ind) => {
        const mod = this.state.savedString;
        mod.splice(ind, 1);
        this.setState({savedString: mod});
    }

    handleSaveString = (ind, text) => {
        const mod = this.state.savedString;
        mod[ind].savedText = text;
        this.setState({savedString: mod});
    }

    render() {
        return (
            <div>
                <h1>Click To Copy</h1>
                {this.state.savedString.map((textObj, i) => {
                    const key = `CopyBox_${i}`;
                    return (
                        <ClipboardCopyBox
                            key={key}
                            index={i}
                            savedText={textObj.savedText}
                            onRemoveBox={this.handleRemoveBox}
                            onSaveString={this.handleSaveString}
                        />
                        );
                })}
                <button className="btn btn-success" style={{marginTop: "15px"}}onClick={this.handleAdd}>Add</button>
            </div>
        )
    };
}

class ClipboardCopyBox extends Component {

    constructor(props) {
        super(props);
        this.handleCopy = this.handleCopy.bind(this);
    }

    handleCopy = () => {
        this.textRef.select();
        document.execCommand("copy");
    }

    handleRemove = () => {
        this.props.onRemoveBox(this.props.index);
    }

    saveString = () => {
        this.props.onSaveString(this.props.index, this.textRef.value);
    }

    getRefCallback = (name) => {
        return (ref) => {
            if (ref) {
                this[name] = ref;
            } else if (this[name]) {
                this[name] = null;
            }
        };
    }

    render() {
        return (
            <div style={{marginTop: "10px"}}>
                <div>
                    <textarea
                        ref={this.getRefCallback("textRef")}
                        onChange={this.saveString}
                        value={this.props.savedText}
                        type="text"
                    />
                </div>
                <button className="btn btn-sm btn-info" type="button" onClick={this.handleCopy}>Click to copy to clipboard!</button>
                <button className="btn-warning" type="button" style={{marginLeft: "5px"}}onClick={this.handleRemove}>-</button>
            </div>
        )
    };
}

