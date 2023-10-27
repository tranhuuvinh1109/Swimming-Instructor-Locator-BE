const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Course = new Schema(
  {
    course_name: { type: String, required: true },
    teacher_id: { type: Schema.Types.ObjectId, ref: "Teacher" },
    price: { type: String, default: "" },
    description: { type: String, default: "" },
    schedule: { type: String, default: "" },
    quantity: { type: Number, default: 0 },
    image: { type: String, default: "" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Course", Course);
