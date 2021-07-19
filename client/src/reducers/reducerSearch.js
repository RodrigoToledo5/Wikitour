import {GET_COUNTRIES} from "../actions";

const initialState={
    Countries:[],
    Loaded:false,
    offset:0,
    order:""
}

export default function countrySearch(state=initialState,action){
   
    switch(action.type){
        case GET_COUNTRIES:
            return{
                ...state,
                Countries:action.payload,
            };
        default:
             return state;
    }
}