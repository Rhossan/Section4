export default function sliderViewReducer(state = {}, action) {
    if (action.type === 'TOGGLE_VIEW') {
        switch (action.payload) {
            case 'slider':
                return true;
            case 'list':
                return false;
            default:
                return state;
        }
    } else {
        return state;
    }
}