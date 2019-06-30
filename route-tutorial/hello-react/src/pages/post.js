import React, { Component } from 'react';

const post =({match})=>{
    return (
        <p>
           포스트 #{match.params.id} 
        </p>
    );
}

export default post;