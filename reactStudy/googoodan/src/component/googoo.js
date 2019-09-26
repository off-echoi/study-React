import React, { Component } from 'react';

class googoo extends Component {
    constructor(props){
        super(props)
        this.state={
            number1 : 1,
            number2 : 2,
            value:'',
            result:'',
        }
    }
    render() {
        return (
            <div>
                <p>{this.state.number1} 곱하기 {this.state.number2} (은)는?</p>
                <form onSubmit={(e)=>this.sub(e)}>
                    <input type="number" value={this.state.value} onChange={(e)=>this.valueFnc(e)}/>
                    <input type="button" value="입력" onClick={(e)=>this.sub(e)}/>
                </form>
                <p>
                    {this.state.result}
                </p>
                {/* <p>{this.state.number1 * this.state.number2}</p> */}
            </div>
        );
    }
    componentDidMount() {
        this.numberFnc()
    }
    valueFnc=(e)=>{
        this.setState({value:e.target.value})
    }
    numberFnc=()=>{
        let numArr = [];
        for(let i =1 ; i<10; i++){
            numArr.push(i)
        }
        let randomNum1 = Math.ceil(Math.random()*numArr.length);
        let randomNum2 = Math.ceil(Math.random()*numArr.length);
        this.setState((state, props) => { return { 
            number1 : randomNum1,
            number2 : randomNum2
         }});
    }

    sub=(e)=>{
        e.preventDefault();
        if(parseInt(this.state.value) === this.state.number1 * this.state.number2){
            this.setState({ 
                value:'',
                result:'정답'
             },()=>this.numberFnc());
        }else{
            this.setState({
                value:'',
                result:'땡'
            });
            
        }
        // inpNum
    }
}

export default googoo;