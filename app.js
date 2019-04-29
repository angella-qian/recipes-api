const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const Recipe = require('./models/recipe')
const Category = require('./models/category')
const Time = require('./models/time')
const app = express();

app.use(bodyParser.json());


Category.hasMany(Recipe, {
	foreignKey: 'category_id'
});

Time.hasMany(Recipe, {
	foreignKey: 'time_id'
});

Recipe.belongsTo(Category, {
	foreignKey: 'category_id'
});

Recipe.belongsTo(Time, {
	foreignKey: 'time_id'
});



// GET all recipes
app.get('/api/recipes', function(request, response) {
	Recipe.findAll().then((recipes) => {
		response.json(recipes);
	});
});

// GET single recipe
app.get('/api/recipes/:id', function(request, response) {
	let { id } = request.params;

	Recipe.findByPk(id, {
		include: [Category, Time]
	}).then((recipe) => {
		if(recipe) {
			response.json(recipe);
		} else{
			response.status(404).send();
		}
	});
});

// POST to create recipe
app.post('/api/recipes', function(request, response) {
	Recipe.create({
		title: request.body.title,
		directions: request.body.directions,

		quantity01: request.body.quantity01,
		unit01: request.body.unit01,
		ingredient01: request.body.ingredient01,

		quantity02: request.body.quantity02,
		unit02: request.body.unit02,
		ingredient02: request.body.ingredient02,

		quantity03: request.body.quantity03,
		unit03: request.body.unit03,
		ingredient03: request.body.ingredient03,

		quantity04: request.body.quantity04,
		unit04: request.body.unit04,
		ingredient04: request.body.ingredient04,

		quantity05: request.body.quantity05,
		unit05: request.body.unit05,
		ingredient05: request.body.ingredient05,

		quantity06: request.body.quantity06,
		unit06: request.body.unit06,
		ingredient06: request.body.ingredient06,

		quantity07: request.body.quantity07,
		unit07: request.body.unit07,
		ingredient07: request.body.ingredient07,

		quantity08: request.body.quantity08,
		unit08: request.body.unit08,
		ingredient08: request.body.ingredient08,

		quantity09: request.body.quantity09,
		unit09: request.body.unit09,
		ingredient09: request.body.ingredient09,

		quantity10: request.body.quantity10,
		unit10: request.body.unit10,
		ingredient10: request.body.ingredient10,

		quantity11: request.body.quantity11,
		unit11: request.body.unit11,
		ingredient11: request.body.ingredient11,

		quantity12: request.body.quantity12,
		unit12: request.body.unit12,
		ingredient12: request.body.ingredient12,

		quantity13: request.body.quantity13,
		unit13: request.body.unit13,
		ingredient13: request.body.ingredient13,

		quantity14: request.body.quantity14,
		unit14: request.body.unit14,
		ingredient14: request.body.ingredient14,

		quantity15: request.body.quantity15,
		unit15: request.body.unit15,
		ingredient15: request.body.ingredient15,

		quantity16: request.body.quantity16,
		unit16: request.body.unit16,
		ingredient16: request.body.ingredient16,

		quantity17: request.body.quantity17,
		unit17: request.body.unit17,
		ingredient17: request.body.ingredient17,

		quantity18: request.body.quantity18,
		unit18: request.body.unit18,
		ingredient18: request.body.ingredient18,

		quantity19: request.body.quantity19,
		unit19: request.body.unit19,
		ingredient19: request.body.ingredient19
	}).then( (recipe) => {
		response.json(recipe);
	}, (validation) => {
		response.status(422).json({
			errors: validation.errors.map((error) => {
				return {
					attribute: error.path,
					message: error.message
				};
			})
		});
	});
});


// PATCH to edit recipe
app.patch('/api/recipes/:id', function(request, response) {
	let { id } = request.params;
	let updates = request.body;

	Recipe.findByPk(id, {
		include: [Category, Time]
		}).then((recipe) => {
			console.log(recipe);
			if (recipe) {
				return recipe.update(updates);
			} else {
				return Promise.reject();
			}
		}).then((updatedRecipe) => {
			// If the update passes validation, respond with a 200 status code and 
			// the updated track in the response body
			response.json(updatedRecipe);
			response.status(200).send();
		}, (validation) => {
			// If the track isn’t found, return an empty response with a 404 status code.
			response.status(404).json({
				errors: validation.errors.map((error) => {
					return {
						attribute: error.path,
						message: error.message
					};
				})
			});
		});
});

// DELETE single recipe
app.delete('/api/recipes/:id', function(request, response) {
	let { id } = request.params;

	Recipe
		.findByPk(id)
		.then( (recipe) => {
			if (recipe) {
				return recipe.destroy();
			} else {
				return Promise.reject();
				
			}
		}).then( () => {
			response.status(204).send();
		}, () => {
			response.status(404).send();
		});
});


// GET single category
app.get('/api/categories/:id', function(request, response) {
	let { id } = request.params;

	Category.findByPk(id).then((category) => {
		if(category) {
			response.json(category);
		} else{
			response.status(404).send();
		}
	});
});

// GET single total time
app.get('/api/times/:id', function(request, response) {
	let { id } = request.params;

	Time.findByPk(id).then((time) => {
		if(time) {
			response.json(time);
		} else{
			response.status(404).send();
		}
	});
});

app.listen(process.env.PORT || 8000);