const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MoviesSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image_url: { type: String },
    genre: { type: Array },
    isKidFriendly: { type: Boolean, required: true },
    isActive: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("movie", MoviesSchema);
