import express from 'express';
import {get, post} from './handlers';
import {getHash, putHash, deleteHash} from './hash';
import {enroll, expel} from './education';
import {authenticate} from '../../utils';

const router = express.Router();
router.get('/', get);
router.post('/', [ authenticate ], post);

router.get('/:classHash', [ authenticate ], getHash);
router.put('/:classHash', [ authenticate ], putHash);
router.delete('/:classHash', [ authenticate ], deleteHash);

router.post('/:classHash/enroll', [ authenticate ], enroll);
router.post('/:classHash/expel', [ authenticate ], expel);


export {router as classes};
