const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RegisterStudy = new Schema(
  {
    course_id: { type: Schema.Types.ObjectId, ref: "Course" },
    user_id: { type: Schema.Types.ObjectId, ref: "User" },
    pay: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("RegisterStudy", RegisterStudy);
