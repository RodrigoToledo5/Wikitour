const { Router ,json} = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countries = require("./Countries")
const activity = require('./Activity');
const graph=require('./Graph');
const { graphqlHTTP } = require('express-graphql');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
 //router.use('/Countries', countries);
 //router.use('/Activity', activity);


 const schema={};
router.use("/countries",countries);//aca puedo pasar midlewares
router.use("/activity",activity);

router.use('/graphql',graphqlHTTP({
    graphiql:true,
    schema,
  }));


module.exports = router;
