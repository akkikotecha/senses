const { Schema, model } = require("mongoose");

let categorySchema = new Schema(
  {
    categoryName: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

module.exports = model("Category", categorySchema);
