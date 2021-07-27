export const SEARCH_COUNTRY='SEARCH_COUNTRY';
export const GET_COUNTRIES='GET_COUNTRIES';
export const CHECK_COUNTRY='CHECK_COUNTRY';
export const POST_COUNTRIES='POST_COUNTRIES';
export const GET_ALL_ACTIVITIES='GET_ALL_ACTIVITIES';
export const GET_COUNTRY_BYACTIVITIES='GET_COUNTRY_BYACTIVITIES';
export const GET_BYID='GET_BYID';
export const GET_LASTACTIVITY='GET_LASTACTIVITY';


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
        if(json.length>0){
            dispatch({type: 'SEARCH_COUNTRY',payload: json });
        }});    
}
export const checkCountry =(name)=>(dispatch)=> { 
    fetch(`http://localhost:3001/Countries/?name=${name}`)
    .then(response => response.json())
    .then(json => {
        if(json.length>0){
            dispatch({
                type: 'CHECK_COUNTRY',
                payload: json });
            }});            
}

export const getByID =(id)=>(dispatch)=> { 
    fetch(`http://localhost:3001/Countries/${id}`)
    .then(response => response.json())
    .then(json => {
            dispatch({
                type: 'GET_BYID',
                payload: json });
            });            
}

export const lastActivity =()=>(dispatch)=> { 
    fetch(`http://localhost:3001/Activity?update=true`)
    .then(response => response.json())
    .then(json => {
            dispatch({
                type: 'GET_LASTACTIVITY',
                payload: json });
            });            
}

export const getallActivities =()=>(dispatch)=> { 
    fetch(`http://localhost:3001/Activity`)
    .then(response => response.json())
    .then(json => {
        if(json.length>0){
            dispatch({
                type: 'GET_ALL_ACTIVITIES',
                payload: json });
            }});            
}

export const getCountriesbyActivities =(activity,offset,sort,continent)=>(dispatch)=> { 
    fetch(`http://localhost:3001/Activity?name=${activity}&offset=${offset}&sort=${sort}&continent=${continent}`)
    .then(response => response.json())
    .then(json => {
            dispatch({
                type: 'GET_COUNTRY_BYACTIVITIES',
                payload: json });
            });            
}

export const postActivity =(activity)=>(dispatch)=> { 

    var data=JSON.stringify(activity)
    fetch('http://localhost:3001/Activity',{
        headers: {
            'Content-Type': 'application/json'
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

  