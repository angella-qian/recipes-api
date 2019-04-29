const sequelize = require('./../database/sequelize');
const Sequelize = require('sequelize');

module.exports = sequelize.define('category', {
	id: {
		field: 'category_id',
		type: Sequelize.INTEGER,
		primaryKey: true
	},
	category: {
		field: 'category',
		type: Sequelize.TEXT
	},
	
}, {
	timestamps: false
});