import {GET_COUNTRIES,SEARCH_COUNTRY,CHECK_COUNTRY} from "../actions";

const initialState={
    Countries:[],
    Loaded:false,
    offset:0,
    order:"",
    continent:"",
    selected:[],
    Detail:[],
    check:[],
}

export default function countrySearch(state=initialState,action){
    switch(action.type){
        case GET_COUNTRIES:
            return{
                ...state,
                Countries:action.payload,
            };
            
        case SEARCH_COUNTRY:
            if(action.payload.length>0){
                return{
                    ...state,
                    Detail:action.payload,
                }
            }
            break;
        case CHECK_COUNTRY:
            //if(action.payload.length>0)
                return{
                    ...state,
                    check:state.check.concat(action.payload[0].id)
                }
            break;
        default:
             return state;
    }

}