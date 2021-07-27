import {POST_COUNTRIES} from "../actions";

const inicialState={
    activity:{}
}

export default function PostActivity(state=inicialState,action){
    switch(action.type){
        case POST_COUNTRIES:
            return{
                ...state,
                activity:action.payload
        };
        default:
            return {...state};
    }
} 
