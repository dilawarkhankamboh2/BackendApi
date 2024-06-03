"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// auth schema
const authSchema = new mongoose_1.default.Schema({
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
}, { timestamps: true });
authSchema.virtual("age").get(function () {
    const today = new Date();
    const dob = this.dob;
    let age = today.getFullYear() - dob.getFullYear();
    if (today.getMonth() < dob.getMonth() ||
        (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) {
        age--;
    }
    return age;
});
// Ensure virtual fields are serialised
authSchema.set("toJSON", { virtuals: true });
authSchema.set("toObject", { virtuals: true });
// user model
exports.User = mongoose_1.default.model("User", authSchema);
