import Joi from "joi";

export const schemaFormAddPatient =  Joi.object({
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
            'string.empty': 'El dueño es requerido',
            'string.max': 'Maximo 30 caracteres',
            'any.required': 'No puede estar vacio'
        }),
    email: Joi.string()
        .required()
        .email({ tlds: false })
        .messages({
            'string.email': 'Ingrese un correo electronico valido',
            'string.empty': 'El email es requerido',
        }),
    breed: Joi.string()
        .max(30)
        .required()
        .messages({
            'string.empty': 'La raza es requerida',
            'string.max': 'Maximo 30 caracteres',
            'any.required': 'No puede estar vacio'
        }),
})