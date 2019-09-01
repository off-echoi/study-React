import React, { Component } from 'react';
import RecieveDataChild from './Child/RecieveDataChild'
import './basicStyle.css'


class ThrowParentData extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
            saveName:'',
            savePhone:'',
        }
    }
    
    saveData = (thisName, thisPhone) => {
        let nameData = thisName;
        let phoneData = thisPhone;
        console.log('name >>>>>>>>>>>>>>>>>>',  nameData);
        console.log('phone >>>>>>>>>>>>>>>>>>',  phoneData);
        // this.setState({
        //     saveName : thisName,
        //     savePhone : thisPhone
        // })
    }

    throwData = () => {
        this.setState({
            saveName : nameData,
            savePhone : phoneData
        })
    }
    
    render() {
        return (
            <div>
                <h3>보내기 버튼 클릭 시 자식으로 데이터 전달</h3>
                 <RecieveDataChild 
                    getDataName = {this.state.saveName} 
                    getDataPhone = {this.state.savePhone}
                />
                <ul>
                    {
                        this.state.list.map((v,listIndex)=> {
                            return(
                                <li key={listIndex} className="listStyle">
                                    <button onClick={()=> this.saveData(v.name, v.phone)}>
                                        <p>Name : {v.name} <span>({v.gender})</span></p>
                                        <p>Age : {v.age}</p>
                                        <p>Phone : {v.phone}</p>
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>
                <button onClick = {() => this.throwData()} >보내기</button>
               
            </div>
        );
    }
}

export default ThrowParentData;