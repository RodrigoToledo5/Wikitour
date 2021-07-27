import {
        GET_COUNTRIES,
        SEARCH_COUNTRY,
        CHECK_COUNTRY,
        GET_ALL_ACTIVITIES,
        GET_COUNTRY_BYACTIVITIES,
        GET_BYID,
        GET_LASTACTIVITY,
    } from "../actions";

const initialState={
    Countries:[],
    Loaded:false,
    offset:0,
    Detail:[],
    check:[],
    Activities:[],
    ID:{},
    LastActivity:{}
}

export default function countrySearch(state=initialState,action){
    switch(action.type){
        case GET_COUNTRIES:
            return{
                ...state,
                Countries:action.payload,
            };
        case GET_ALL_ACTIVITIES:
            return{
                ...state,
                Activities:action.payload,
            };
        case GET_COUNTRY_BYACTIVITIES:
                return{
                    ...state,
                    Countries:action.payload
                }
        case  GET_BYID:
                return{
                    ...state,
                    ID:action.payload
                }
        case  GET_LASTACTIVITY:
            return{
                ...state,
                LastActivity:action.payload
            }   
        case SEARCH_COUNTRY:
            if(action.payload.length>0){
                return{
                    ...state,
                    Detail:action.payload,
                }
            }
            break;
        case CHECK_COUNTRY:
            if(action.payload.length>0){
                return{
                    ...state,
                    check:state.check.concat(action.payload[0].id)
                }
            }
            break;
        default:
             return state;
    }

}