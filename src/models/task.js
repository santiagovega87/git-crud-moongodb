const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    title: String,
    description: String,
    status: {
        type: Boolean,
        default: false,
    },
    eliminado: {
        type: Boolean,
        default: true,
    },
})

module.exports = mongoose.model('tasks',TaskSchema);