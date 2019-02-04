//utilize when fetching data from an api
export default function getApiData(apiData){
    return {type: 'FETCH_DATA', payload: apiData};
}
