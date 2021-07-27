const {Router} = require('express');
const {Op} = require('sequelize');
const axios = require('axios');
const router = Router();
const {Country, Activity} = require('../db');
var flag=false;

router.get('/', async (req, res) => {//arreglar esto
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

	if (name&&name.length>0) {
		const country = await Country.findAll({
			where: {
				name: {
					[Op.iLike]: `%${name}%`,
				},
			},
			include: {model: Activity,},
			
		});
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
		}
	}
	else{
		return res.status(200).json(await Country.findAll({
			limit: 10,
			}))
	}
});

router.get('/:id', async (req, res) => {
	
	const id = req.params.id.toUpperCase();
	try{
		let country = await Country.findByPk(id, {include: Activity});
		res.send(JSON.stringify(country));
	}
	catch(error){
		res.status(404).send(error)
	}
});

module.exports = router;