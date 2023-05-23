import Account from "../models/Account";
import Store from "../models/Store";

export default class AccountRepository {
  constructor() {}

  static async register({ email, password, name, firstname, lastname }) {
    const store = new Store();
    store.name = name;

    const account = new Account({
      username: email,
      email,
      firstname,
      lastname,
      role: ["user", "admin"],
      stores: [store._id],
    });
    await account.setPassword(password);
    await account.save();

    await store.save();
    return account;
  }

  static async login(email, password) {
    return await Account.authenticate()(email, password);
  }

  static async findByUsername(email) {
    return await Account.findOne({ username: email }).lean();
  }
}
