import Joi from "joi"

export const createSchema = Joi.object({
    authorId: Joi.string().required(),
    commentary: Joi.string().min(10).message("Commentary must be 10 or more than 10 characters!").required()
})