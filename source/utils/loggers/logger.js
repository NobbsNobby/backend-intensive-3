import { createLogger, format, transports } from 'winston';

const logger = createLogger({
    level:      'debug',
    format:     format.combine(format.json(), format.prettyPrint()),
    transports: [ new transports.Console() ],

});

export const loggerMiddleware = () => (req, res, next) => {
    if (process.env.NODE_ENV === 'development') {
        logger.info({
            method:  req.method,
            date:    new Date(),
            payload: req.body,
        });
    }
    next();
};
