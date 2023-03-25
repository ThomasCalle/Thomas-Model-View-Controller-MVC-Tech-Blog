const { Post } = require("../models");

const postData = [
  {
    title: "First Blog Post",
    content: "This is the content of the first blog post.",
    user_id: 1,
  },
  // add more dummy chess blog posts here
  {
    title: "Second Blog Post",
    content: "This is the content of the second blog post.",
    user_id: 2,
  },
  {
    title: "Third Blog Post",
    content: "This is the content of the third blog post.",
    user_id: 3,
  },
  {
    title: "Fourth Blog Post",
    content: "This is the content of the fourth blog post.",
    user_id: 4,
  },
  {
    title: "Fifth Blog Post",
    content: "This is the content of the fifth blog post.",
    user_id: 5,
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
