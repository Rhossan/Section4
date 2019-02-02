export default function cardReducer(state = {}, action) {
    // return Object.assign({}, state, {location: action.payload});
    if (action.type === 'SET_CARD') {
        return action.payload;
    } else {
        return state;
    }
}