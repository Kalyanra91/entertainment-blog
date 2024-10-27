const express = require("express");
const helper = require("../Helper/Helper");
const multer = require("multer");
const Blog = require("../Model/BlogSchema");

const router = express.Router();

// get all blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ created_at: -1 });
    res.status(200).send(blogs);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: e });
  }
});