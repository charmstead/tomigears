import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Store = new Schema(
  {
    name: String,
    email: String,
    plan: { type: String, default: "free" },
    isSuspended: { type: Boolean, default: false },
    logo: String,
  },
  { timestamps: true }
);

module.exports = mongoose.models.Store || mongoose.model("Store", Store);
