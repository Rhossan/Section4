export default function listViewReducer(state = {}, action) {
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