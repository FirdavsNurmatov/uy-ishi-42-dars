export const createCategoryMidd = (schema) => {
    return (req, res, next) => {
        try {
            schema.validate(req.body)
            next()
        } catch (error) {
            next(error)
        }    
    }
}