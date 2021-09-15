const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const router = express.Router();
const {Op} = require('sequelize');

const {Activity, Country} = require('../db');
// import schema from '../grapthql/schema'
// router.use('/graphql',graphqlHTTP({
//   graphiql:true,
//   schema:schema,
// }));


//  router.get('/', async (req, res,next) => {
  
//    res.status(200).send("hola mundo")
//    next.apply()
//  }
//  )

module.exports = router;