// Core
import express from 'express';
import bodyParser from 'body-parser';
import {loggerMiddleware} from './utils/logger';
import passport from 'passport';
// Routers
import * as routers from './routers';
import {getPassword} from './utils/env/getPassword';
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;


const app = express();
app.use(bodyParser.json({limit: '10kb'}));
app.use(loggerMiddleware());
//passport
const options = {
    secretOrKey:    getPassword(),
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};
passport.use(new JwtStrategy(
    options, (jwt_payload, done) => {
        done(null, 'jwt done');
    },
));
app.use(passport.initialize());
app.use(passport.session());
// Routers
app.use('/', routers.auth);
app.use('/users', routers.users);
app.use('/classes', routers.classes);
app.use('/lessons', routers.lessons);

export { app };
