import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'

const Movies = [
  {
    title :'영화1',
    poster : 'https://upload.wikimedia.org/wikipedia/ko/8/80/%ED%95%B4%EB%A6%AC_%ED%8F%AC%ED%84%B0%EC%99%80_%EB%B9%84%EB%B0%80%EC%9D%98_%EB%B0%A9_%EC%98%81%ED%99%94.jpg',
  },
  {
    title :'영화2',
    poster :'https://pbs.twimg.com/media/DDP4VvGUAAAY3ap.jpg',
  },
  {
    title :'영화3',
    poster : 'https://upload.wikimedia.org/wikipedia/ko/4/45/%ED%95%B4%EB%A6%AC_%ED%8F%AC%ED%84%B0%EC%99%80_%ED%98%BC%ED%98%88_%EC%99%95%EC%9E%90_%EC%98%81%ED%99%94.jpg',
 
  },
  {
    title :'영화4',
    poster : 'http://image.newdaily.co.kr/site/data/img/2011/07/11/2011071100075_0.jpg'
 
  }
]
class App extends Component {
  constructor(props){
    super(props);
    console.log('constructor')
    debugger;
  }
  static getDerivedStateFromProps(){
    console.log('getDerivedStateFromProps')
    debugger;
  }
  componentDidMount(){
    console.log('componentDidMount')
    debugger;
  }
  shouldComponentUpdate(){
    console.log('shouldComponentUpdated')
    debugger;
  }
  getSnapshotBeforeUpdate(){
    console.log('getsnapshotBeforeUpdated')
    debugger;
  }
  componentDidUpdate (){
    console.log('componetDidMount')
    debugger;
  }

  render(){
    return (
      <div className="App">
           {Movies.map(movie => {
             return(<Movie title={movie.title} poster ={movie.poster}/>)
           })}
      </div>
    );
  }
}

export default App;
