import express from 'express';
import {get, post} from './handlers';
import {getByHash, removeByHash, updateByHash} from './hash';
import {getKeynoteByHash, getVideoByHash, removeKeynoteByHash, removeVideoByHash, addVideo, addKeynote} from './education';

const router = express.Router();

router.get('/', get);
router.post('/', post);

router.get('/:lessonHash', getByHash);
router.put('/:lessonHash', updateByHash);
router.delete('/:lessonHash', removeByHash);

router.post('/:lessonHash/videos', addVideo);
router.get('/:lessonHash/videos/:videoHash', getVideoByHash);
router.delete('/:lessonHash/videos/:videoHash', removeVideoByHash);

router.post('/:lessonHash/keynotes', addKeynote);
router.get('/:lessonHash/keynotes/:keynoteHash', getKeynoteByHash);
router.delete('/:lessonHash/keynotes/:keynoteHash', removeKeynoteByHash);

export {router as lessons};
