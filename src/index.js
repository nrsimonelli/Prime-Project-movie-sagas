import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// Import saga middleware
import createSagaMiddleware from 'redux-saga';

import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery("FETCH_MOVIE", getMovieSaga);
    yield takeEvery("FETCH_DETAILS", getDetailsSaga);
    yield takeEvery("CHANGE_MOVIE_DETAILS", changeMovieDetailsSaga);
}

function* getMovieSaga() {
  console.log("in getMovieSaga");
  try {
    const response = yield axios.get("/api/movies/");
    yield put({ type: "SET_MOVIE", payload: response.data });
  } catch (error) {
    console.log("Error with Get:", error);
  }
}

function* getDetailsSaga() {
    console.log("in getDetailsSaga");
    try {
        const response = yield axios.get("/api/details/");
        yield put({ type: "SET_DETAILS", payload: response.data });
    } catch (error) {
        console.log("Error with Get:", error);
    }
}

function* changeMovieDetailsSaga(action) {
    try {
        yield axios.put("/api/details/", action.payload);
    } catch (err) {
        console.log("error", err);
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIE':
            return action.payload;
        default:
            return state;
    }
}

const details = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        details
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
