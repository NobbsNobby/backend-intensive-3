import express from 'express';
import {get, post} from './handlers';
import {getByHash, putByHash, deleteByHash} from './hash';
//utils
import {authenticate, limiter, validator} from '../../utils';
// Schemas
import {createUser} from '../../schemas';


const router = express.Router();
router.use(authenticate);
router.get('/', [ limiter(2, 1000 * 60) ], get);
router.post('/', [ validator(createUser) ], post);

router.get('/:userHash', getByHash);
router.put('/:userHash', putByHash);
router.delete('/:userHash', deleteByHash);

export {router as users};
