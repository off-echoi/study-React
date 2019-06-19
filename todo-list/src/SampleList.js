import React, { Component } from 'react';

class SampleList extends Component {
    render() {
        const names = ['눈사람', '봄','여름','가울','겨울']
        const namess = names.map(
            (name) => (<li>{name}</li>)
        )
        return (
            <ul>
                {namess}
            </ul>
        );
    }
}

export default SampleList;