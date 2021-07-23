const express = require('express');
const router = express.Router();
const {Op} = require('sequelize');

const {Activity, Country} = require('../db');


router.post('/', async (req, res)=>{
    const {id,name, difficulty, duration, season}= req.body;
    //console.log(req.body);
     try{
        const createdActivity = await Activity.create({
          name,
          difficulty,
          duration,
          season,
        });
        
        await createdActivity.addCountry(id);
        console.log(JSON.stringify(createdActivity));
        return res.status(200).send(JSON.stringify(createdActivity));
        }
    catch(err){
        return res.status(400).send(JSON.stringify(err));
     }
     
  
    });

// router.post('/', async (req, res) => {//importante countries es un arreglo
// 	let {name, difficulty, duration, season,countries } = req.body
//     //console.log(name, difficulty, duration, season)
//     if(name&&difficulty&&duration&&season){
//         try{
//             //console.log(req.body)
//         const activityCreated = await Activity.create({
             
            
//                 name,
//                 difficulty,// entre 1 y 5 es un string importante
//                 duration,
//                 season //"winter","summer","autumn","spring"

             
//         });
//         await activityCreated.addCountry(countries)
//         return res.status(200).send(activityCreated)
//         }
//         catch(error){ 
//             console.log(error.message)
//             return res.status(500).send("error")}
//     }
// 	// if (act.countries) {
// 	// 	console.log('estoy en add country');
// 	// 	let aux = act.countries.split(',');
// 	// 	aux.map(async (e) => {
// 	// 		let country = await Country.findByPk(e);
// 	// 		await country.addActivity([activityCreated]);
// 	// 	});
// 	// }
//      res.status(404).send("Error 404");//checkear si no tienen q enviarse en json
// });

module.exports = router;