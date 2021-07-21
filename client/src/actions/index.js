export const SEARCH_COUNTRY='SEARCH_COUNTRY';
export const GET_COUNTRIES='GET_COUNTRIES';

export const getContry =(offset,sort,continent='')=>(dispatch)=> { 
    fetch(`http://localhost:3001/Countries/?offset=${offset}&sort=${sort}&continent=${continent}`)
    .then(response => response.json())
    .then(json => {
        dispatch({
             type: 'GET_COUNTRIES',
            payload: json });
        });    
}

export const searchContry =(name)=>(dispatch)=> { 
    fetch(`http://localhost:3001/Countries/?name=${name}`)
    .then(response => response.json())
    .then(json => {
        dispatch({
             type: 'SEARCH_COUNTRY',
            payload: json });
        });    
}

  