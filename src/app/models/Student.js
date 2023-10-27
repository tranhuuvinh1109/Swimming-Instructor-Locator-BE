const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Student = new Schema(
  {
    user_id: { type: Schema.Types.ObjectId, ref: "User" },
    student_name: { type: String, required: true },
    description: { type: String, default: "" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Student", Student);
