import React, { Component } from 'react';

class ScrollBox extends Component {
    scrollBottom=()=>{
        const {scrollHeight, clientHeight} = this.boxx;
        this.boxx.scrollTop=scrollHeight - clientHeight;
    }
    render() {
        const style={
            border:'1px solid black',
            height:'300px',
            width:'300px',
            overflow:'auto',
            position:'ralative'
        }

        const innerstyle ={
            width:'100%',
            height:'650px',
            background:'linear-gradient(white,green)'
        }
        return (
            <div
                style={style}
                ref = {(refs)=> {this.boxx=refs}}>
                <div style={innerstyle}></div>
            </div>
        );
    }
}

export default ScrollBox;