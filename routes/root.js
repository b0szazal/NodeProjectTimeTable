import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('root', { title: 'Timetable Project' });;
});

export {router as rootRouter};