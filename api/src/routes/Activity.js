const express = require('express');
const router = express.Router();

const {Activity, Country} = require('../db');

router.post('/', async (req, res) => {
	let {id, name, difficulty, duration,  season } = req.body

   
    if(id&&name&&difficulty&&duration&&season){
        try{
        
        let activityCreated = await Activity.findOrCreate({
             where:{
                id,//creo que estos podrian ser varios id para setear las actividades relacionandolas
                name,
                difficulty,// entre 1 y 5 es un string importante
                duration,
                season //"winter","summer","autumn","spring"
             }
         });
      
        return res.status(200).send(activityCreated)
        }
        catch(error){ return res.status(500).send("error")}
    }
	// if (act.countries) {
	// 	console.log('estoy en add country');
	// 	let aux = act.countries.split(',');
	// 	aux.map(async (e) => {
	// 		let country = await Country.findByPk(e);
	// 		await country.addActivity([activityCreated]);
	// 	});
	// }
     res.status(404).send("Error 404");//checkear si no tienen q enviarse en json
});

module.exports = router;