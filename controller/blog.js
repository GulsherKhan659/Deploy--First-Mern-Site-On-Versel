const mod = require('../model/blog')

exports.getBlogs = async (req, res) => {

    const Blog = await mod.Blog.find({})

    res.send(Blog)
}


exports.addBlog = async (req, res) => {


    const data = req.body
    const slag = data.title.replace(' ', '-').concat('-blog')
    const createdAt = Date.now()

    const Blog = await mod.Blog({ ...data, slag, createdAt })
    const result = Blog.save()



    res.send(result)
}


exports.editBlog = (req, res) => {
    res.send("Edit")
}

exports.deleteBlog = (req, res) => {
    res.send("Delete")
}