//utilize when fetching data from an api
export default function apiDataReducer(state = {}, action) {
    if (action.type === 'FETCH_DATA') {
        return action.payload;
    } else {
        return state;
    }
}