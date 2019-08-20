import React, { Component } from 'react';
import './Movie.css'

class Movie extends Component {
    render() {
        return (
            <ul>
                <li>
                    <MoviePoster imgSrc = {this.props.poster} />
                    <h4>{this.props.title}</h4>
                </li>
            </ul>
        );
    }
}

class MoviePoster extends Component{
    render() {
        return (
            <img src={this.props.imgSrc} alt = {this.props.imgMsg} />
        );
    }
}
export default Movie;