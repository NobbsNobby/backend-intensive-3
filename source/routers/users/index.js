import express from 'express';
import {get, post} from './handlers';

const router = express.Router();

router.get('/', get);

router.post('/', post);


export {router as users};
