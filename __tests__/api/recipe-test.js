const frisby = require('frisby');

const { Joi } = frisby;

// GET all recipes API tests
it('should return a status of 200 when the recipes are found', () => {
	return frisby
	.get('https://aqian-recipes-api.herokuapp.com/api/recipes/5')
	.expect('status', 200);
});


// GET single recipe API tests
it('should return a status of 200 when the recipe is found', () => {
	return frisby
	.get('https://aqian-recipes-api.herokuapp.com/api/recipes/5')
	.expect('status', 200);
});

it('should return a status of 404 when the recipe does not exist', () => {
	return frisby
	.get('https://aqian-recipes-api.herokuapp.com/api/recipes/-1')
	.expect('status', 404);
});


// POST to create recipe API tests
it('should create a recipe', () => {
	return frisby
	.post('https://aqian-recipes-api.herokuapp.com/api/recipes', {
		title: 'Adding a test recipe..'
	})
	.expect('status', 200)
	.expect('json', 'title', 'Adding a test recipe..')
	.expect('jsonTypes', 'id', Joi.number().required());
});

it('should return a status of 422 when the recipe fails to create', () => {
	return frisby
	.patch('https://aqian-recipes-api.herokuapp.com/api/recipes/5', {
		title: '',
		directions: '',
		quantity01: 'a'
	})
	.expect('status', 422)
	.expect('json', 'errors[0].message', 'Title is required')
	.expect('json', 'errors[1].message', 'Directions is required')
	.expect('json', 'errors[2].message', 'Quantity01 must be a decimal');
});



// PATCH to edit recipe API tests
it('should return a status of 200 when the recipe is updated successfully', () => {
	return frisby
	.patch('https://aqian-recipes-api.herokuapp.com/api/recipes/5', {
		title: 'Editted recipe name to this..',
		directions: 'Testing testing testing'
	})
	.expect('status', 200);
});

it('should return a status of 422 when the recipe fails to update', () => {
	return frisby
	.patch('https://aqian-recipes-api.herokuapp.com/api/recipes/5', {
		title: '',
		directions: '',
		quantity01: 'a'
	})
	.expect('status', 422)
	.expect('json', 'errors[0].message', 'Title is required')
	.expect('json', 'errors[1].message', 'Directions is required')
	.expect('json', 'errors[2].message', 'Quantity01 must be a decimal');
});


// DELETE recipe API tests
it('should return a 204 when deleting a recipe that exists', () => {
	return frisby
	.del('https://aqian-recipes-api.herokuapp.com/api/recipes/235')
	.expect('status', 204);
});

it('should return a 404 when deleting a recipe that does not exist', () => {
	return frisby
	.del('https://aqian-recipes-api.herokuapp.com/api/recipes/-1')
	.expect('status', 404);
});



