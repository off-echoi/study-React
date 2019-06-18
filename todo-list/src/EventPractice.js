import React, { Component } from 'react';

class EventPractice extends Component {

    state = {
        username:'',
        message : ''
    }
    constructor(props){
        super(props);
        this.handleChnage = this.handleChnage.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChnage(e){
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    handleClick(){
        alert(this.state.username + ' : '+ this.state.message);
        this.setState({
            username:'',
            message:''
        })
    }
    render() {
        return (
            <div>
<<<<<<< Updated upstream
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="유저병"
                    value={this.state.username}
                    onChange={this.handleChnage}
                />
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나"
                    value={this.state.message}
                    onChange={this.handleChnage}
                />
                <button onClick={this.handleClick}>확인</button>
=======
                <button onClick={()=>{
                        this.setState({
                            number:this.state.number +  1
                        })
                    }
                }>더하기</button>
>>>>>>> Stashed changes
            </div>
        );
    }
}

export default EventPractice;