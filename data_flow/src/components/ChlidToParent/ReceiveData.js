import React, { Component } from 'react';
import ThrowData from './Child/ThrowData'

class ReceiveData extends Component {
    constructor(props) {
        super(props);
        this.state ={
            getDataName:'',
            getDataPhone:'',
        }
    }
    
    getDataEvent=(PnameData,PphoneData)=>{
        this.setState({
            getDataName: PnameData,
            getDataPhone : PphoneData
        })
    }

    render() {
        return (
            <div>
                <h3>보내기 버튼 클릭 시 부모로 데이터 전달</h3>
                <p>
                    받은 이름 : {this.state.getDataName} <br/>
                    받은 핸드폰번호 : {this.state.getDataPhone}
                </p>
                <ThrowData getDate ={this.getDataEvent}/>
            </div>
        );
    }
}

export default ReceiveData;