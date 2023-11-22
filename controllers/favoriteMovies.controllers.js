const FavoriteMovies = require("../model/FavoriteMovies.model");

exports.getAll = async (req, res) => {
  try {
    const { page = 1, limit } = req.query;
    const items = await FavoriteMovies.find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 })
      .populate({
        path: "user_id",
        model: "user",
        select: "username"
      })
      .populate("movie_id", "title");

    const total = await FavoriteMovies.find().countDocuments();
    const pages = limit === undefined ? 1 : Math.ceil(total / limit);
    res.json({ total: total, pages, status: 200, items });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.create = async (req, res) => {
  await FavoriteMovies.find({
    user_id: req.body.user_id,
    movie_id: req.body.movie_id,
  })
    .then((data) => {
      if (data.length > 0) {
        FavoriteMovies.findByIdAndDelete({ _id: data[0]._id })
          .then((data) =>
            res.json({ status: 200, message: "Removed from favorites", data })
          )
          .catch((err) => res.json({ status: false, message: err }));
      } else {
        const newfavorites = new FavoriteMovies({
          user_id: req.body.user_id,
          movie_id: req.body.movie_id,
        });

        newfavorites
          .save()
          .then((response) =>
            res.json({
              status: 200,
              message: "Movie added to favorites successfully.",
              response,
            })
          )
          .catch((err) => res.json({ status: false, message: err }));
      }
    })
    .catch((err) => console.log(err));
};

exports.getSinglefavorites = async (req, res) => {
  await FavoriteMovies.findById({ _id: req.params.id }, (err, items) => {
    if (err) {
      res.json({ status: false, message: err });
    } else {
      res.json({ items });
    }
  })
  .populate({
	path: "user_id",
	model: "user",
	select: "username"
  })
  .populate("movie_id", "title");
};


exports.getWithQuery = async (req, res, next) => {
  try {
    const query =
      typeof req.body.query === "string"
        ? JSON.parse(req.body.query)
        : req.body.query;

    const items = await FavoriteMovies.find(query)
	.populate({
        path: "user_id",
        model: "user",
        select: "username"
      })
      .populate("movie_id", "title");

    res.json({ status: 200, message: "Filtered favorite movies", items });
  } catch (error) {
    next({ status: 404, message: error });
  }
};
