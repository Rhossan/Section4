export default function viewsReducer(state = {}, action){
    // return Object.assign({}, state, {location: action.payload});
    if (action.type === 'SET_VIEWS'){
        return action.payload;
    } else {
        return state;
    }
}