import 'joi';

export function validateSchema(req, res, next) {
    const userSchema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        age: Joi.number().min(18).required(),
    });

    const user = req.body;
    const { errors } = userSchema.validate(user,  { abortEarly: false });

    if(errors) {
        res.status(400).json({
            errors
        });
    }

    next();
}
