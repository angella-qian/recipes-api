const sequelize = require('./../database/sequelize');
const Sequelize = require('sequelize');

module.exports = sequelize.define('time', {
	id: {
		field: 'time_id',
		type: Sequelize.INTEGER,
		primaryKey: true
	},
	total_time: {
		field: 'total_time',
		type: Sequelize.INTEGER
	},
	
}, {
	timestamps: false
});