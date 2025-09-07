import { model, Schema } from "mongoose";

const userSchema = new Schema({
  email: { type: String, require: true },
  password: { type: String, require: true },
  todos: [{ type: Schema.ObjectId, ref: "Todo", default: [] }],
});

const User = model("User", userSchema);
export default User;
