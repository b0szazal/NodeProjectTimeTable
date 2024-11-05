import express from 'express';
import fs from 'fs';
import __dirname from '../util/rootpath.js';
import path from 'path';
import * as controller from '../controllers/timetable.js'

const router = express.Router();
const lessonsFilePath = path.join(__dirname, 'public', 'data', 'lessons.json');

router.get('/', controller.getAddTimeTable);

router.post('/', controller.postSaveTimeTable)

export {router as addToTimeTableRouter};