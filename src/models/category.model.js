import { model, Schema } from "mongoose";

const categorySchema = new Schema({
    authorId: {
        type: String,
    },
    commentary: {
        type: String,
        required: true,
        minLength: [10, "Add more commentary!"]
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

export const Category = model("Category", categorySchema)