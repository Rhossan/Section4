export default function searchParamsReducer(state = {}, action) {
    if (action.type === 'UPDATE_SEARCH') {
        return action.payload;
    } else {
        return state;
    }
}