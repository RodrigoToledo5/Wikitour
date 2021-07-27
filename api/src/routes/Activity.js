const express = require('express');
const router = express.Router();
const {Op} = require('sequelize');

const {Activity, Country} = require('../db');


router.post('/', async (req, res)=>{
  const {id,name, difficulty, duration, season}= req.body;
  //console.log(req.body);   
  if(name&&duration&&season&&difficulty&&id){
    try{
        const createdActivity = await Activity.create({
        name,
        difficulty,
        duration,
        season,
      });
      await createdActivity.addCountry(id);//id es el codigo del pais
    
      return res.status(200).send(JSON.stringify(createdActivity));
    }
    catch(error){
      return res.status(500).send(JSON.stringify(error));
    }
  }
  else{
    res.status(400).send(JSON.stringify({error:"Error null camps"}));
  }    
  });

router.get('/', async (req, res) => {
  const {name}=req.query;
  var {offset}=req.query;
  if(!offset) offset=0;
	let {sort}=req.query;
	let {continent}=req.query;

  const {update}=req.query;

  if(update){
    const activity = await Activity.findAll({
        order: [['createdAt', 'DESC']],
        limit: 1,
        include: {model: Country},
    });
    if (activity.length)return res.status(200).send(activity[0]);
    else res.status(400)
    
  }


  if (name) {
      const activity = await Activity.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
        include: {model: Country},
      });
      const countries=activity[0].countries&&activity[0].countries;
        switch (sort){
          case "AtoZ":
            let sortedAtoZ=countries.sort((a,b)=>{
              if (a.name<b.name){
                return -1;
              }
              if (a.name>b.name){
                return 1;
              }
              return 0;
            })
            if(continent) {
              const filteredAtoZ = sortedAtoZ.filter((country)=>country.continent.toLowerCase()===continent.toLowerCase())
              const AtoZ=filteredAtoZ.slice(offset,offset+10)
              return res.status(200).send(AtoZ);
            }
            else{
              const AtoZ=sortedAtoZ.slice(offset,offset+10)
              return res.status(200).send(AtoZ);
            }
          case "ZtoA":
            const sortedZtoA=countries.sort((a,b)=>{
              if (a.name>b.name){
                return -1;
              }
              if (a.name<b.name){
                return 1;
              }
              return 0;
            })
            if(continent) {
              const filteredZtoA = sortedZtoA.filter((country)=>country.continent.toLowerCase()===continent.toLowerCase())
              const ZtoA=filteredZtoA.slice(offset,offset+10)
              return res.status(200).send(ZtoA);
            }
            else{
              const ZtoA=sortedZtoA.slice(offset,offset+10)
              return res.status(200).send(ZtoA);
            }
          case "pobAsc":
            const sortedpobAsc=countries.sort((a,b)=>{
              if (a.population<b.population){
                return -1;
              }
              if (a.population>b.population){
                return 1;
              }
              return 0;
            })
            if(continent) {
              const filteredpobAsc = sortedpobAsc.filter((country)=>country.continent.toLowerCase()===continent.toLowerCase())
              const pobAsc=filteredpobAsc.slice(offset,offset+10)
              return res.status(200).send(pobAsc);
            }
            else{
              const pobAsc=sortedpobAsc.slice(offset,offset+10)
              return res.status(200).send(pobAsc);
            }
          case "pobDes":
            const sortedpobDes=countries.sort((a,b)=>{
              if (a.population>b.population){
                return -1;
              }
              if (a.population<b.population){
                return 1;
              }
              return 0;
            })
            if(continent) {
              const filteredpobDes = sortedpobDes.filter((country)=>country.continent.toLowerCase()===continent.toLowerCase())
              const pobDes=filteredpobDes.slice(offset,offset+10)
              return res.status(200).send(pobDes);
            }
            else{
              const pobDes=sortedpobDes.slice(offset,offset+10)
              return res.status(200).send(pobDes);
            }
          default:
            if(continent) {
              const filterednotorde = countries.filter((country)=>country.continent.toLowerCase()===continent.toLowerCase())
              const notorder=filterednotorde.slice(offset,offset+10)
              return res.status(200).send(notorder);
            }
            else{
              const notorder=countries.slice(offset,offset+10)
              return res.status(200).send(notorder);
            } 
        }
      //return res.status(200).send(aux);
	}
  
  else{
    const activity = await Activity.findAll({
			include: {model: Country,},
		});
		return res.status(200).send(activity);
  }
  
}
)

module.exports = router;