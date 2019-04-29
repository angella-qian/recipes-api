const sequelize = require('./../database/sequelize');
const Sequelize = require('sequelize');

module.exports = sequelize.define('recipe', {
	id: {
		field: 'recipe_id',
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	title: {
		field: 'Title',
		type: Sequelize.STRING,
		validate: {
			notEmpty: {
				args: true,
				msg: 'Title is required'
			}
		}
	},
	directions: {
		field: 'Directions',
		type: Sequelize.TEXT,
		validate: {
			notEmpty: {
				args: true,
				msg: 'Directions is required'
			}
		}
	},
	quantity01: {
		field: 'Quantity01',
		type: Sequelize.DECIMAL(5,2),
		validate: {
			isDecimal: {
				args: true,
				msg: 'Quantity01 must be a decimal'
			}
		}
	},
	unit01: {
		field: 'Unit01',
		type: Sequelize.TEXT
	},
	ingredient01: {
		field: 'Ingredient01',
		type: Sequelize.TEXT
	},

	quantity02: {
		field: 'Quantity02',
		type: Sequelize.DECIMAL(5,2),
		validate: {
			isDecimal: {
				args: true,
				msg: 'Quantity02 must be a decimal'
			}
		}
	},
	unit02: {
		field: 'Unit02',
		type: Sequelize.TEXT
	},
	ingredient02: {
		field: 'Ingredient02',
		type: Sequelize.TEXT
	},

	quantity03: {
		field: 'Quantity03',
		type: Sequelize.DECIMAL(5,2),
		validate: {
			isDecimal: {
				args: true,
				msg: 'Quantity03 must be a decimal'
			}
		}
	},
	unit03: {
		field: 'Unit03',
		type: Sequelize.TEXT
	},
	ingredient03: {
		field: 'Ingredient03',
		type: Sequelize.TEXT
	},

	quantity04: {
		field: 'Quantity04',
		type: Sequelize.DECIMAL(5,2),
		validate: {
			isDecimal: {
				args: true,
				msg: 'Quantity04 must be a decimal'
			}
		}
	},
	unit04: {
		field: 'Unit04',
		type: Sequelize.TEXT
	},
	ingredient04: {
		field: 'Ingredient04',
		type: Sequelize.TEXT
	},

	quantity05: {
		field: 'Quantity05',
		type: Sequelize.DECIMAL(5,2),
		validate: {
			isDecimal: {
				args: true,
				msg: 'Quantity05 must be a decimal'
			}
		}
	},
	unit05: {
		field: 'Unit05',
		type: Sequelize.TEXT
	},
	ingredient05: {
		field: 'Ingredient05',
		type: Sequelize.TEXT
	},

	quantity06: {
		field: 'Quantity06',
		type: Sequelize.DECIMAL(5,2),
		validate: {
			isDecimal: {
				args: true,
				msg: 'Quantity06 must be a decimal'
			}
		}
	},
	unit06: {
		field: 'Unit06',
		type: Sequelize.TEXT
	},
	ingredient06: {
		field: 'Ingredient06',
		type: Sequelize.TEXT
	},

	quantity07: {
		field: 'Quantity07',
		type: Sequelize.DECIMAL(5,2),
		validate: {
			isDecimal: {
				args: true,
				msg: 'Quantity07 must be a decimal'
			}
		}
	},
	unit07: {
		field: 'Unit07',
		type: Sequelize.TEXT
	},
	ingredient07: {
		field: 'Ingredient07',
		type: Sequelize.TEXT
	},

	quantity08: {
		field: 'Quantity08',
		type: Sequelize.DECIMAL(5,2),
		validate: {
			isDecimal: {
				args: true,
				msg: 'Quantity08 must be a decimal'
			}
		}
	},
	unit08: {
		field: 'Unit08',
		type: Sequelize.TEXT
	},
	ingredient08: {
		field: 'Ingredient08',
		type: Sequelize.TEXT
	},

	quantity09: {
		field: 'Quantity09',
		type: Sequelize.DECIMAL(5,2),
		validate: {
			isDecimal: {
				args: true,
				msg: 'Quantity09 must be a decimal'
			}
		}
	},
	unit09: {
		field: 'Unit09',
		type: Sequelize.TEXT
	},
	ingredient09: {
		field: 'Ingredient09',
		type: Sequelize.TEXT
	},

	quantity10: {
		field: 'Quantity10',
		type: Sequelize.DECIMAL(5,2),
		validate: {
			isDecimal: {
				args: true,
				msg: 'Quantity10 must be a decimal'
			}
		}
	},
	unit10: {
		field: 'Unit10',
		type: Sequelize.TEXT
	},
	ingredient10: {
		field: 'Ingredient10',
		type: Sequelize.TEXT
	},

	quantity11: {
		field: 'Quantity11',
		type: Sequelize.DECIMAL(5,2),
		validate: {
			isDecimal: {
				args: true,
				msg: 'Quantity11 must be a decimal'
			}
		}
	},
	unit11: {
		field: 'Unit11',
		type: Sequelize.TEXT
	},
	ingredient11: {
		field: 'Ingredient11',
		type: Sequelize.TEXT
	},

	quantity12: {
		field: 'Quantity12',
		type: Sequelize.DECIMAL(5,2),
		validate: {
			isDecimal: {
				args: true,
				msg: 'Quantity12 must be a decimal'
			}
		}
	},
	unit12: {
		field: 'Unit12',
		type: Sequelize.TEXT
	},
	ingredient12: {
		field: 'Ingredient12',
		type: Sequelize.TEXT
	},

	quantity13: {
		field: 'Quantity13',
		type: Sequelize.DECIMAL(5,2),
		validate: {
			isDecimal: {
				args: true,
				msg: 'Quantity13 must be a decimal'
			}
		}
	},
	unit13: {
		field: 'Unit13',
		type: Sequelize.TEXT
	},
	ingredient13: {
		field: 'Ingredient13',
		type: Sequelize.TEXT
	},

	quantity14: {
		field: 'Quantity14',
		type: Sequelize.DECIMAL(5,2),
		validate: {
			isDecimal: {
				args: true,
				msg: 'Quantity14 must be a decimal'
			}
		}
	},
	unit14: {
		field: 'Unit14',
		type: Sequelize.TEXT
	},
	ingredient14: {
		field: 'Ingredient14',
		type: Sequelize.TEXT
	},

	quantity15: {
		field: 'Quantity15',
		type: Sequelize.DECIMAL(5,2),
		validate: {
			isDecimal: {
				args: true,
				msg: 'Quantity15 must be a decimal'
			}
		}
	},
	unit15: {
		field: 'Unit15',
		type: Sequelize.TEXT
	},
	ingredient15: {
		field: 'Ingredient15',
		type: Sequelize.TEXT
	},

	quantity16: {
		field: 'Quantity16',
		type: Sequelize.DECIMAL(5,2),
		validate: {
			isDecimal: {
				args: true,
				msg: 'Quantity16 must be a decimal'
			}
		}
	},
	unit16: {
		field: 'Unit16',
		type: Sequelize.TEXT
	},
	ingredient16: {
		field: 'Ingredient16',
		type: Sequelize.TEXT
	},

	quantity17: {
		field: 'Quantity17',
		type: Sequelize.DECIMAL(5,2),
		validate: {
			isDecimal: {
				args: true,
				msg: 'Quantity17 must be a decimal'
			}
		}
	},
	unit17: {
		field: 'Unit17',
		type: Sequelize.TEXT
	},
	ingredient17: {
		field: 'Ingredient17',
		type: Sequelize.TEXT
	},

	quantity18: {
		field: 'Quantity18',
		type: Sequelize.DECIMAL(5,2),
		validate: {
			isDecimal: {
				args: true,
				msg: 'Quantity18 must be a decimal'
			}
		}
	},
	unit18: {
		field: 'Unit18',
		type: Sequelize.TEXT
	},
	ingredient18: {
		field: 'Ingredient18',
		type: Sequelize.TEXT
	},

	quantity19: {
		field: 'Quantity19',
		type: Sequelize.DECIMAL(5,2),
		validate: {
			isDecimal: {
				args: true,
				msg: 'Quantity19 must be a decimal'
			}
		}
	},
	unit19: {
		field: 'Unit19',
		type: Sequelize.TEXT
	},
	ingredient19: {
		field: 'Ingredient19',
		type: Sequelize.TEXT
	},
}, {
	timestamps: false
});