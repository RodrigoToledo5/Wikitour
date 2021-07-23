const {DataTypes} = require('sequelize');
//Exportamos por modulo la funcion que define el modelo de las actividades
module.exports = (sequelize) => {
    //definimos el modelo.
    sequelize.define('activity', {
        name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		difficulty: {
			type: DataTypes.ENUM({
                values:["1","2","3","4","5"]
            }),
		},//especificamos que solo recibimos del 1 al 5 pero hay que tener en cuenta que los valores son strings
		duration: {
			type: DataTypes.STRING,
		},
		season: {
			type: DataTypes.ENUM({
                values:["winter","summer","autumn","spring"]
            }),
		},// especificamos las estaciones
	});
};