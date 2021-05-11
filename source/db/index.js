import mongoose from 'mongoose';
import dg from 'debug';
import {getDatabase} from "../utils/env";

const debug = dg('db');

const mongooseOptions = {
    promiseLibrary:     global.Promise,
    poolSize:           50,
    keepAlive:          30000,
    connectTimeoutMS:   5000,
    reconnectTries:     Number.MAX_SAFE_INTEGER,
    reconnectInterval:  5000,
    useFindAndModify:   false,
    useCreateIndex:     true,
    useNewUrlParser:    true,
    useUnifiedTopology: true,
};

mongoose.connect(
    getDatabase(),
    mongooseOptions,
);
const db = mongoose.connection;

db.once('open', function() {
    debug('connected to database');
});
