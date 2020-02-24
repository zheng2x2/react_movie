import React from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const movieTitles = [
  "Matrix", "Full Metal Jacker", "Oldboy", "Star Wars"
]
function App() {
  return (
    <div className="App">
      <Movie/>
    </div>
  );
}

export default App;
