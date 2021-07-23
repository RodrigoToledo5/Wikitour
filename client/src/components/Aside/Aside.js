import React from 'react'
import { useSelector } from 'react-redux';

export default function Aside(){
    const statepost = useSelector(store => store.PostActivity);//PostActivity mayuscula es el reducer con minuscula es el action
    console.log(statepost)
    return(
        <div className="aside">
        <h2>Titulo</h2>
            <span> 
               {statepost}
            </span>
            <button>Ordenar</button>
            <button>Ordenar</button>
        </div>
    )
}