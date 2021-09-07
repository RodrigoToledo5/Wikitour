import {useDispatch} from 'react-redux';
import {useState } from 'react';
import { NavLink,useHistory, } from 'react-router-dom';
import { searchContry } from '../../actions';

export default function Nav(){
    const dispatch = useDispatch();
    const [Input, setInput] = useState("")
    let history = useHistory();

    function handleChange(eve) {
        setInput(eve.target.value);
    }
    function handleSumit(){

        
        dispatch(searchContry(Input));
        history.push('/details/'+Input)
        setInput("");
    }


    return(
        <>
            <nav className="header"> 
                <NavLink className="btn" to="/home">
                    Home
                </NavLink>

                <NavLink className="btn" to="/activities">
                        Activities
                </NavLink> 

                <input value={Input} onChange={handleChange} placeholder="Search"></input>
                <button className={"btn_searcher"} onClick={handleSumit}> Search</button>
                    
            </nav>
        </>
    )
}