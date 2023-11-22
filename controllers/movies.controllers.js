const MoviesModel = require("../model/Movies.model");
const mongoose = require("mongoose");
require("dotenv").config();

exports.getAll = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const total = await MoviesModel.find().countDocuments();
  await MoviesModel.aggregate(
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
          isActive: true,
          isKidFriendly: true,
          genre: true,
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
  const total = await MoviesModel.find({
    title: { $regex: req.body.title, $options: "i" },
  }).countDocuments();
  try {
    const items = await MoviesModel.find({
      title: { $regex: req.body.title, $options: "i" },
    });
    res.json({ status: 200, total, message: "Filtered movies", items });
  } catch (error) {
    next({ status: 404, message: error });
  }
};

exports.create = async (req, res) => {
  await MoviesModel.findOne({ title: req.body.title }, async (err, result) => {
    if (result)
      res.json({ status: 409, message: "Movie with the same title exists" });

    if (result === null) {
      const newMovie = await new MoviesModel({
        image_url: req.body.image_url,
        title: req.body.title,
        description: req.body.description,
        genre: req.body.genre,
        isKidFriendly: req.body.isKidFriendly,
      });

      await newMovie
        .save()
        .then(
          async (data) =>
            await MoviesModel.aggregate(
              [
                {
                  $match: { _id: mongoose.Types.ObjectId(data._id) },
                },
                {
                  $project: {
                    title: true,
                    description: true,
                    image_url: true,
                    isActive: true,
                    isKidFriendly: true,
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
exports.getSingleMovie = async (req, res) => {
  await MoviesModel.aggregate(
    [
      {
        $match: { _id: mongoose.Types.ObjectId(req.params.id) },
      },
      {
        $project: {
          title: true,
          description: true,
          image_url: true,
          isActive: true,
          isKidFriendly: true,
          genre: true,
        },
      },
    ],
    (err, items) => {
      if (err) res.json(err);
      res.json({ status: 200, items });
    }
  );
};

exports.updateSingleMovie = async (req, res) => {
	await MoviesModel.findByIdAndUpdate({ _id: req.params.id }, { $set: req.body })
	.then((data) => res.json({ message: 'Successfully updated', data }))
	.catch((err) => res.json({ message: err }));
};

exports.removeSingleMovie = async (req, res) => {
  await MoviesModel.findByIdAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
};
