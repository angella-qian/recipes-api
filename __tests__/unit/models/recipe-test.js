const { expect } = require('chai');
const Recipe = require('./../../../models/recipe');

describe('recipe', () => {
	describe('quantity01', () => {
		it('should be a decimal', async () => {
			try {
				let recipe = new Recipe({ quantity01: 'a' });
				await recipe.validate();
			} catch (error) {
				expect(error.errors[0].message).to.equal('Quantity01 must be a decimal');
			}
		});
	});

	describe('quantity02', () => {
		it('should be a decimal', async () => {
			try {
				let recipe = new Recipe({ quantity02: 'a' });
				await recipe.validate();
			} catch (error) {
				expect(error.errors[0].message).to.equal('Quantity02 must be a decimal');
			}
		});
	});

	describe('quantity03', () => {
		it('should be a decimal', async () => {
			try {
				let recipe = new Recipe({ quantity03: 'a' });
				await recipe.validate();
			} catch (error) {
				expect(error.errors[0].message).to.equal('Quantity03 must be a decimal');
			}
		});
	});

	describe('quantity04', () => {
		it('should be a decimal', async () => {
			try {
				let recipe = new Recipe({ quantity04: 'a' });
				await recipe.validate();
			} catch (error) {
				expect(error.errors[0].message).to.equal('Quantity04 must be a decimal');
			}
		});
	});

	describe('quantity05', () => {
		it('should be a decimal', async () => {
			try {
				let recipe = new Recipe({ quantity05: 'a' });
				await recipe.validate();
			} catch (error) {
				expect(error.errors[0].message).to.equal('Quantity05 must be a decimal');
			}
		});
	});
});
