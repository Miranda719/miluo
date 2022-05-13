var mongoose = require('mongoose')

var topicSchema = new mongoose.Schema({
    img: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: [true, "标题不能为空"]
    },
    month: {
        type: String,
        required: [true, "内容不能为空"]
    },
    title: {
        type: String
    },
    content: {
        type: String
    }
})
var da = new mongoose.model('data', topicSchema, "data")
module.exports =da;