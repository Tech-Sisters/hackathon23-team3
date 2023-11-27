const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const FavoriteBooksSchema = new Schema(
	{ 
		user_id: { type: Schema.Types.ObjectId, ref: 'user'},
		book_id: { type: Schema.Types.ObjectId, ref: 'book' },
	},
	{ timestamps: true }  
);    

module.exports = mongoose.model('favoritebooks', FavoriteBooksSchema);   