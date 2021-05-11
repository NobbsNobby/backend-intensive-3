import express from 'express';
import {get, post} from './handlers';
import {getByHash, putByHash, deleteByHash} from './hash';
//utils
import {authenticate, limiter, validator} from '../../utils';
// Schemas
import {createUser} from '../../schemas';


const router = express.Router();
router.get('/', [ limiter(2, 1000 * 60), authenticate ], get);
// router.post('/', [ validator(createUser) ], post);
router.post('/', post);

router.get('/:userHash', [ authenticate ], getByHash);
router.put('/:userHash', [ authenticate ], putByHash);
router.delete('/:userHash', [ authenticate ], deleteByHash);

export {router as users};
