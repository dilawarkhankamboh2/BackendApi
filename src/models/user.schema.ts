import mongoose from "mongoose";

// user schema
const userSchema = new mongoose.Schema(
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

userSchema.virtual("age").get(function () {
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
userSchema.set("toJSON", { virtuals: true });
userSchema.set("toObject", { virtuals: true });

// user model
export const User = mongoose.model("User", userSchema);
