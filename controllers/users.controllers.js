const UsersModel = require('../model/Users.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
require('dotenv').config();

 
exports.getAllUsers = async (req, res) => {
	const{page=1,limit=10}=req.query
	const total = await UsersModel.find().countDocuments();
	await UsersModel.aggregate(
	[
		{
			$sort:
			{
			 createdAt: -1
			} 
		},
		{
			 $skip:(page - 1) * limit 
		},
		{
			 $limit:limit*1 
		},  
		{
			$project:{
				username:true,email:true,
				role:true,is_active:true,createdAt:true,updatedAt:true,image_url:true,role:true
			}
		},
	],
	(err,items)=>{
	if(err)res.json(err);
	const pages = limit === undefined ? 1 : Math.ceil(total / limit);
	res.json({ total,pages, status: 200, items })
}) 
};


  
exports.getSingleUserById = async (req, res) => { 
	await UsersModel.aggregate(
		[
			{
				$match: { _id: mongoose.Types.ObjectId(req.params.id) }
			},
			{
				$sort:
				{
				 createdAt: -1
				} 
			}, 
			{
				$project:{
					username:true,email:true,
				role:true,is_active:true,createdAt:true,updatedAt:true,image_url:true
				}
			},
		],
		(err,items)=>{ 
		if(err)res.json(err);
		res.json({items})
	}) 

};





exports.createUser = async (req, res) => {
			const {
				username,
				email,
				password,
				role
			} = req.body;
			await UsersModel.countDocuments({ "email": email },async function(err,count){
				if(count>0){
                  res.json({status:409,message:"This email exists!"})
				}else{
					const salt = await bcrypt.genSalt();
					const hashedPassword = await bcrypt.hash(password, salt);
			
					const newUser = await new UsersModel({
						username,
						email,
						password:hashedPassword,
						role
					});
					newUser
						.save()
						.then(async response=>{
							await UsersModel.aggregate(
								[
									{
										$match: { _id: mongoose.Types.ObjectId(response._id) }
									},
									{
										$sort:
										{
										 createdAt: -1
										} 
									}, 
									{
										$project:{
											username:true,email:true,password:true,
											role:true,is_active:true,createdAt:true,updatedAt:true,image_url:true,role:true
										}
									},
								],
								(err,items)=>{ 
								if(err)res.json(err);
								res.json({items})
							}) 
						})
				}
			})
		
		};

exports.login = async (req, res) => {
	const { email, password } = req.body;
	UsersModel.findOne({ email: email })
		.then(async (data) => {
			if (await bcrypt.compare(password, data.password)) {
				const token = jwt.sign(
					{ name: email, role: data.role },
					process.env.ACCESS_TOKEN_SECRET,
					{ expiresIn: '24h' }
				)
				res.json({ 
					status: true,
					username: data.username,
					email: data.email,
					image_url: data.image_url, 
					is_active: data.is_active,
					id: data._id,
					role: data.role,
					token: token
				})
			} else {
				res.json({ status: false, message: 'Wrong password' });  
			}
		})
		.catch((err) => res.json({ message: 'Email does not exist' })); 
}; 

exports.updateUser = async (req, res) => {
	await UsersModel.findByIdAndUpdate({ _id: req.params.id }, { $set: req.body })
		.then((data) => res.json({ message: 'Successfully updated', data }))
		.catch((err) => res.json({ message: err }));
};


exports.deleteUser = async (req, res) => {
	await UsersModel.findByIdAndDelete({ _id: req.params.id })
	.then((data) => res.json(data))
	.catch((err) => res.json({ message: err }));
};

