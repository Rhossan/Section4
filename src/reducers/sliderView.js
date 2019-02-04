export default function sliderViewReducer(state = {}, action) {
    // return Object.assign({}, state, {location: action.payload});
    if (action.type === 'TOGGLE_VIEW') {
        return action.payload;
    } else {
        return state;
    }
}