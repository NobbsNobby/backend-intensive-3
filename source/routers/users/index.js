import express from 'express';
import {get, post} from './handlers';
import {getHash, putHash, deleteHash} from './hash';

const router = express.Router();

router.get('/', get);
router.post('/', post);

router.get('/:userHash', getHash);
router.put('/:userHash', putHash);
router.delete('/:userHash', deleteHash);

export {router as users};
