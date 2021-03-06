// require mongoose
var mongoose = require('mongoose');
// setup mongoose bear schema and bear collection
var BearSchema = new mongoose.Schema({
    name:  { type: String,
    		 required: [true, "Name is required."],
    		 minlength: [3, "Name must be at least 3 characters."],
    		 trim: true},
    favorite_foods: [{ type: String,
    		 required: [true, "At least one favorite food is required."],
    		 minlength: [3, "Each favorite food must be at least 3 characters."],
    		 trim: true}]
	},{
	timestamps: { createdAt: 'created_at',
				  updatedAt: 'updated_at'}
});
var Bear = mongoose.model('Bear', BearSchema);