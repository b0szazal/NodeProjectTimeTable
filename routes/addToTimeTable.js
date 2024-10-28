import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('addToTimeTable', { title: 'Timetable Project' });;
});

export {router as addToTimeTableRouter};