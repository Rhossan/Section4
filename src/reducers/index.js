import { combineReducers } from 'redux';
import apiData from './apiData';
import sliderView from './sliderView';
import listView from './listView';
import searchParams from './searchParams';

export default combineReducers({
    apiData,
    sliderView,
    listView,
    searchParams
});