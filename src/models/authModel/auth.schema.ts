import mongoose from "mongoose";
import { AuthType} from "../../types/authType";

// auth schema
const authSchema = new mongoose.Schema<AuthType>(
  {
    _id: {
      type: String,
      required: [true, "id is required"],
    },

    name: {
      type: String,
      required: [true, "name is required"],
    },

    email: {
      type: String,
      required: [true, "email is required"],
    },

    photo: {
      type: String,
      required: [true, "photo is required"],
    },

    gender: {
      type: String,
      enum: ["male", "female"],
      required: true,
    },

    role: {
      type: String,
      required: true,
      enum: ["user", "admin"],
      default: "user",
    },

    dob: {
      type: Date,
      required: [true, "dob is required"],
    },
  },
  { timestamps: true }
);

authSchema.virtual("age").get(function () {
  const today = new Date();
  const dob = this.dob;
  let age = today.getFullYear() - dob.getFullYear();

  if (
    today.getMonth() < dob.getMonth() ||
    (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())
  ) {
    age--;
  }
  return age;
});

// Ensure virtual fields are serialised
authSchema.set("toJSON", { virtuals: true });
authSchema.set("toObject", { virtuals: true });

// user model
export const User = mongoose.model<AuthType>("User", authSchema);
