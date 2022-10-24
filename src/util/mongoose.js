const { default: mongoose, mongo } = require('mongoose');

module.exports = {
    //Trường hợp return array!
    multipleMongooseToObject: function (mongoose) {
        return mongoose.map((mongoose) => mongoose.toObject());
    },
    //Trường hợp có 1 document!
    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
