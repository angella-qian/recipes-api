let express = require('express');
let knex = require('knex');
let app = express();

// Return array of recipes
app.get('/api/recipes', function(request, response) {

	let connection = knex({
		client: 'sqlite3',
		connection: {
			filename: 'database.sqlite'
		}
	});

	connection.select().from('recipes').then( (recipes) => {
		response.json(recipes);
	});

});

// Return a single recipe (placeholder syntax :id in express)
app.get('/api/recipes/:id', function(request, response) {

	// Request has access to the url element 'id'
	let id = request.params.id;
	console.log(id);

	let connection = knex({
		client: 'sqlite3',
		connection: {
			filename: 'database.sqlite'
		}
	});

	connection
		.select()
		.from('recipes')
		.where('recipe_id', id)
		.first()
		.then( (recipe) => {
			if (recipe) {
				response.json(recipe);
			} else {
				response.status(404).json({
					error: `Recipe ${id} not found`
				});
			}
			
		});
});

// Return array of artists that can be filtered
// app.get('/api/artists', function(request, response) {

// 	// Request has access to the query string 'filter'
// 	let filter = request.query.filter;	
// 	console.log(filter);

// 	let connection = knex({
// 		client: 'sqlite3',
// 		connection: {
// 			filename: 'database.sqlite'
// 		}
// 	});

// 	if (filter) {

// 		connection
// 		.select()
// 		.from('artists')
// 		.where('Name', 'like', `%${filter}%`)
// 		.then( (artists) => {
// 			if (artists) {
// 				let arr = artists.map ( (artist) => {
// 					let obj = {};
// 					obj.id = artist.ArtistId;
// 					obj.name = artist.Name;
// 					return obj;
// 				});
// 				response.json(arr);
// 			} else {
// 				response.status(404).json({
// 					error: `Artist name ${filter} not found`
// 				});
// 			}
// 		});

// 	} else {

// 		connection.select().from('artists').then( (artists) => {
// 			let arr = artists.map( (artist) => {
// 				let obj = {};
// 				obj.id = artist.ArtistId;
// 				obj.name = artist.Name;
// 				return obj;
// 			});
// 			response.json(arr);
// 		});

// 	}

// });

app.listen(process.env.PORT || 8000);