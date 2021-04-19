// Core
import express from 'express';
import bodyParser from 'body-parser';
import {loggerMiddleware} from './utils/logger';
import session from 'express-session';
// Routers
import * as routers from './routers';

const app = express();
app.use(bodyParser.json({limit: '10kb'}));
app.use(loggerMiddleware());
app.use(session(
    {
        key:               'email', // cookie name
        secret:            'your_strong_password', // change to your password
        resave:            false, // disable session resave
        rolling:           true, // reset max age on every use
        saveUninitialized: false,
        cookie:            {
            httpOnly: true,
            maxAge:   15 * 60 * 1000,
        },

    },
));
// Routers
app.use('/', routers.auth);
app.use('/users', routers.users);
app.use('/classes', routers.classes);
app.use('/lessons', routers.lessons);

export { app };
