import express from 'express';
import {get, post} from './handlers';
import {getHash, putHash, deleteHash} from './hash';
import {enroll, expel} from './education';

const router = express.Router();

router.get('/', get);
router.post('/', post);

router.get('/:classHash', getHash);
router.put('/:classHash', putHash);
router.delete('/:classHash', deleteHash);

router.post('/:classHash/enroll', enroll);
router.post('/:classHash/expel', expel);


export {router as classes};
