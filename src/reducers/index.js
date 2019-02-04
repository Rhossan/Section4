import { combineReducers } from 'redux';
import apiData from './apiData';
import filteredData from './filteredData';
import sliderView from './sliderView';
import listView from './listView';
import searchParams from './searchParams';

export default combineReducers({
    apiData,
    filteredData,
    sliderView,
    listView,
    searchParams
});