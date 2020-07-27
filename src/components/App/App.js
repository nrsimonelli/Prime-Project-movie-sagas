import React, { Component } from 'react';
import './App.css';

//Hash Router
import { HashRouter as Router, Route } from 'react-router-dom';

import Header from '../Header/Header';
import MovieList from '../MovieList/MovieList';
import MovieDetails from "../MovieDetails/MovieDetails";
import EditMovieItem from "../EditMovieItem/EditMovieItem";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Route exact path="/" component={MovieList} />
          <Route path='/details/:id' component={MovieDetails} />
          <Route path="/edit-movie/:id" component={EditMovieItem} />
        </Router>
      </div>
    );
  }
}

export default App;
