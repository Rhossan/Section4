import {createStore, compose, applyMiddleware} from 'redux';
import  thunk  from 'redux-thunk';
import reducer from '../reducers';

const store = createStore(
  reducer, {
      apiData: null,
      filteredData: null,
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