const FavoriteBooks = require("../model/FavoriteBooks.model");

exports.getAll = async (req, res) => {
  try {
    const { page = 1, limit } = req.query;
    const items = await FavoriteBooks.find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 })
      .populate({
        path: "user_id",
        model: "user",
        select: "username"
      })
      .populate("book_id", "title");

    const total = await FavoriteBooks.find().countDocuments();
    const pages = limit === undefined ? 1 : Math.ceil(total / limit);
    res.json({ total: total, pages, status: 200, items });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.create = async (req, res) => {
  await FavoriteBooks.find({
    user_id: req.body.user_id,
    book_id: req.body.book_id,
  })
    .then((data) => {
      if (data.length > 0) {
        FavoriteBooks.findByIdAndDelete({ _id: data[0]._id })
          .then((data) =>
            res.json({ status: 200, message: "Removed from favorites", data })
          )
          .catch((err) => res.json({ status: false, message: err }));
      } else {
        const newfavorites = new FavoriteBooks({
          user_id: req.body.user_id,
          book_id: req.body.book_id,
        });

        newfavorites
          .save()
          .then((response) =>
            res.json({
              status: 200,
              message: "Book added to favorites successfully.",
              response,
            })
          )
          .catch((err) => res.json({ status: false, message: err }));
      }
    })
    .catch((err) => console.log(err));
};

exports.getSinglefavorites = async (req, res) => {
  await FavoriteBooks.findById({ _id: req.params.id }, (err, items) => {
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
  .populate("book_id", "title");
};


exports.getWithQuery = async (req, res, next) => {
  try {
    const query =
      typeof req.body.query === "string"
        ? JSON.parse(req.body.query)
        : req.body.query;

    const items = await FavoriteBooks.find(query)
	.populate({
        path: "user_id",
        model: "user",
        select: "username"
      })
      .populate("book_id", "title");

    res.json({ status: 200, message: "Filtered favorite books", items });
  } catch (error) {
    next({ status: 404, message: error });
  }
};
