import  {useSelector} from 'react-redux';


export default function Details(){
    const state = useSelector(store => store.countrySearch);

    function showdetails(){
            return (
                <>
                <h4>ID: {state.Detail[0].id}</h4>
                <h4>Name: {state.Detail[0].name}</h4>
                <img className="img" src={state.Detail[0].flagImg} alt="Flag"></img>
                <p>Continent: {state.Detail[0].continent}</p>
                <p>Capital: {state.Detail[0].capital}</p>
                <p>Subregion: {state.Detail[0].subregion}</p>
                <p>Area: {state.Detail[0].area}</p>
                <p>Pupulation: {state.Detail[0].area}</p>
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
           {state.Detail.length? showdetails():shownotfinded()}
        </div>
    )
}
//state.Leaded es un estado flag que use para que el codigo esa mas legible