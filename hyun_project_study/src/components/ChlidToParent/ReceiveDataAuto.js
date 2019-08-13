import React, { Component } from 'react';
import ThrowDataAuto from './Child/ThrowDataAuto'

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
                <h3>자동으로 데이터 전달</h3>
                <p>
                    받은 이름 : {this.state.getDataName} <br/>
                    받은 핸드폰번호 : {this.state.getDataPhone}
                </p>
                <ThrowDataAuto getDate ={this.getDataEvent}/>
            </div>
        );
    }
}

export default ReceiveData;