const {Router} = require('express');
const {Op} = require('sequelize');
const axios = require('axios');
const router = Router();
const {Country, Activity} = require('../db');
var flag=false;

router.get('/', async (req, res) => {//arreglar esto
	
	//const countries = await axios.get('https://restcountries.eu/rest/v2/all');//hacer otra ruta o una flag
	
    let {name} = req.query;
	let {offset}=req.query;
	let {sort}=req.query;
	let {continent}=req.query;
	
	if(continent&&offset){
		switch (sort) {
			case "AtoZ":
				return res.json(await Country.findAll({
					order: [['name', 'ASC']],
					include: {model: Activity,},
					where: {
						continent: {
							[Op.iLike]: `%${continent}%`,
						},
					},
					limit: 10,
					offset
				}))
			case "ZtoA":
				return res.json(await Country.findAll({
					order: [['name', 'DESC']],
					include: { model: Activity},
					where: {
						continent: {
							[Op.iLike]: `%${continent}%`,
						},
					},
					limit: 10,
					offset
				}))
			case "pobAsc":
				return res.json(await Country.findAll({
					order: [['population', 'ASC']],
					include: {model: Activity},
					where: {
						continent: {
							[Op.iLike]: `%${continent}%`,
						},
					},
					limit: 10,
					offset
				}))
			case "pobDes":
				return res.json(await Country.findAll({
					order: [['population', 'DESC']],
					include: {model: Activity},
					where: {
						continent: {
							[Op.iLike]: `%${continent}%`,
						},
					},
					limit: 10,
					offset
			}))
			default:
				const bd=await Country.findAll({
				where: {
					continent: {
						[Op.iLike]: `%${continent}%`,
					},
				},
				limit:10,
				offset
				});
				return res.status(200).send(bd);

		}
	}

	if (name) {
		//name =await axios.get(`https://translate.google.com/?sl=auto&tl=en&text=${name}&op=translate`)

		//console.log(Object.keys(name))
		//console.log(name.data)
		//console.log(name.data.search("Hi how are things"))
		
		const country = await Country.findAll({
			where: {
				name: {
					[Op.iLike]: `%${name}%`,
				},
			},
		});
        //console.log(Country)
		return res.status(200).send(country);
	}
	if(offset){
		switch (sort) {
                case "AtoZ":
                    return res.json(await Country.findAll({
                        order: [['name', 'ASC']],
                        include: {model: Activity,},
                        limit: 10,
                        offset
                    }))
                case "ZtoA":
                    return res.json(await Country.findAll({
                        order: [['name', 'DESC']],
                        include: { model: Activity},
                        limit: 10,
                        offset
                    }))
                case "pobAsc":
                    return res.json(await Country.findAll({
                        order: [['population', 'ASC']],
                        include: {model: Activity},
                        limit: 10,
                        offset
                    }))
                case "pobDes":
                    return res.json(await Country.findAll({
                        order: [['population', 'DESC']],
                        include: {model: Activity},
                        limit: 10,
                        offset
                }))
				default:
					return res.status(200).json(await Country.findAll({
                        include: {model: Activity},
                        limit: 10,
                        offset}))
					// const bd=await Country.findAll({
					// limit:10,
					// offset
					// });
					// return res.status(200).send(bd);

		}
	}
	else{
		return res.status(200).json(await Country.findAll({
			// include: {model: Activity},
			limit: 10,
			offset}))
	}
	// else{
	// 	console.log("paso")
	// 	countries.data.forEach(async (country) => {
	// 		try {
	// 			console.log(country.name)
	// 			await Country.findOrCreate({
	// 				where:{
	// 					id: country.alpha3Code,
	// 					name: country.name,
	// 					flagImg: country.flag,
	// 					continent: country.region,
	// 					capital: country.capital,
	// 					subregion: country.subregion,
	// 					area:country.area,
	// 					population: country.population,
	// 				}
	// 			});
	// 			res.status(200)
			
	// 		} catch (error) {
	// 			console.log(error);
	// 		}
	// 	});
	// 	return res.status(200)
	//}
	
	// if (aux !== 'population') {
	// 	let countries = await Country.findAll({
	// 		include: {model: Activity},
	// 		order: [['name', order]],
	// 	});
	// 	return res.send(countries);
	// } else {
	// 	let countries = await Country.findAll({
	// 		include: {model: Activity},
	// 		order: [['population', order]],
	// 	});
	// 	return res.send(countries);
	// }

 	
});

router.get('/:id', async (req, res) => {
	const id = req.params.id;
    //console.log(id)
	let country = await Country.findByPk(id, {include: Activity});
	res.send(JSON.stringify(country));
});

// router.get('/', async (req, res) => {
// 	const name = req.query.name;
// 	const order = req.query.order;
// 	const aux = req.query.aux;
// 	if (name) {
// 		const country = await Country.findAll({
// 			where: {
// 				name: {
// 					[Op.iLike]: `%${name}%`,
// 				},
// 			},
// 		});
// 		return res.send(country);
// 	}
// 	if (aux !== 'population') {
// 		let countries = await Country.findAll({
// 			include: {model: Activity},
// 			order: [['name', order]],
// 		});
// 		return res.send(countries);
// 	} else {
// 		let countries = await Country.findAll({
// 			include: {model: Activity},
// 			order: [['population', order]],
// 		});
// 		return res.send(countries);
// 	}
// });



module.exports = router;