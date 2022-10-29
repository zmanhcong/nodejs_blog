const { default: mongoose } = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String, maxLength: 255, require: true },
        description: { type: String, maxLength: 100 },
        image: { type: String, maxLength: 255 },
        videoId: { type: String, maxLength: 255 },
        slug: { type: String, slug: 'name', unique: true },
        deleted: { type: Boolean },
        deletedAt: { type: Date },
    },
    {
        timestamps: true, //auto create field: createdAt and  updateAt instead of define in model
    },
);

// Add plugins
mongoose.plugin(slug); //mongoose-slug-auto-generator.
Course.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deletedAt: true,
}); //soft delete

module.exports = mongoose.model('Course', Course);
