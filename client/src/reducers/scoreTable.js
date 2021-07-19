const inicialState={
    score:0,
    clickCounter:0,
    totalDamage:0,
    oponent:{},
    pick:{},
    bag:[],
    msj:"",
}

export default function scoreTable(state=inicialState,action){
    
    switch(action.type){
        case "LET_FIGTH":
             var msj=""
             
            if(state.oponent.stats){
                if(state.oponent.stats[5].base_stat<state.pick.stats[5].base_stat) msj="Soy mas rapido"
                else{ msj="El oponente es mas rapido"}

            }
            return{
                ...state,
                msj:msj
        };
        
        case "TAKE_POKEMON":
            //console.log(action.payload)
            if(state.bag.find(pokemon=>pokemon.id==action.payload.id)){
                
                return {...state}
            }
            else{
                return{
                    ...state,
                    bag:state.bag.concat(action.payload)
                };
            }
        case "PICK_POKEMON":
            if (state.bag.length>0){
                var selected=state.bag.filter((pokemon)=>{
                    if(pokemon.id===action.payload) return pokemon
            })
            selected=selected[0];
            }

            return{
                ...state,
                pick:selected
            }
        case "RANDOM_ENEMY":

            action.payload.stats.map(stat=>{
                stat.base_stat=Math.trunc(stat.base_stat*Math.random()+1)
            })
            
            return{
                ...state,
            oponent:action.payload,
        };
        case "HIT":
             
            // var damage=0;
            if(state.oponent.stats){
                if(state.oponent.stats[5].base_stat<state.pick.stats[5].base_stat){
                    state.msj="Golpeaste primero";
                    state.oponent.stats[0].base_stat=state.oponent.stats[0].base_stat-state.pick.stats[1].base_stat;
                    
                    
                    if(state.oponent.stats[0].base_stat<=0){ 
                        alert("Oponente derrotado")
                        return {
                            ...state,
                            oponent:{},
                            score:state.score+15
                        }
                    }
                    state.pick.stats[0].base_stat=state.pick.stats[0].base_stat-state.oponent.stats[1].base_stat;
                    if(state.pick.stats[0].base_stat<=0){ 
                        alert("Tu oponente te ha derrotado, tu pokemon ha muerto los siento :(")
                        return {
                            ...state,
                            pick:{},
                            bag:state.bag.filter(pokemon=>pokemon.id!=state.pick.id),
                            score:state.score-10
                    
                        }
                    }
                }
                else{
                    state.msj="El oponente ataco primero";
                    state.pick.stats[0].base_stat=state.pick.stats[0].base_stat-state.oponent.stats[1].base_stat;
                    if(state.pick.stats[0].base_stat<=0){
                        alert("Tu oponente te ha derrotado, tu pokemon ha muerto los siento :(")
                        return {
                            ...state,
                            pick:{},
                            bag:state.bag.filter(pokemon=>pokemon.id!=state.pick.id),
                            score:state.score-10,
                        }
                    }
                    state.oponent.stats[0].base_stat=state.oponent.stats[0].base_stat-state.pick.stats[1].base_stat;
                    if(state.oponent.stats[0].base_stat<=0){ 
                    alert("Oponente derrotado")
                        return {
                            ...state,
                            oponent:{},
                            score:state.score+15
                        }
                    }
                }


            }
            
            return{
                ...state,
            };
        
        default:
            return state;
    }
} 
