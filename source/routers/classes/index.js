import express from 'express';
import {get, post} from './handlers';
import {getByHash, deleteByHash, updateByHash} from './hash';
import {enroll, expel} from './education';
import {authenticate} from '../../utils';

const router = express.Router();
router.get('/', get);
router.post('/', [ authenticate ], post);

router.get('/:classHash', [ authenticate ], getByHash);
router.put('/:classHash', [ authenticate ], updateByHash);
router.delete('/:classHash', [ authenticate ], deleteByHash);

router.post('/:classHash/enroll', [ authenticate ], enroll);
router.post('/:classHash/expel', [ authenticate ], expel);


export {router as classes};
