import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Appointment = new Schema(
  {
    type: String,
    date: { type: Date, default: Date.now },
    note: String,
    store: { type: Schema.Types.ObjectId, ref: "Store" },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Appointment || ("Appointment", Appointment);
