import { useEffect}  from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {lastActivity} from '../../actions';

export default function Aside(){
    const state = useSelector(store => store.postActivity);//PostActivity mayuscula es el reducer con minuscula es el action
    const stateID = useSelector(store => store.countrySearch)
    const dispatch = useDispatch()
    
    function area(num){
        if(num>1000000){
            return Math.round(num/1000000)+"millions km²"
        }
        else if (num>100000){
            return Math.round(num/1000)+"km²"
        }
        else{
            if (num)return num + "km²"
        }
    }
    
    useEffect(() => {
        dispatch(lastActivity())
    }, [dispatch])

    function checkactivities(){//funcion para checkear que tenga actividades
        if(stateID.ID.activities instanceof Array) {
            if(stateID.ID.activities.length) return true;
        }
        else return false;
    }

    function showDetails(){
        return(
            <div className="aside__card">
                {stateID.ID.name&&<h3>Details</h3>}

                {stateID.ID.name&&<div> Name :{stateID.ID.name}</div>}

                {stateID.ID.id&&<div> ID :{stateID.ID.id}</div>}

                {stateID.ID.continent&&<div> Continent :{stateID.ID.continent}</div>}

                {stateID.ID.capital&&<div> Capital :{stateID.ID.capital}</div>}
                
                {checkactivities()&&<h3>Activities</h3>}
                {stateID.ID.activities&&stateID.ID.activities.map((activity,i)=>{
                    return (<span key={i}>  {activity.name} </span>)
                })}
                {stateID.ID.area&&<h4>Area</h4>}
                <div>{area(stateID.ID.area)}</div>
                

            </div>

        )
    }

    function showLastactivites(){
        return(
        <>
            <div className="aside__card">
                <h2>Last Activities created</h2>
                <h3> 
                {stateID.LastActivity&&stateID.LastActivity.name}
                </h3>
                <div>
                    Difficulty: {stateID.LastActivity&&stateID.LastActivity.difficulty}
                </div>
                <div>
                    Duration: {stateID.LastActivity&&stateID.LastActivity.duration}
                </div>
                <div>
                    Season: {stateID.LastActivity&&stateID.LastActivity.season}
                </div>
                <div>
                    Updated:{stateID.LastActivity&&stateID.LastActivity.updatedAt}
                </div>
                <div>
                    Date of creation:{stateID.LastActivity&&stateID.LastActivity.createdAt}
                </div>
            </div>

            
        </>
        )
    }
    
    function showError(){
        return(
            <>
                <div className="aside__card">
                    <h2>Activity has not created</h2>
                    <h3> 
                        Error, set inputs correctly
                    </h3>
                </div>   
            </>
        )
    }
    function checkState(){
        if(!state.activity.error) return true;
        else return false; 
    }

    return(
        <>
            <div className="aside">
                {checkState() ? showLastactivites():showError()}
                {showDetails()}
            </div>
        </>
    )

}