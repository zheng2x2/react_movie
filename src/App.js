import React from 'react';
import './App.css';
import Movie from './Movie';


// function App() {
class App extends React.Component {
  state = {
    greeting : "Hello!",
    movies : [
      {
        title : "Matrix",
        poster : "https://placeimg.com/200/300/1"
      },
      {
        title : "Full Metal Jacket",
        poster : "https://placeimg.com/200/300/2"
      },
      {
        title : "Oldboy",
        poster : "https://placeimg.com/200/300/3"
      },
      {
        title : "Star Wars",
        poster : "https://placeimg.com/200/300/4"
      }
    ]
  }

  componentDidMount(){
    setTimeout(() => {
      console.log("hello");
      this.setState({
        movies : [
          ...this.state.movies,
          {
            title : "Frozen",
            poster : "https://placeimg.com/200/300/5"
          }
        ]
      })
    }, 5000)
  }

  render(){
  return (
    <div className="App">
      {this.state.greeting}
      {this.state.movies.map((m, id) => {
        return <Movie title={m.title} poster={m.poster} key={id} />
      })}
      
    </div>
  );
  }
}

export default App;
