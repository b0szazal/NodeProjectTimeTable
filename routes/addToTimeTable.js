import express from 'express';
import fs from 'fs';
import __dirname from '../util/rootpath.js';
import path from 'path';

const router = express.Router();
const lessonsFilePath = path.join(__dirname, 'public', 'data', 'lessons.json');

router.get('/', (req, res) => {
    res.render('addToTimeTable', { title: 'Timetable Project' });;
});

router.post('/', (req, res) => {
    // NYI
    console.log(req.body);

    const newLesson = {
        subject: req.body.subject,
        shortVer: req.body.shortVer,
        day: req.body.day,
        fromTime: req.body.fromTime,
        lengthTime: req.body.lengthTime
    };

    fs.readFile(lessonsFilePath, (err, data) => {
        let lessons = [];

        if(!err)
            lessons = JSON.parse(data);

        lessons.push(newLesson);
        fs.writeFile(lessonsFilePath, JSON.stringify(lessons), (error) => {
            if(error)
                console.error(error);
        });
    });

    res.redirect('/');
})

export {router as addToTimeTableRouter};