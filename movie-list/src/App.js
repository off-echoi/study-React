import React, { Component } from 'react';
// import Val from './ValidationSample'
import Movie from './Movie'

const movies =[
  {
    title : 'AAAA',
    poster : 'http://momsmagazine.co.kr/worp/wp-content/uploads/2015/08/%EB%B2%A0%ED%85%8C%EB%9E%91.jpg'
  },
  {
    title : 'BBBB',
    poster : 'https://movie-simg.yes24.com/NYes24/MOVIE/M90/M52/M00006905255_91952.jpg'
  },
  {
    title : 'CCCC',
    poster : 'http://www.rivalnews.co.kr/news/photo/201608/1154_1012_832.jpg'
  },
  {
    title : 'DDDD',
    poster : 'http://www.dydailynews.com/imgdata/dydailynews_com/201808/2018082716567091.jpg'
  },
  {
    title : 'EEEE',
    poster : 'http://www.dailyt.co.kr/news/photo/201901/34949_19672_3125.jpg'
  },

]

class App extends Component {
 
  render() { 
    return (
      <div>
        {/* <Val>    </Val> */}
        {/* <Movie moviesList = {movies}/> */}
        {
          movies.map((movie)=>{
            return(
              <Movie title = {movie.title} poster = {movie.poster}/>
            )
          })
          
        }
      </div>
    );
  }
}

export default App;
