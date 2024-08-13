import React from "react";

class ConfirmButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isConfirmed: false
        };

        this.handleConfirm = this.handleConfirm.bind(this);
        // 바인딩 해야하는 이유: this.handleClick을 호출할 때 this가 undefined가 되기 때문
    }

    handleConfirm() {
        const toggle = this.state.isConfirmed;
        this.setState({isConfirm: !toggle});
    }

    render() {
        return (
            <button onClick={this.handleConfirm}>확인하기</button>
        )
    }
}