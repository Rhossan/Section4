export default function filteredDataReducer(state = {}, action) {
    // return Object.assign({}, state, {location: action.payload});
    if (action.type === 'FILTER_DATA') {
        return action.payload;
    } else {
        return state;
    }
}