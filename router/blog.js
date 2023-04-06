const express = require('express');
const Ctrl = require('../controller/blog')

const blog = express.Router()



blog.get('/', Ctrl.getBlogs)
blog.post('/', Ctrl.addBlog)
blog.patch('/:id', Ctrl.editBlog)
blog.delete('/:id', Ctrl.deleteBlog)



exports.blog = blog