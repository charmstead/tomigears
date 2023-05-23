import Repair from "../models/Repair";
import connectMongo from "../lib/connectDB";

export default class RepairRepository {
  constructor() {}

  static async getRepariById(id) {
    await connectMongo();
    return await Repair.findById(id).lean();
  }

  static async getStoreRepairs(storeId) {
    await connectMongo();
    return await Repair.find({ store: storeId }).lean();
  }

  static async createRepair({ device, amount, transationId, category, defectivePart, technician, note, store }) {
    await connectMongo();
    const newRepair = new Repair({
      device,
      amount,
      transationId,
      category,
      defectivePart,
      technician,
      note,
      store,
    });

    return newRepair.save().lean();
  }
}
