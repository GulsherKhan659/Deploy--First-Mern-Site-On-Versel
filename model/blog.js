var mongoose = require('mongoose');



const BlogsModel = mongoose.Schema({
    createdAt: Date,
    title: String,
    slag: String,
    category: String,
    imgUrl: String,
    blog: String

})



exports.Blog = mongoose.model('Blog', BlogsModel)