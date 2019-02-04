export default function searchParamsReducer(state = {}, action) {
    // return Object.assign({}, state, {location: action.payload});
    if (action.type === 'UPDATE_SEARCH') {
        return action.payload;
    } else {
        return state;
    }
}