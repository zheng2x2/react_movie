import React from 'react';
import './App.css';
import Movie from './Movie';


// function App() {
class App extends React.Component {
  state = {
  //   movies : [
  //     {
  //       title : "Matrix",
  //       poster : "https://placeimg.com/200/300/1"
  //     },
  //     {
  //       title : "Full Metal Jacket",
  //       poster : "https://placeimg.com/200/300/2"
  //     },
  //     {
  //       title : "Star Wars",
  //       poster : "https://placeimg.com/200/300/4"
  //     }
  //   ]
  }

  componentDidMount(){
    this._getMovies()
    
    // setTimeout(() => {
    //   this.setState({
    //     movies : [
    //       // ...this.state.movies,
    //       {
    //         title : "Frozen",
    //         poster : "https://placeimg.com/200/300/5"
    //       }
    //     ]
    //   })
    // }, 3000)
  }

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies : movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
    .then(res => res.json())
    .then(json => json.data.movies )
    .catch(err => console.log(err))
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(m => {
      return <Movie title={m.title_english} 
                    poster={m.medium_cover_image} 
                    key={m.id} 
                    genres={m.genres}
                    synopsis={m.synopsis}
              />
    });
    return movies;
  }
  
  render(){
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading ...'}
      </div>
    );
  }
}

export default App;
