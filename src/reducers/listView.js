export default function listViewReducer(state = {}, action) {
    // return Object.assign({}, state, {location: action.payload});
    if (action.type === 'TOGGLE_VIEW') {
        return action.payload;
    } else {
        return state;
    }
}