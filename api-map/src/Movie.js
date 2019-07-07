import React, { Component } from 'react';
import PropsTypes from 'prop-types'
import './Movie.css'

class Movie extends Component {
    static propTypes = {
        title : PropsTypes.string.isRequired, // movie 컴포넌트는 title 이라는 prop  을 제공하는 거ㅛ이 필수로 설정됨
        poster : PropsTypes.string,
         
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <MoviePoster posters = {this.props.poster}/>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}


class MoviePoster extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <img src={this.props.posters}/>
            </div>
        );
    }
}

export default Movie;