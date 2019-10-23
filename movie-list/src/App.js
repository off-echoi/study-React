import React, { Component } from 'react';
import axios from 'axios'
import Movie from './Movie'
// import Val from './ValidationSample'
class App extends Component {
  state ={
    isLoading : true,
    movies:[],
  }
  componentDidMount(){
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state; 
    return (
        <section className={"container"}>
          {isLoading ? 'Loading...' : movies.map((v,i)=>{
            return(
              <Movie 
                key={v.id}
                id ={v.id}
                year={v.year}
                title={v.title}
                summary={v.summary}
                poster={v.large_cover_image}
              />
            )
          })}
        </section>
    );
  }

  getMovies = async () =>{
    const {data:{
      data:{movies}
    }} = await axios.get("https://yts.lt/api/v2/list_movies.json?sort_by=rating");
    console.log(movies);

    this.setState((state, props) => { return { 
        movies : movies,
        isLoading:false,
     }});
    
    // const movies = await axios.get("https://yts.lt/api/v2/list_movies.json");
    // console.log(movies.data.data.movies);

  }
}

export default App;
