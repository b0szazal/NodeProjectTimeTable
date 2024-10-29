import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('home', { title: 'Timetable Project' });;
});

export {router as homeRouter};