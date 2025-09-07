import { model, Schema } from "mongoose";

const todoSchema = new Schema({
  todo: { type: String },
  status: {
    type: String,
    enum: ["Done", "Pending"],
    default: "Pending",
  },
  user: { type: Schema.ObjectId, ref: "User" },
});

const Todo = model("TODO", todoSchema);

export default Todo;
