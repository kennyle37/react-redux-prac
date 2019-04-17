import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!

export default createStore(
  rootReducer,
  {video: exampleVideoData[0], videos: exampleVideoData},
  applyMiddleware(thunk),
);
