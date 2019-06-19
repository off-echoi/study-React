import React, { Component } from 'react';

class lterationSample extends Component {
    render() {
        const names = ['눈사람','다람쥐', '나무', '눈', '고래'];
        const nameList = names.map(
            (name) => (<li>{name}</li>)
        )
        return (
            <ul>
                {nameList}
            </ul>
        );
    }
}

export default lterationSample;
