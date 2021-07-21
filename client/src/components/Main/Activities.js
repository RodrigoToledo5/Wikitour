import { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContry } from '../../actions';

export default function Activities(){
    const state = useSelector(store => store.countrySearch);
    return(
        <div className="main">
            <h1>No puede ser noooo</h1>
        </div>
    )
}
//state.Leaded es un estado flag que use para que el codigo esa mas legible