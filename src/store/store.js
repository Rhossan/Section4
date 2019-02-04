import {createStore, compose, applyMiddleware} from 'redux';
import  thunk  from 'redux-thunk';
import reducer from '../reducers';
import data from '../data.json';

const store = createStore(
  reducer, {
      apiData: data,
      sliderView: true,
      listView: false,
      searchParams: ''
  },
  compose(
    applyMiddleware(thunk),
    typeof window === "object" &&
    typeof window.devToolsExtension !== "undefined"
      ? window.devToolsExtension()
      : f => f
  )
);

export default store;