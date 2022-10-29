const Course = require('./models/Course');

const {
    mongooseToObject,
    multipleMongooseToObject,
} = require('../../util/mongoose');

class CourseController {
    //[GET] /courses/:slug    ---   show detai of course
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', {
                    course: mongooseToObject(course),
                });
            })
            .catch(next);
    }

    //[GET] /courses/create    ---   create new course
    create(req, res, next) {
        res.render('courses/create');
    }

    //[POST] /courses/store   ---   create new course
    store(req, res, next) {
        const course = new Course(req.body);
        course
            .save()
            .then(() => res.redirect('/me/stored/courses'))
            .catch((error) => {
                //a
            });
    }

    //[GET] /courses/:id/edit    ---   Edit course
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course) =>
                res.render('courses/edit', {
                    course: mongooseToObject(course),
                }),
            )
            .catch(next);
    }

    //[PUT] /courses/:id    ---   Update course
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }

    //[DELETE] /courses/:id    ---   Soft delete course
    destroy(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    //[DELETE] /courses/:id/force    ---   Permanently delete course
    forceDelete(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    //[PATCH] /courses/:id/restore    ---   restore course
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new CourseController(); //export để bên index.js require(import) vào.
