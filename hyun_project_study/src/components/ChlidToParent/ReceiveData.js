import React, { Component } from 'react';
import ThrowData from './Child/ThrowData'

class ReceiveData extends Component {
    constructor(props) {
        super(props);
        this.state ={
            list :[
                {
                    name : 'Natasha',
                    age : 22,
                    phone : '010-1234-5678',
                    gender : 'F'
                },
                {
                    name : 'Tessa',
                    age : 21,
                    phone : '010-4321-0987',
                    gender: 'F',
                },
                {
                    name : 'Peter',
                    age : 25,
                    phone : '011-2442-5555',
                    gender: 'M',
                },
                {
                    name : 'Johne',
                    age : 23,
                    phone : '010-4621-5445',
                    gender: 'M',
                },
            ],
            getDataName:'',
            getDataPhone:'',
        }
    }
    
    getDataEvent=(e,i)=>{
        this.setState({
            getDataName: e,
            getDataPhone : 'i'
        })
    }

    render() {
        return (
            <div>
                {/* <label htmlFor="input">자식에게서 받은 이름</label>
                <input id="input" type ="text" /> */}
                <p getDate ={(e)=>this.getDataEvent(getName,gePhone)}>
                    받은 이름 : {this.state.getDataName} <br/>
                    받은 핸드폰번호 : {this.state.getDataPhone}
                </p>
                <ThrowData listData={this.state.list}/>
            </div>
        );
    }
}

export default ReceiveData;