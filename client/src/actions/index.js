export const GET_POKEMON='GET_POKEMON';
export const RANDOM_POKEMON='RANDOM_POKEMON';
export const CAPTURE_POKEMON='CAPTURE_POKEMON';
export const GET_COUNTRIES='GET_COUNTRIES';

export const getContry =(offset,sort,continent)=>(dispatch)=> { 
    fetch(`http://localhost:3001/Countries/?offset=${offset}&sort=${sort}&=${continent}`)
    .then(response => response.json())
    .then(json => {
        dispatch({
             type: 'GET_COUNTRIES',
            payload: json });
        });    
}



export const pickPokemon =(pokemonid)=>(dispatch)=> { 
    
   dispatch({type:"PICK_POKEMON",payload:pokemonid})
   
}

  