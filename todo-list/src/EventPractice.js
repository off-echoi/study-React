import React, { Component } from 'react';

class EventPractice extends Component {

    state = {
        message : ''
    }
    constructor(props){
        super(props);
        this.handleChnage = this.handleChnage.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChnage(e){
        this.setState({
            message:e.target.value
        });
    }
    handleClick(){
        alert(this.state.message);
        this.setState({
            message:''
        })
    }
    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나"
                    value={this.state.message}
                    onChange={this.handleChnage}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}

export default EventPractice;