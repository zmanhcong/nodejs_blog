const Course = require('./models/Course');
const {
    mongooseToObject,
    multipleMongooseToObject,
} = require('../../util/mongoose');

class CourseController {
    //[GET] /courses/:slug
    // show(req, res, next) {
    //     Course.findOne({slug: req.params.slug})
    //         .then(course => {
    //             res.render('courses/show', {
    //                 course: mongooseToObject(course),
    //             })
    //         console.log('manhcong manhcong +',course)
    //     })
    //         .catch(next);
    //         // res.send('SHOW DETAIL ' + req.params.slug);
    // }

    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', {
                    course: mongooseToObject(course),
                });
                console.log('manhcong manhcong +', course);
            })
            .catch(next);
    }
}

module.exports = new CourseController(); //export để bên index.js require(import) vào.
