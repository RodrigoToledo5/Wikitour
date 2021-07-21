import {useDispatch,useSelector} from 'react-redux';
import { useEffect,useState } from 'react';
import { NavLink,useHistory } from 'react-router-dom';
import { searchContry } from '../../actions';

export default function Nav(){
    const dispatch = useDispatch();
    const state = useSelector(store => store.countrySearch);
    const [Input, setInput] = useState("")
    let history = useHistory();
    function handleChange(eve) {
        setInput(eve.target.value);
    }
    function handleSumit(){
        dispatch(searchContry(Input));
        history.push('/details')
        setInput("");
    }


    return(
        <>
        <nav className="header"> 
            <NavLink className="btn" to="/home">
                        Home
            </NavLink>

            <NavLink className="btn" to="/details">
                        Details
            </NavLink>

            <NavLink className="btn" to="/activities">
                        Activities
            </NavLink>

            <NavLink className="btn" to="/home">
                        Contact
            </NavLink>   

            <input value={Input} onChange={handleChange} placeholder="Search"></input>
            <button onClick={()=>handleSumit(false)}> Search</button>
            
        </nav>
        </>
    )
}