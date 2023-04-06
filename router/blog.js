const express = require('express');
const Ctrl = require('../controller/blog')

const blog = express.Router()



blog.get('/blog', Ctrl.getBlogs)
blog.post('/blog', Ctrl.addBlog)
blog.patch('/blog/:id', Ctrl.editBlog)
blog.delete('/blog/:id', Ctrl.deleteBlog)



exports.blog = blog