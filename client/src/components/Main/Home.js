import { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContry } from '../../actions';

export default function Home(){
    //estados
    const dispatch = useDispatch();
    const state = useSelector(store => store.countrySearch);
    //funcionales
    function sendNext(){
        if(state.Countries.length>0){
            state.offset=state.offset+10;
            dispatch(getContry(state.offset,state.order,state.continent));
        }
    }

    function sendBack(){
        if(state.offset>=10){
            state.offset=state.offset-10;
            dispatch(getContry(state.offset,state.order,state.continent));
        }
    }
    function setOrder(order,continent=state.continent){//set
        state.order=order;
        state.offset=0;
        if(continent.length>0){
            state.continent=continent;
            dispatch(getContry(state.offset,state.order,continent))
        }
        else{
            state.continent=continent;
        dispatch(getContry(state.offset,state.order,state.continent))
        }//console.log(state.order);
    }
  
    function setContinent(continent){
        setOrder(state.order,continent)
    }
    
    useEffect(() => {
        //console.log("se renderizo");
        dispatch(getContry(state.offset,state.order));
        state.Loaded=true;
    }, [dispatch])
    //renders
    function checkState(){
        if(state.Countries.length>0) return true;
        else return false;
    }
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
            </>
        )
    }
    //makerollback evita que se muestre la pantalla en blanco cuando llegan al limite
    function makeRollback(){
        state.offset=0;
        dispatch(getContry(state.offset,state.order,state.continent));
        showCountries()
    }
    //
    return(
        <div className="main">
            <h4>Countries</h4>
            <button onClick={()=>setOrder("AtoZ")}>AtoZ</button>
            <button onClick={()=>setOrder("ZtoA")}>ZtoA</button>
            <button onClick={()=>setOrder("pobAsc")}>pobAsc</button>
            <button onClick={()=>setOrder("pobDes")}>pobDes</button>
            <p>Continents</p>
            <button onClick={()=>setContinent("Africa")}>Africa</button>
            <button onClick={()=>setContinent("Americas")}>Americas</button>
            <button onClick={()=>setContinent("Asia")}>Asia</button>
            <button onClick={()=>setContinent("Europe")}>Europe</button>
            <button onClick={()=>setContinent("Oceania")}>Oceania</button>
            <button onClick={()=>setContinent("Polar")}>Polar</button>
            <button onClick={()=>setContinent("")}>All</button>
            {checkState()?showCountries():makeRollback()}
            <div className="cointainer_btn_pg">
                <button className="btn_back" onClick={sendBack}></button>
                <button className="btn_next" onClick={sendNext}></button>
            </div>

        </div>
    )
}
//state.Leaded es un estado flag que use para que el codigo esa mas legible