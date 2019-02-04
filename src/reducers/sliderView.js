export default function sliderViewReducer(state = {}, action) {
    // return Object.assign({}, state, {location: action.payload});
    if (action.type === 'TOGGLE_VIEW') {
        switch (action.payload) {
            case 'slider':
                return true;
            case 'list':
                return false;
            default:
                return state;
        }
        // return action.payload;
    } else {
        return state;
    }
}