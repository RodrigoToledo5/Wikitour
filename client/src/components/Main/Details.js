import  {useSelector} from 'react-redux';


export default function Details(){
    const state = useSelector(store => store.countrySearch);

    function check(){
        if (state.Detail.length===0) return false
        if (state.Detail.length>9) return false;
        else return true
    }

    function showActivities(){
        
        
        return(
            <>
            {check() ? state.Detail[0].activities.map(activity=>{
                return (
                    <>
                        <div className="detail_card">
                            <div>Activity ID: #{activity.id}</div>
                            <div>Activity: {activity.name}</div>
                            <div>Difficulty: {activity.difficulty}</div>
                            <div>Duration:{activity.duration}</div>
                            <div>Season {activity.season}</div>
                            <div>Last Updated: {activity.createdAt}</div>
                            <div>Date of creation: {activity.updatedAt}</div>
                        </div>
                    </>
                )
            }):null}
            </>
        )
    }

    function showdetails(){
            return (
                <>
                    <div className="main__detail">
                        <h4>ID: {state.Detail[0].id}</h4>
                        <h4>Name: {state.Detail[0].name}</h4>
                        <img className="img" src={state.Detail[0].flagImg} alt="Flag"></img>
                        <p>Continent: {state.Detail[0].continent}</p>
                        <p>Capital: {state.Detail[0].capital}</p>
                        <p>Subregion: {state.Detail[0].subregion}</p>
                        <p>Area: {state.Detail[0].area}</p>
                        <p>Pupulation: {state.Detail[0].area}</p>
                        {state.Detail?showActivities():null}
                    </div>
                </>

            )
    }

    function shownotfinded(){
        return(
            <h2>Country not finded</h2>
        )
    }
    return(
        <div className="main">
           {check()? showdetails():shownotfinded()}
        </div>
    )
}
//state.Leaded es un estado flag que use para que el codigo esa mas legible