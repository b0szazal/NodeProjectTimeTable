import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('addToTimeTable', { title: 'Timetable Project' });;
});

router.post('/', (req, res) => {
    // NYI
    console.log(req.body);
    res.redirect('/');
})

export {router as addToTimeTableRouter};