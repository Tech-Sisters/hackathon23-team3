const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const FavoriteMoviesSchema = new Schema(
	{ 
		user_id: { type: Schema.Types.ObjectId, ref: 'user'},
		movie_id: { type: Schema.Types.ObjectId, ref: 'movie' },
	},
	{ timestamps: true }  
);    

module.exports = mongoose.model('favoritemovies', FavoriteMoviesSchema);   