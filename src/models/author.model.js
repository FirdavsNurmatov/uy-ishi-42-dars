import { model, Schema } from "mongoose";

const authorSchema = new Schema({
    fullname: {
        type: String,
        required: true,
        minLength: [5, "Fullname must be minimum 5 characters!"]
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        minLength: [8, "Password must be minimum 8 characters!"],
        required: true,
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

export const Author = model("Author", authorSchema)