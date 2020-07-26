import React, { Component } from 'react';
import './App.css';

//Hash Router
import { HashRouter as Router, Route } from 'react-router-dom';

import Header from '../Header/Header';
import MovieList from '../MovieList/MovieList';
import MovieItemDetails from "../MovieItemDetails/MovieItemDetails";
import EditMovieItem from "../EditMovieItem/EditMovieItem";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <p>Empty Page</p>
        <Router>
          <Route exact path="/" component={MovieList} />
          <Route path='/details/:id' component={MovieItemDetails} />
          <Route path="/edit-movie" component={EditMovieItem} />
        </Router>
      </div>
    );
  }
}

export default App;
