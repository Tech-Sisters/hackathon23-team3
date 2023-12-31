const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MoviesSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image_url: { type: String },
    genre: { type: Array },
    kid_friendly: { type: Boolean, required: true },
    is_active: { type: Boolean, default: false },
    is_admin_suggested: { type: Boolean, default: false },
  },
  { timestamps: true }
); 

module.exports = mongoose.model("movie", MoviesSchema);
