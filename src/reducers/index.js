import { combineReducers } from 'redux';
import views from './views';
import card from './card';

export default combineReducers({
    views,
    card
});