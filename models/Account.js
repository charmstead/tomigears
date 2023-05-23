import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const Schema = mongoose.Schema;

let Account = new Schema(
  {
    username: { type: String },
    emailVerified: { type: Boolean, default: false },
    password: String,
    role: { type: [String], default: ["user"] },
    employeeCode: Number,
    firstname: String,
    lastname: String,
    stores: [{ type: Schema.Types.ObjectId, ref: "Store" }],
  },
  { timestamps: true }
);

Account.plugin(passportLocalMongoose, {
  populateFields: {
    path: "stores",
    select: "name plan isSuspended email",
  },
});

module.exports = mongoose.models.Account || mongoose.model("Account", Account);
