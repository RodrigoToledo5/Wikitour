import React from 'react'
import { useSelector } from 'react-redux';

export default function Aside(){
    const state = useSelector(store => store.postActivity);//PostActivity mayuscula es el reducer con minuscula es el action


    return(
        <div className="aside">
            <div className="aside__card">
                <h2>Last Activities created</h2>
                <h3> 
                {state.activity&&state.activity.name}
                </h3>
                <div>
                    Difficulty: {state.activity&&state.activity.difficulty}
                </div>
                <div>
                    Duration: {state.activity&&state.activity.duration}
                </div>
                <div>
                    Season: {state.activity&&state.activity.season}
                </div>
                <div>
                    Updated:{state.activity&&state.activity.updatedAt}
                </div>
                <div>
                    Date of creation:{state.activity&&state.activity.createdAt}
                </div>
            </div>   
        </div>
    )
}