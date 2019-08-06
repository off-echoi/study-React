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
            nameDate : '',
            phoneData : '',
        }
    }

    throwDataEvent = (dataName,dataPhone) =>{
        this.setState({
            nameDate : dataName ,
            phoneData : dataPhone ,
        }, ()=> console.log('>>>>>>>>>>>>', this.state.nameDate))
    }

    throwDatachild = () => {
        this.props.getDate(this.state.nameDate)
        // this.props.getDate(this.state.nameDate, this.state.phoneData)
    }

    render() {
        // console.log('>>>>>>>>>>>>>',this.props.listData)
        // console.log('>>>>>>>>', this.props.getDate)
        return (  
            <Fragment>
                <h5>자식컴포넌트 > 부모컴포넌트 전달 (버튼은 자식컴포넌트)</h5>
                <ul>
                    {
                        this.state.list.map((v,listIndex) => {
                            return(
                                <li className="listStyle" key={listIndex}>
                                    <button onClick={(e)=>this.throwDataEvent(v.name,v.phone)}>
                                        <p>Name : {v.name} <span>({v.gender})</span></p>
                                        <p>Age : {v.age}</p>
                                        <p>Phoen : {v.phone}</p>
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>
                <button onClick={()=> this.throwDatachild()}>보내기</button>
            </Fragment>
        );
    }
}

export default ThrowData;