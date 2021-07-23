export const SEARCH_COUNTRY='SEARCH_COUNTRY';
export const GET_COUNTRIES='GET_COUNTRIES';
export const CHECK_COUNTRY='CHECK_COUNTRY';
export const POST_COUNTRIES='POST_COUNTRIES';

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
export const checkCountry =(name)=>(dispatch)=> { 
    fetch(`http://localhost:3001/Countries/?name=${name}`)
    .then(response => response.json())
    .then(json => {

        dispatch({
             type: 'CHECK_COUNTRY',
            payload: json });
        });    
}

export const postActivity =(activity)=>(dispatch)=> { 

    var data=JSON.stringify(activity)
    fetch('http://localhost:3001/Activity',{
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        method:'POST',
        body:data
        }
    ).then(response => response.json()
    ).then(json => {
        dispatch({
             type: 'POST_COUNTRIES',
            payload: json });
        }); 
}

  