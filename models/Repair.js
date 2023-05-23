import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Repair = new Schema(
  {
    device: String,
    amount: { type: Number, default: 0 },
    transationId: String,
    category: String,
    defectivePart: { type: String },
    technician: { type: Schema.Types.ObjectId, ref: "Account" },
    note: String,
    store: { type: Schema.Types.ObjectId, ref: "Store" },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Repair || mongoose.model("Repair", Repair);
