export default function apiDataReducer(state = {}, action) {
    // return Object.assign({}, state, {location: action.payload});
    if (action.type === 'FETCH_DATA') {
        return action.payload;
    } else {
        return state;
    }
}