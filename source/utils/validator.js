import Ajv from 'ajv';
import addFormats from 'ajv-formats';


export const validator = (schema) => (req, res, next) => {
    // eslint-disable-next-line no-console
    console.log(req.body);
    const ajv = new Ajv({ allErrors: true });
    addFormats(ajv);
    const validate = ajv.compile(schema);

    const valid = validate(req.body);

    if (valid) {
        return next();
    }

    // eslint-disable-next-line no-console
    console.log(
        validate.errors,
    );
    const errors = validate.errors.map(({ instancePath, message, keyword, params }) => {
        const path = instancePath ? instancePath.slice(1) : 'schema';
        switch (keyword) {
            case 'required':
                return `${path} ${message}`;
            case 'const':
                return `${path} ${message} '${params.allowedValue}'`;
            default:
                return `${path} ${message}`;
        }
    });

    res.status(400).json({ message: errors });
};
