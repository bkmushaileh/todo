import { model, Schema } from "mongoose";

const todoSchema = new Schema(
  {
    todo: { type: String, required: true },
    status: {
      type: String,
      enum: ["Done", "Pending"],
      default: "Pending",
    },
    user: { type: Schema.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

const Todo = model("Todo", todoSchema);

export default Todo;
