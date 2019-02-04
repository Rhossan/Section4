export default function listViewReducer(state = {}, action) {
    // return Object.assign({}, state, {location: action.payload});
    if (action.type === 'TOGGLE_VIEW') {
        switch (action.payload) {
            case 'slider':
                return false;
            case 'list':
                return true;
            default:
                return state;
        }
    } else {
        return state;
    }
}