import { HydratedDocument, InferSchemaType, model, Schema } from "mongoose";

const userSchema = new Schema({
  email: { type: String },
  password: { type: String },
  todos: [{ type: Schema.ObjectId, ref: "Todo", default: [] }],
});

const User = model("User", userSchema);

export type UserAttrs = InferSchemaType<typeof userSchema>;
export type UserDoc = HydratedDocument<UserAttrs>;
export default User;
