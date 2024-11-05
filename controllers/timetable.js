import TimeTable from '../models/ora.js'

export const getAddTimeTable=(req, res) => {
    res.render('addToTimeTable.ejs', {
        title: 'Time Table',
        path: '/addToTimeTable'
    })
};

export const postSaveTimeTable=(req, res) => {
    const timetable=new TimeTable(req.body.title, req.body.shortVer, req.body.day, req.body.fromTime, req.body.lengthTime)
    timetable.save()
    res.redirect('/');
};

export const getTimeTable=(req, res) => {
    res.render('home.ejs', {
        title: 'Time Table',
        path: '/',
        lessons: TimeTable.getAllProducts()
    });
}