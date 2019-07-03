import React, { Component } from 'react';

const Home=({history}) => {
    const style={
        border:'1px solid red'
    }
    return (
        <div>
            <h2>홈</h2>
            <buttton onClick={()=>{
                history.push('/about/javascript')
                // about 뒤의 아이를 받아서 about 과 매치 
            }} style={style}>자바스크립트를 이용하여 이동</buttton>
        </div>
    );
}

export default Home;