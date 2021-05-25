import express from 'express';
import {get, post} from './handlers';
import {getByHash, deleteByHash, updateByHash} from './hash';
import {getKeynoteByHash, getVideoByHash, removeKeynoteByHash, removeVideoByHash, addVideo, addKeynote} from './education';
import {authenticate} from '../../utils';

const router = express.Router();
router.use(authenticate);
router.get('/', get);
router.post('/', [ authenticate ], post);

router.get('/:lessonHash', [ authenticate ], getByHash);
router.put('/:lessonHash', [ authenticate ], updateByHash);
router.delete('/:lessonHash', [ authenticate ], deleteByHash);

router.post('/:lessonHash/videos', [ authenticate ], addVideo);
router.get('/:lessonHash/videos/:videoHash', [ authenticate ], getVideoByHash);
router.delete('/:lessonHash/videos/:videoHash', [ authenticate ], removeVideoByHash);

router.post('/:lessonHash/keynotes', [ authenticate ], addKeynote);
router.get('/:lessonHash/keynotes/:keynoteHash', [ authenticate ], getKeynoteByHash);
router.delete('/:lessonHash/keynotes/:keynoteHash', [ authenticate ], removeKeynoteByHash);

export {router as lessons};
