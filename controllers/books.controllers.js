const BooksModel = require("../model/Books.model");
const mongoose = require("mongoose");
require("dotenv").config();
const ObjectId = mongoose.Types.ObjectId;

exports.getAll = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const total = await BooksModel.find().countDocuments();
  await BooksModel.aggregate(
    [
      {
        $sort: { 
          createdAt: -1,
        },
      },
      {
        $skip: (page - 1) * limit,
      },
      {
        $limit: limit * 1,
      },
      {
        $project: {
          title: true,
          description: true,
          image_url: true,
          is_active: true,
          kid_friendly: true,
          genre: true,
          is_admin_suggested:true
        },
      },
    ],
    (err, items) => {
      if (err) res.json(err);
      const pages = limit === undefined ? 1 : Math.ceil(total / limit);
      res.json({ total, pages, status: 200, items });
    }
  );
};

exports.searchWithTitle = async (req, res, next) => {
  const total = await BooksModel.find({
    title: { $regex: req.body.title, $options: "i" },
  }).countDocuments();
  try {
    const items = await BooksModel.find({
      title: { $regex: req.body.title, $options: "i" },
    });
    res.json({ status: 200, total, message: "Filtered books", items });
  } catch (error) {
    next({ status: 404, message: error });
  }
};

exports.create = async (req, res) => {
  await BooksModel.findOne({ title: req.body.title }, async (err, result) => {
    if (result)
      res.json({ status: 409, message: "Book with the same title exists" });

    if (result === null) {
      const newBook = await new BooksModel({
        image_url: req.body.image_url,
        title: req.body.title,
        description: req.body.description,
        genre: req.body.genre,
        kid_friendly: req.body.kid_friendly,
      });

      await newBook
        .save()
        .then(
          async (data) =>
            await BooksModel.aggregate(
              [
                {
                  $match: { _id: mongoose.Types.ObjectId(data._id) },
                },
                {
                  $project: {
                    title: true,
                    description: true,
                    image_url: true,
                    is_active: true,
                    kid_friendly: true,
                    is_admin_suggested:true
                  },
                },
              ],
              (err, items) => {
                if (err) res.json(err);
                res.json({ status: 200, items });
              }
            )
        )
        .catch((err) => res.json({ status: false, message: err }));
    }
  });
};
exports.getSingleBook = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
		res.json({message:"Invalid book id"})
		return;
	  }
  await BooksModel.aggregate(
    [
      {
        $match: { _id: mongoose.Types.ObjectId(req.params.id) },
      },
      {
        $project: {
          title: true,
          description: true,
          image_url: true,
          is_active: true,
          kid_friendly: true,
          genre: true,
          is_admin_suggested:true
        },
      },
    ],
    (err, items) => {
      if (err) res.json(err);
      res.json({ status: 200, items });
    }
  );
};

exports.updateSingleBook = async (req, res) => {
  await BooksModel.findByIdAndUpdate({ _id: req.params.id }, { $set: req.body })
    .then((data) => res.json({ message: "Successfully updated", data }))
    .catch((err) => res.json({ message: err }));
};

exports.removeSingleBook = async (req, res) => {
  await BooksModel.findByIdAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
};
