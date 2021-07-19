import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav(){


    return(
        <>
        <nav className="header"> 
            <NavLink className="btn" to="/main">
                        Home
            </NavLink>

            <NavLink className="btn" to="/main">
                        Contact
            </NavLink>   

            <input></input>
            <button> Search</button>
        </nav>
        </>
    )
}