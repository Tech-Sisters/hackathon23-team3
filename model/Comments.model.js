const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentsSchema = new Schema(
	{
		user_id: { type: Schema.Types.ObjectId, ref: 'user' },
		content: { type: String, required: true },
		book_id: { type: Schema.Types.ObjectId, ref: 'book' },
		movie_id: { type: Schema.Types.ObjectId, ref: 'movie' },
		is_active: { type: Boolean, default: true },
	},
	{ timestamps: true }
); 

module.exports = mongoose.model('comment', CommentsSchema);