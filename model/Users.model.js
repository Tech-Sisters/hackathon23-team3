const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
	{
		username: { type: String,required:true},
		email: { type: String, unique: true,required:true }, 
		password: { type: String,required:true },
		image_url: { type: String,default:"https://cdn-icons-png.flaticon.com/512/149/149071.png" },
		role: { type: String, default: 'user' },
		is_active: { type: Boolean, default: true }
		
	}, 
	{ timestamps: true } 
);  

module.exports = mongoose.model('user', UserSchema);
  