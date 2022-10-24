const Course = require('./models/Course');
const {
    multiMongooseToObject,
    multipleMongooseToObject,
} = require('../../util/mongoose');

class SiteController {
    //[GET] /news

    //This is call back
    // index(req, res) {
    //     Course.find({}, function (err, courses) {
    //         if (!err) {
    //             // res.json(courses);
    //             courses = courses.map(item=> item.toObject())
    //             res.render('home', {
    //                 courses : courses,
    //             })
    //         } else {
    //             res.status(400).json({ error: 'ERROR!!!' });
    //         }
    //     });
    // }

    //output data by promiss
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController(); //export để bên index.js require(import) vào.
