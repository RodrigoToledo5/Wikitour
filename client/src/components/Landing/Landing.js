//no hace falta hacer el import de react porque babel ya reconoce que se esta usando funciones de react
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Landing(){
    return(
        <>
            <div className="content__landingpage">
                <NavLink to="/home">
                    <button className="btn_landing">
                        <h1>Go</h1>
                    </button>
                </NavLink>
            </div>
        </>
    )
}