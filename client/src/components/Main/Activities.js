import {useState}  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkCountry,postActivity } from '../../actions';

export default function Activities(){
    const state = useSelector(store => store.countrySearch);
    
    const dispatch = useDispatch()

    const [InputActivity, setInputactivity] = useState("")
    const [Input, setInput] = useState("")//capturamos el input de country para hacer el proceso de checkin en la base de datos
    const [Inputduration, setInputduration] = useState("")//capturamos el input de la duracion
    const [activity, setActivity] = useState({id:[],name:null,difficulty:null,duration:null,season:null,countries:[]})// todos los estados que se van a enviar con el form
    
    function setNullall(){
      setActivity(
        {id:[],name:null,difficulty:null,duration:null,season:null,countries:[]}
      )
    }
    function handleInputActivity(e){
      setInputactivity(e.target.value);
    }
    
    function handleActivity(e){
      e.preventDefault();

      setActivity({
        ...activity,
        name:e.target.value
        });
      setInputactivity("")
    }

    function handleChange(eve) {//las funciones trabajan en conjunto, la primera captura el input checkcountry checkea que ese pais exista en la base de datos
      setInput(eve.target.value);
    }

    function check_Country(e){
      e.preventDefault();
      dispatch(checkCountry(Input));
      //console.log(state.check)
      if(Input){
        if(!activity.countries.includes(Input.toLowerCase())){//checkeamos que no haya el mismo pais ya concatenado antes enviar
            setActivity({
              ...activity,
              countries:activity.countries.concat(Input.toLowerCase()),
              });
        }
      }
      setInput("")
    }
    /////////////////////////////////////////
    
    function handleChangeDuration(eve) {// aca tomamos el input del campo y despues lo guardamos con el boton +
      setInputduration(eve.target.value);//
    }

    function handleDuration(e){// importante seteamos el input desde el mismo event target value
      e.preventDefault();
      setActivity({
        ...activity,
        duration:e.target.value
        });
      setInputduration("");
    }

    function handleDificulty(e){//seteamos las dificultades apartir de los botones
      e.preventDefault();
      setActivity({
        ...activity,
        difficulty:e.target.value
        });
    }

    function handleSeason(e){//steamos las seasons apartir de los botones tambien
      e.preventDefault();
      setActivity({
        ...activity,
        season:e.target.value
        });
    }

    function handleSubmit(e){
      //e.preventDefault();
      const send={...activity,id:activity.id.concat(state.check)};//seteamos todos los id de acuerdo a lo que nos respondio el back
      dispatch(postActivity(send))
      setNullall()

    }
   

    function renderActivitiesbeforpost(){//funcion que muestra la actividad antes de enviar seria como un preview

      return(
         <>
          <div className="creating_activity">
            <h3>Preview:</h3>
            <div>Countries added:</div>
            <span>{activity.countries.map((country,i)=><span key={i}>{country[0]&&country[0].toUpperCase()+country.substring(1,country.length)} </span>)}
            </span>
            <div>
              Activity name: {activity.name}
            </div>
            <div>
              Difficulty: {activity.difficulty}
            </div>
            <div>
              Duration: {activity.duration}
            </div>
            <div>
              Season: {activity.season&&activity.season[0]&&activity.season[0].toUpperCase()+activity.season.substring(1,activity.season.length)}
            </div>
          </div>
         </>
      )
    }
    return(
      <>
        <div className="main">
          <div >
            <div className="main_activities">
              <form className="form" onSubmit={handleSubmit}>
              <h2>Create an activity and set countries for each one</h2>
                <div className="form_section">
                    <input value={InputActivity} onChange={(even)=>handleInputActivity(even)} type="text" placeholder="Activity"autoComplete="off"/>
                    <button className={"btn_plus"} value={InputActivity} onClick={(even)=>handleActivity(even)}>+</button>
                </div>
                
                <div className="form_section">
                  <div>Difficulty</div>
                  <button className="form_btn1" value={"1"} onClick={(even)=>handleDificulty(even)}></button>
                  <button className="form_btn2" value={"2"} onClick={(even)=>handleDificulty(even)}></button>
                  <button className="form_btn3" value={"3"} onClick={(even)=>handleDificulty(even)}></button>
                  <button className="form_btn4" value={"4"} onClick={(even)=>handleDificulty(even)}></button>
                  <button className="form_btn5" value={"5"} onClick={(even)=>handleDificulty(even)}></button>
                </div>

                <div className="form_section">
                    <input value={Inputduration} onChange={(even)=>handleChangeDuration(even)} type="text" className="form__input" placeholder="Duration"/>
                    <button className={"btn_plus"} value={Inputduration} onClick={(even)=>handleDuration(even)}>+</button>
                </div>

                <div className="form_section">
                  <div>Season</div>
                  <button className={"btn_set"} value={"winter"} onClick={(even)=>handleSeason(even)}>Winter</button>
                  <button className={"btn_set"} value={"summer"} onClick={(even)=>handleSeason(even)}>Summer</button>
                  <button className={"btn_set"} value={"autumn"} onClick={(even)=>handleSeason(even)}>Autumn</button>
                  <button className={"btn_set"} value={"spring"} onClick={(even)=>handleSeason(even)}>Spring</button>
                </div>

                <div className="form_section">
                  <input value={Input} onChange={handleChange} type="text" placeholder="Add countries"/>
                  <button className={"btn_plus"} onClick={check_Country}>+</button>
                  {renderActivitiesbeforpost()}
                </div>

                <div>
                  <input className="btn_send" type="submit"/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    )
}
//state.Leaded es un estado flag que use para que el codigo esa mas legible