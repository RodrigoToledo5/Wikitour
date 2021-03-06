//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {Country} = require('./src/db');
const axios = require('axios');
let port= process.env.PORT||3001

// Syncing all the models at once.
conn.sync({ force: false }).then(async() => {
  const countries = await axios.get('https://restcountries.eu/rest/v2/all')
  countries.data.forEach(async (country) => {
    try {
      await Country.findOrCreate({
        where:{
          id: country.alpha3Code,
          name: country.name,
          flagImg: country.flag,
          continent: country.region,
          capital: country.capital,
          subregion: country.subregion,
          area:country.area,
          population: country.population,
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  });
  console.log("Loaded")
  //return res.status(200)
  server.listen(port, () => {
    console.log(`%s listening at ${port}`); // eslint-disable-line no-console
  });
});
