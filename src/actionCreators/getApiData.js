//utilize when fetching data from an api
//sample code
export default function getApiData(){
    return function(dispatch) {
        fetch('https://api.section4.com')
            .then(res => res.json())
            .then(data => dispatch({ type: "FETCH_DATA", payload: data }));
    }
}
