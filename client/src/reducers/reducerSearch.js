import {GET_COUNTRIES,SEARCH_COUNTRY} from "../actions";

const initialState={
    Countries:[],
    Loaded:false,
    offset:0,
    order:"",
    continent:"",
    selected:[],
    Detail:[]
}

export default function countrySearch(state=initialState,action){
    switch(action.type){
        case GET_COUNTRIES:
            return{
                ...state,
                Countries:action.payload,
            };
        case SEARCH_COUNTRY:
            return{
                ...state,
                Detail:action.payload,
            }
        default:
             return state;
    }

}