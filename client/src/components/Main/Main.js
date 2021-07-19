import { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContry } from '../../actions';

export default function Main(){
    const dispatch = useDispatch();
    const state = useSelector(store => store.countrySearch);
    
    function renderNext(){
        if(state.offset<240){
            state.offset=state.offset+10;
            dispatch(getContry(state.offset,state.order));
        }
    }

    function renderBack(){
        if(state.offset>=10){
            state.offset=state.offset-10;
            dispatch(getContry(state.offset,state.order));
        }
    }
    function setOrder(order){
        state.order=order;
        state.offset=0;
        dispatch(getContry(state.offset,state.order))
        //console.log(state.order);
    }
    useEffect(() => {
        dispatch(getContry(state.offset,state.order))
        state.Loaded=true;
    }, [dispatch])
    
    function showCountries(){
        return (
            <>
                <div className="flex-cointainer__card">
                    {state.Countries&&state.Countries.map((country,i)=>{
                        return(
                                
                                    <div key={i} className="card">
                                        <div>Name:{country.name}</div>
                                        <img className="img" src={country.flagImg} alt="Flag"></img> 
                                        <div>Continent{country.continent}</div>
                                    </div>
                            
                            )
                    })}
                </div>
                <div className="cointainer_btn_pg">
                    <button className="btn_back" onClick={renderBack}></button>
                    <button className="btn_next" onClick={renderNext}></button>
                </div>
            </>
        )
    }
    return(
        <div className="main">
            <h4>Countries</h4>
            <button onClick={()=>setOrder("AtoZ")}>AtoZ</button>
            <button onClick={()=>setOrder("ZtoA")}>ZtoA</button>
            <button onClick={()=>setOrder("pobAsc")}>pobAsc</button>
            <button onClick={()=>setOrder("pobDes")}>pobDes</button>
            <p>Continents</p>
            <button onClick={()=>setOrder("pobAsc")}>Africa</button>
            <button onClick={()=>setOrder("pobDes")}>Americas</button>
            <button onClick={()=>setOrder("pobDes")}>Asia</button>
            <button onClick={()=>setOrder("pobDes")}>Europe</button>
            <button onClick={()=>setOrder("pobDes")}>Polar</button>
            {state.Loaded&&showCountries()}
        </div>
    )
}