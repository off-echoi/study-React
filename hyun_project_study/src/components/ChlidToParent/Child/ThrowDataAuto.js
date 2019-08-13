import React, { Component, Fragment } from 'react';
import './basicStyle.css'

class ThrowData extends Component {
    constructor(props){
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
            nameData : '',
            phoneData : '',
        }
    }

    // saveData = (dataName,dataPhone) =>{
    //     this.setState({
    //         nameData : dataName ,
    //         phoneData : dataPhone ,
    //     },
    //     ()=> this.props.getDate(this.state.nameData,this.state.phoneData)
    //     ) 
    // }
    saveData = (dataName,dataPhone)=>{
        this.setState({
            nameData : dataName ,
            phoneData : dataPhone ,
        },()=>this.aaa())
    }


    aaa = () =>{
        this.props.getDate(this.state.nameData,this.state.phoneData)
    }

    render() {
        return (  
            <Fragment>
                <h5>자식컴포넌트 > 부모컴포넌트 전달 (버튼은 자식컴포넌트)</h5>
                <ul>
                    {
                        this.state.list.map((v,listIndex) => {
                            return(
                                <li className="listStyle" key={listIndex}>
                                    <button onClick={(e)=>this.saveData(v.name,v.phone)}>
                                        <p>Name : {v.name} <span>({v.gender})</span></p>
                                        <p>Age : {v.age}</p>
                                        <p>Phoen : {v.phone}</p>
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>
            </Fragment>
        );
    }
}

export default ThrowData;