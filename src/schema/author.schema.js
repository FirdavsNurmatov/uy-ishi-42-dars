import Joi from "joi"

export const createSchema = Joi.object({
    fullname: Joi.string().min(5).message("Password must be minimum 5 characters!").required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).message("Password must be minimum 8 characters!").required()
})