import Joi from "joi";

Joi.object({
    pet: Joi.string()
        .max(30)
        .required()
        .messages({
            'string.empty': 'El nombre es requerido',
            'string.max': 'Maximo 30 caracteres',
            'any.required': 'No puede estar vacio'
        }),
    owner: Joi.string()
        .max(30)
        .required()
        .messages({
            'string.empty': 'El nombre es requerido',
            'string.max': 'Maximo 30 caracteres',
            'any.required': 'No puede estar vacio'
        }),
    email: Joi.string()
        .required()
        .email({ tlds: false })
        .messages({
            'string.email': 'Ingrese un correo electronico valido',
        }),
    breed: Joi.string()
        .max(30)
        .required()
        .messages({
            'string.empty': 'El nombre es requerido',
            'string.max': 'Maximo 30 caracteres',
            'any.required': 'No puede estar vacio'
        }),
})