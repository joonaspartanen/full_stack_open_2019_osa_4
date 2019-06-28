const _ = require('lodash')

// eslint-disable-next-line no-unused-vars
const dummy = (blogs) => 1

const totalLikes = (blogs) => blogs.map(b => b.likes).reduce((a, b) => a + b, 0)

const favoriteBlog = (blogs) => blogs.reduce((a, b) => a.likes > b.likes ? a : b)

const mostBlogs = (blogs) =>
  _(blogs)
    .groupBy('author')
    .map((author, name) => ({
      author: name,
      blogs: _.size(author)
    }))
    .value()
    .reduce((a, b) => a.blogs > b.blogs ? a : b)

const mostLikes = (blogs) =>
  _(blogs)
    .groupBy('author')
    .map((author, name) => ({
      author: name,
      likes: _.sumBy(author, 'likes')
    }))
    .value()
    .reduce((a, b) => a.likes > b.likes ? a : b)

module.exports = {
  dummy, totalLikes, favoriteBlog, mostLikes, mostBlogs
}
