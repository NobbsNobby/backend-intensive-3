export const createUser = {
    type:       'object',
    properties: {
        name: {
            type:     'object',
            required: [ 'first', 'last' ],
        },
        email: {
            type:   'string',
            format: 'email',
        },
        phone: {
            type: 'string',
        },
        password: {
            type: 'string',
        },
        sex: {
            type:  'string',
            oneOf: [{const: 'm'}, {const: 'f'}],
        },
        role: {
            type:     'array',
            contains: {type: 'string'},
        },
    },
    required:             [ 'name', 'email', 'phone', 'password', 'sex' ],
    additionalProperties: false,
};
