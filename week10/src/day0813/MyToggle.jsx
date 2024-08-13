import React from "react";

class MyToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log("this is",this)
        const toggle = this.state.isToggleOn;
        this.setState({isToggleOn: !toggle});
    }

    render() {
        return (
            <button onClick={() => this.handleClick}>
                {this.state.isToggleOn ? "ON" : "OFF"}
            </button>
        )
    }
}

export default MyToggle;