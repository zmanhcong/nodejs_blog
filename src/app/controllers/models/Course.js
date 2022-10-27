const { default: mongoose } = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug); //mongoose-slug-auto-generator.

const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String, maxLength: 255, require: true },
        description: { type: String, maxLength: 100 },
        image: { type: String, maxLength: 255 },
        videoId: { type: String, maxLength: 255 },
        slug: { type: String, slug: 'name', unique: true },
        // createdAt: { type: Date, default: Date.now },
        // updatedAt: { type: Date, default: Date.now },
    },
    {
        timestamps: true, //auto create field: createdAt and  updateAt instead of define in model
    },
);

module.exports = mongoose.model('Course', Course);
