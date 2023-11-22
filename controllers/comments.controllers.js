const CommentsModel = require("../model/Comments.model");

exports.getAll = async (req, res) => {
  try {
    const { page = 1, limit } = req.query;
    const items = await CommentsModel.find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 })
      .populate({
        path: "user_id",
        model: "user",
        select: "username image_url",
      })
      .populate("book_id", "title")
      .populate("movie_id", "title");

    const total = await CommentsModel.find().countDocuments();
    const pages = limit === undefined ? 1 : Math.ceil(total / limit);
    res.json({ total: total, pages, status: 200, items });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.create = async (req, res) => {
  const newfavorites = new CommentsModel({
    user_id: req.body.user_id,
    book_id: req.body.book_id,
    movie_id: req.body.movie_id,
    content: req.body.content,
  });

  newfavorites
    .save()
    .then((response) =>
      res.json({
        status: 200,
        message: "Comment created successfully.",
        response,
      })
    )
    .catch((err) => res.json({ status: false, message: err }));
};

exports.getSingleComment = async (req, res) => {
  await CommentsModel.findById({ _id: req.params.id }, (err, items) => {
    if (err) {
      res.json({ status: false, message: err });
    } else {
      res.json({ items });
    }
  })
    .populate({
      path: "user_id",
      model: "user",
      select: "username",
    })
    .populate("book_id", "title");
};

exports.getWithQuery = async (req, res, next) => {
  try {
    const query =
      typeof req.body.query === "string"
        ? JSON.parse(req.body.query)
        : req.body.query;

    const items = await CommentsModel.find(query)
      .populate({
        path: "user_id",
        model: "user",
        select: "username image_url",
      })
      .populate("book_id", "title")
      .populate("movie_id", "title");

    res.json({ status: 200, message: "Filtered comments", items });
  } catch (error) {
    next({ status: 404, message: error });
  }
};

exports.updateSingleComment = async (req, res) => {
	await CommentsModel.findByIdAndUpdate({ _id: req.params.id }, { $set: req.body })
	.then((data) => res.json({ message: 'Successfully updated', data }))
	.catch((err) => res.json({ message: err }));
};

exports.removeSingleComment = async (req, res) => {
  await CommentsModel.findByIdAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
};
